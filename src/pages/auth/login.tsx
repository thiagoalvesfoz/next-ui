import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
  Text,
  FormErrorMessage
} from '@chakra-ui/react';
import { Formik, Field, FieldProps } from 'formik';
import { loginSchema } from 'utils/formValidations';
import * as Icon from 'react-icons/fi';
import Link from 'next/link';
import Auth from 'layout/Auth';
import Card from 'components/Card';
import { useRouter } from 'next/router';

type Form = {
  email?: string;
  password?: string;
};

export default function Login() {
  const router = useRouter();

  const onSubmit = (values: Form) => {
    console.log(values);
    router.push('/app/perfil');
  };

  return (
    <Card maxWidth={480}>
      <Heading as="h1" mb={7} textAlign="center">
        Área do Aluno
      </Heading>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email" type="email">
              {({ field, form }: FieldProps) => (
                <FormControl
                  mb={5}
                  isRequired
                  isInvalid={!!form.errors.email && !!form.touched.email}
                >
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <InputGroup>
                    <Input {...field} id="email" placeholder="fulano@email.com" />
                    <InputLeftElement width="3rem">
                      <Icon.FiUser />
                    </InputLeftElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="password">
              {({ field, form }: FieldProps) => (
                <FormControl
                  mb={5}
                  isInvalid={!!form.errors.password && !!form.touched.password}
                  isRequired
                >
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <Input {...field} type="password" placeholder="*********" />
                    <InputLeftElement width="3rem">
                      <Icon.FiLock />
                    </InputLeftElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Flex width="full" mb={5} justifyContent="center">
              <Button type="submit" variant="gradient" isLoading={isSubmitting}>
                Entrar
              </Button>
            </Flex>
          </form>
        )}
      </Formik>
      <Box textAlign="center">
        <Text fontSize="sm" mb="1">
          <Link href="#/">Esqueceu sua senha?</Link>
        </Text>
        <Text fontSize="sm">
          Ainda não tem conta?{' '}
          <b>
            <Link href="#/">Cadastre-se</Link>
          </b>
        </Text>
      </Box>
    </Card>
  );
}

Login.Layout = Auth;
