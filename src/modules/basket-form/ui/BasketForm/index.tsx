import { type ComponentPropsWithoutRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';

// components
import { RadioSizes } from '@/shared/ui';

// config
import { inputGroupsConfig } from '../../libs/config';

// libs
import { mapToInputsGroups } from '../../libs/maps';

// assets
import * as S from './styled';

interface IBasketFormProps extends ComponentPropsWithoutRef<'div'> {}

export const BasketForm = (props: IBasketFormProps) => {
  const {
    register,
    control,
    formState: { errors, isSubmitted },
  } = useFormContext();
  const registerWithMask = useHookFormMask(register);

  return (
    <S.Wrapper {...props}>
      <S.FormBlock
        blockTitle="Данные для доставки"
        groups={[
          ...mapToInputsGroups({
            inputGroups: inputGroupsConfig,
            options: { register, errors, isSubmitted, registerWithMask },
          }),
        ]}
      />
      <S.FormBlock
        blockTitle="Оплата"
        groups={[
          {
            size: 'full',
            name: 'type_pay',
            elements: [
              <Controller
                name="paymentType"
                control={control}
                defaultValue="Наличными курьеру"
                render={({ field }) => (
                  <S.RadioGroup defaultValue="Наличными курьеру" {...field}>
                    <S.RadioButton
                      value="Наличными курьеру"
                      label="Наличными курьеру"
                      sizeButton={RadioSizes.large}
                    />
                    <S.RadioButton
                      value="Картой курьеру"
                      label="Картой курьеру"
                      sizeButton={RadioSizes.large}
                    />
                  </S.RadioGroup>
                )}
              />,
            ],
          },
        ]}
      />
      <S.FormBlock
        blockTitle="Комментарий к заказу"
        groups={[
          {
            size: 'full',
            name: 'comment',
            elements: [
              <S.Textarea
                {...register('comment')}
                placeholder="Ваш комментарий увидит только курьер"
              />,
            ],
          },
        ]}
      />
    </S.Wrapper>
  );
};
