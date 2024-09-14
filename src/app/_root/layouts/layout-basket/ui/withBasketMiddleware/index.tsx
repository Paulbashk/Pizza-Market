/* eslint-disable jsx-a11y/anchor-is-valid */
import { type ReactNode, type ComponentType } from 'react';
import Link from 'next/link';

// hooks
import { useAddOrder } from '@/features/order/add';

// components
import { BasketEmptyMessage } from '@/entities/basket-empty';
import { validateFormUI } from '@/features/react-form';
import { ButtonColors } from '@/shared/ui';

// types
import type { IBasketPageType } from '@/shared/types/interfaces';

// configs
import { basketMessages } from '@/shared/libs/configs';

// assets
import * as S from './styled';

const buttonProps = {
  isActive: false,
  color: ButtonColors.yellow,
};

const { withValidateForm } = validateFormUI;

type TOmitProps<T> = Omit<T, 'renderButton' | 'renderContent' | 'navigation'>;

interface IWithBasketMiddlewareProps<Props = {}> {
  Layout: ComponentType<Props>;
  page: IBasketPageType;
  isEmptyBasket: boolean;
  renderContent: ReactNode;
}

export const withBasketMiddleware = <FormValues extends {}, Props extends {}>({
  Layout,
  page,
  isEmptyBasket,
  renderContent,
}: IWithBasketMiddlewareProps<Props>) => {
  const { title: pageTitle, name: pageName, nameButton, nextPage } = page;
  const isPageCheckout = pageName === 'checkout';
  const isForm = !isEmptyBasket && isPageCheckout;

  const navigation = {
    isButton: !isEmptyBasket,
    isTotalPrice: !isEmptyBasket,
    isPromocode: true,
    isItemsPrice: true,
    isCheckbox: false,
  };

  const ComponentWithForm = (props: TOmitProps<Props>) => {
    const { handleSubmitForm } = useAddOrder<FormValues>(nextPage);

    const renderButton = () => (
      <S.BasketButton
        {...buttonProps}
        nameError="terms"
        nameButton={nameButton}
        renderError={errorMsg => <S.Error>{errorMsg?.toString()}</S.Error>}
      />
    );

    const renderCheckbox = () => (
      <S.Checkbox
        name="terms"
        requiredText={basketMessages.BASKET_POLICY}
        labelText={[
          <S.CheckboxText key={basketMessages.BASKET_POLICY}>
            Я ознакомлен с{' '}
            <Link href="/policy/">пользовательским соглашением</Link> и даю
            согласие на обработку моих{' '}
            <Link href="/policy/">персональных данных</Link>
          </S.CheckboxText>,
        ]}
      />
    );

    const useFormArgs = {
      shouldUnregister: false,
    };

    const WithLayoutMiddlewareForm = withValidateForm<FormValues, Props>({
      Layout,
      useFormArgs,
      onSubmit: handleSubmitForm,
    });

    return (
      <WithLayoutMiddlewareForm
        renderContent={renderContent}
        renderButton={renderButton}
        renderCheckbox={renderCheckbox}
        title={pageTitle}
        navigation={{ ...navigation, isCheckbox: true }}
        {...(props as never as Props)}
      />
    );
  };

  const Component = (props: TOmitProps<Props>) => {
    const renderButton = () => (
      <S.BasketButtonLink href={nextPage} {...buttonProps}>
        {nameButton}
      </S.BasketButtonLink>
    );

    const renderContentWithEmptyBasket: ReactNode = isEmptyBasket ? (
      <BasketEmptyMessage message={basketMessages.BASKET_EMPTY} />
    ) : (
      renderContent
    );

    return (
      <Layout
        renderContent={renderContentWithEmptyBasket}
        renderButton={renderButton}
        title={pageTitle}
        navigation={navigation}
        {...(props as never as Props)}
      />
    );
  };

  return isForm ? ComponentWithForm : Component;
};
