import * as Yup from 'yup';
import { validaCPF } from './cpfValidator';

import { setLocale } from 'yup';

setLocale({
  mixed: {
    default: 'Não é válido',
    required: 'Este campo é obrigatório',
    notType: 'Não é um tipo válido'
  },
  number: {
    min: 'Mínimo ${min} caracteres',
    max: 'Máximo ${max} caracteres'
  },
  string: {
    email: 'email invalido meu chapa',
    min: 'Mínimo ${min} caracteres',
    max: 'Máximo ${max} caracteres'
  }
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

export const accountSchema = Yup.object().shape({
  avatar: Yup.mixed(),
  name: Yup.string().required(),
  last_name: Yup.string().required(),
  cpf: Yup.string().test('cpf', 'CPF invalido', validaCPF).required(),
  birthday: Yup.string().required(),
  gender: Yup.string().optional(),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
  about: Yup.string().notRequired(),
  link_social: Yup.string().test(
    'linkedin',
    'Não é um link válido',
    (v: string | undefined): boolean => {
      if (v?.includes('.')) return false;
      else return true;
    }
  )
});

export const addressSchema = Yup.object().shape({
  cep: Yup.string().required(),
  logradouro: Yup.string().required(),
  number_address: Yup.number().max(100000).required(),
  complement: Yup.string().notRequired(),
  distric: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  country: Yup.string().notRequired()
});

export const passwordSchema = Yup.object().shape({
  password: Yup.string(),
  new_password: Yup.string().min(6),
  password_confirm: Yup.string().oneOf(
    [Yup.ref('new_password'), null],
    'As senhas não correspondem'
  )
});
