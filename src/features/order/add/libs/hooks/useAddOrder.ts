import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/shared/libs/hooks';
import { OrderService } from '@/shared/api/orderService';
import {
  productBasketHooks,
  productBasketModel,
  type ProductBasketTypes,
} from '@/entities/product-basket';
import { saveToCookie } from '@/shared/libs/utils';
import { orderCookie } from '@/shared/libs/configs';

const { useGetAllData } = productBasketHooks;
const { NAME_SAVE_COOKIE, MONTH_SAVE_COOKIE } = orderCookie;

type TUseAddOrderReturn<FormValues> = {
  handleSubmitForm: (data: FormValues) => Promise<void>;
};

export const useAddOrder = <FormValues extends {}>(
  nextPage: string,
): TUseAddOrderReturn<FormValues> => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const basketProductData = useGetAllData();

  const handleSubmitForm = async (data: FormValues) => {
    // преобразование данных
    const order = {
      client: { ...data },
      ...basketProductData,
    };

    // сохранить ордер в БД
    const { data: responseOrderData } =
      await OrderService.addOrder<ProductBasketTypes.Product>(order);

    const { id: orderNumber } = responseOrderData;

    // сохранение данных в БД (на 1 день)
    await saveToCookie(
      NAME_SAVE_COOKIE,
      { ...order, id: orderNumber },
      MONTH_SAVE_COOKIE,
    );

    // маршрутизация на следующую страницу (логика: /order/)
    await router.push(nextPage, { scroll: false });

    // очистика корзины
    dispatch(productBasketModel.actions.clearBasket());
  };

  return { handleSubmitForm };
};
