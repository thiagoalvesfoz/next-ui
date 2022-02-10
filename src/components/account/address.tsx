import { Button, Flex, Heading, Select, Wrap, WrapItem } from '@chakra-ui/react';
import Card from 'components/Card';
import CustomField from 'components/CustomField';
import { Formik, FormikHelpers } from 'formik';
import { addressSchema } from 'utils/formValidations';
import { cepMask } from 'utils/mask';

type Form = {
  cep: string;
  logradouro: string;
  number_address: string;
  complement: string;
  distric: string;
  city: string;
  state: string;
  country: string;
};

export default function Address() {
  const initialValues: Form = {
    cep: '',
    logradouro: '',
    number_address: '',
    complement: '',
    distric: '',
    city: '',
    state: '',
    country: 'brasil'
  };

  const onSubmit = (values: Form, { setSubmitting }: FormikHelpers<Form>) => {
    console.log(values);
    setTimeout(() => setSubmitting(false), 400);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={addressSchema}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Card p={8} mb={8}>
              <Heading as="h2" size="md" mb={8}>
                Endereço
              </Heading>

              <Wrap spacing={5}>
                <WrapItem minWidth={140} width={100} flexGrow="1">
                  <CustomField
                    mask={cepMask}
                    name="cep"
                    placeholder="00000-000"
                    label="CEP"
                  />
                </WrapItem>

                <WrapItem minWidth={200} flexGrow="10">
                  <CustomField
                    name="logradouro"
                    placeholder="Ex: Rua José Maria de Brito"
                    label="Logradouro"
                  />
                </WrapItem>

                <WrapItem minWidth={100} width={100} flexGrow="2">
                  <CustomField
                    name="number_address"
                    placeholder="Ex: 70"
                    label="Número"
                    type="number"
                  />
                </WrapItem>
              </Wrap>

              <Wrap spacing={5}>
                <WrapItem flexGrow="1">
                  <CustomField
                    name="complement"
                    placeholder="Ex: Apartamento Bloco B"
                    label="Complemento"
                  />
                </WrapItem>
                <WrapItem flexGrow="1">
                  <CustomField name="distric" placeholder="Ex: Centro" label="Bairro" />
                </WrapItem>
              </Wrap>

              <Wrap spacing="5">
                <WrapItem flexGrow="1">
                  <CustomField
                    as={Select}
                    name="city"
                    placeholder="Selecione a cidade"
                    label="Cidade"
                  >
                    <option value="Foz do Iguaçu">Foz do Iguaçu</option>
                    <option value="Cascavel">Cascavel</option>
                  </CustomField>
                </WrapItem>
                <WrapItem flexGrow="1">
                  <CustomField
                    as={Select}
                    name="state"
                    placeholder="Selecione o estado"
                    label="Estado"
                  >
                    <option value="Paraná - PR">Paraná - PR</option>
                    <option value="Santa Catarinta - SC">Santa Catarinta - SC</option>
                  </CustomField>
                </WrapItem>
                <WrapItem flexGrow="1">
                  <CustomField as={Select} disabled name="country" label="País">
                    <option value="brasil">Brasil</option>
                  </CustomField>
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
