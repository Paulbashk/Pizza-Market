import { type ComponentType } from 'react';
import { useForm, FormProvider, type UseFormProps } from 'react-hook-form';

interface IWithValidateFormArgs<FormValues extends {}, Props = {}> {
  Layout: ComponentType<Props>;
  useFormArgs: UseFormProps<FormValues>;
  onSubmit: (data: FormValues) => Promise<void>;
}

export const withValidateForm = <FormValues extends {}, Props extends {}>({
  Layout,
  useFormArgs,
  onSubmit,
}: IWithValidateFormArgs<FormValues, Props>) => {
  const Component = (props: Props) => {
    const methods = useForm<FormValues>({ ...useFormArgs });

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Layout {...props} />
        </form>
      </FormProvider>
    );
  };

  return Component;
};
