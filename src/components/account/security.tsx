import { Button, Flex, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import Card from 'components/Card';
import CustomField from 'components/CustomField';
import { Formik, FormikHelpers } from 'formik';
import { passwordSchema } from 'utils/formValidations';

type Form = {
  password: string;
  new_password: string;
  password_confirm: string;
};

export default function Address() {
  const onSubmit = (values: Form, { setSubmitting }: FormikHelpers<Form>) => {
    console.log(values);
    setTimeout(() => setSubmitting(false), 400);
  };

  return (
    <>
      <Formik
        initialValues={{
          password: '',
          new_password: '',
          password_confirm: ''
        }}
        onSubmit={onSubmit}
        validationSchema={passwordSchema}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Card p={8} mb={8}>
              <Heading as="h2" size="md" mb={8}>
                Alterar Senha
              </Heading>

              <Wrap spacing={5}>
                <WrapItem width="full">
                  <CustomField
                    name="password"
                    type="password"
                    placeholder="******"
                    label="Senha atual"
                  />
                </WrapItem>

                <WrapItem width="full">
                  <CustomField
                    name="new_password"
                    type="password"
                    placeholder="******"
                    label="Nova senha"
                  />
                </WrapItem>

                <WrapItem width="full">
                  <CustomField
                    name="password_confirm"
                    type="password"
                    placeholder="******"
                    label="Confirmar"
                  />
                </WrapItem>
              </Wrap>
            </Card>

            <Flex mt={8}>
              <Button type="submit" variant="gradient" isLoading={isSubmitting}>
                Salvar
              </Button>
            </Flex>
          </form>
        )}
      </Formik>
    </>
  );
}
