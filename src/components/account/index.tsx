import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Text,
  Textarea,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { Field, FieldProps, Formik, FormikHelpers } from 'formik';
import { accountSchema } from 'utils/formValidations';
import { phoneMask, cpfMask, dateMask, unmask, linkedinMask } from 'utils/mask';
import { user } from 'mocks/user';
import CustomField from 'components/CustomField';
import Card from 'components/Card';
import ChangeAvatar from './ChangeAvatar';

type Form = {
  avatar?: File | string | undefined;
  name: string;
  last_name: string;
  cpf: string;
  birthday: string;
  gender: string;
  email: string;
  phone: string;
  about: string;
  link_social: string;
};

const form: Form = {
  avatar: undefined,
  name: user.name,
  last_name: user.last_name,
  birthday: user.birthday,
  gender: user.gender,
  email: user.email,
  about: user.about,
  cpf: cpfMask(user.document),
  phone: phoneMask(user.phone),
  link_social: linkedinMask(user.link_social)
};

export default function Account() {
  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(user.avatar);
  const onSubmit = (values: Form, { setSubmitting }: FormikHelpers<Form>) => {
    const forms = {
      ...values,
      cpf: unmask(values.cpf),
      phone: unmask(values.phone)
    };
    console.log(forms);
    setTimeout(() => setSubmitting(false), 400);
  };

  const handleChangeAvatar = (file: File | undefined) => {
    if (file) setAvatarPreview(URL.createObjectURL(file));
    else setAvatarPreview(undefined);
  };

  return (
    <>
      <Formik initialValues={form} onSubmit={onSubmit} validationSchema={accountSchema}>
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Card p={8}>
              <Heading as="h2" size="md" mb={8}>
                Perfil
              </Heading>

              <Wrap spacing="12">
                <WrapItem
                  width="1"
                  minWidth="140px"
                  flexGrow={1}
                  flexDirection="column"
                  alignItems="center"
                >
                  <ChangeAvatar
                    fieldName="avatar"
                    size={32}
                    avatar={avatarPreview}
                    onChange={handleChangeAvatar}
                  />

                  <Field name="avatar">
                    {({ field, form }: FieldProps) => (
                      <Button
                        variant="solid"
                        size="xs"
                        my={5}
                        onClick={() => {
                          form.setFieldValue(field.name, undefined);
                          handleChangeAvatar(undefined);
                        }}
                      >
                        remover foto
                      </Button>
                    )}
                  </Field>

                  <Text fontSize="xs">
                    Recomendamos uma imagem de, pelo menos, 600x240. Você pode enviar um
                    JPG ou PNG com menos de 5MB.
                  </Text>
                </WrapItem>

                <WrapItem flexGrow={1}>
                  <Box width="full">
                    <Wrap spacing="8">
                      <WrapItem flexGrow="1">
                        <CustomField
                          mask={linkedinMask}
                          name="link_social"
                          placeholder="Ex: myusername"
                          label="Linkedin"
                        />
                      </WrapItem>
                    </Wrap>
                    <Wrap spacing="8">
                      <WrapItem flexGrow="1">
                        <CustomField
                          as={Textarea}
                          name="about"
                          placeholder="Eu amo gatos"
                          label="Sobre mim"
                        />
                      </WrapItem>
                    </Wrap>
                  </Box>
                </WrapItem>
              </Wrap>
            </Card>

            <Card p={8} mb={8}>
              <Heading as="h2" size="md" mb={8}>
                Dados Pessoais
              </Heading>

              <Wrap spacing={5}>
                <WrapItem flexGrow="1">
                  <CustomField name="name" placeholder="Jane" label="Nome" />
                </WrapItem>

                <WrapItem flexGrow="1">
                  <CustomField name="last_name" placeholder="Doe" label="Sobrenome" />
                </WrapItem>
              </Wrap>

              <Wrap spacing={5}>
                <WrapItem flexGrow="1">
                  <CustomField
                    mask={cpfMask}
                    name="cpf"
                    placeholder="000.000.000-00"
                    label="CPF"
                  />
                </WrapItem>
                <WrapItem flexGrow="1">
                  <CustomField
                    mask={dateMask}
                    name="birthday"
                    type="text"
                    placeholder="Ex: 13/07/1997"
                    label="Data de Nascimento"
                  />
                </WrapItem>
              </Wrap>

              <Wrap spacing="5">
                <WrapItem flexGrow="1">
                  <CustomField as={Select} name="gender" label="Gênero">
                    <option value="">Prefiro não informar</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </CustomField>
                </WrapItem>
              </Wrap>
            </Card>

            <Card p={8}>
              <Heading as="h2" size="md" mb={8}>
                Informações de contato
              </Heading>

              <Wrap spacing="5">
                <WrapItem flexGrow="1">
                  <CustomField
                    name="email"
                    type="email"
                    placeholder="Ex.: Jane.doe@email.com"
                    label="Email"
                    disabled
                  />
                </WrapItem>

                <WrapItem flexGrow="1">
                  <CustomField
                    mask={phoneMask}
                    name="phone"
                    type="tel"
                    placeholder="Ex.: (45) 99999-9000"
                    label="Telefone"
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
