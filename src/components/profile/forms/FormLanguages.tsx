import { Flex, Select } from '@chakra-ui/react';
import { FormikHelpers } from 'formik';
import { Languages } from 'types/types';
import { level_language } from 'mocks/utils';
import CustomField from 'components/CustomField';
import ModalFormik from './ModalFormik';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialValues: Languages | null;
}

export default function FormLanguages({ isOpen, onClose, ...props }: Props) {
  const initialValues: Languages = {
    name: '',
    level: ''
  };

  const onSubmit = (values: Languages, { setSubmitting }: FormikHelpers<Languages>) => {
    console.log(values);
    setTimeout(() => setSubmitting(false), 400);
  };

  return (
    <ModalFormik
      title="Meus idiomas"
      initialValues={initialValues}
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Flex direction="column" gap={6} mb="5">
        <CustomField
          isRequired
          name="name"
          label="Idioma"
          placeholder="Ex: Ingles"
          defaultValue={props.initialValues?.name}
        />

        <CustomField
          as={Select}
          name="level"
          label="Nível"
          placeholder="Selecione"
          defaultValue={props.initialValues?.level}
        >
          {level_language.map((item, i) => (
            <option key={i} value={item.label}>
              {item.label}
            </option>
          ))}
        </CustomField>
      </Flex>
    </ModalFormik>
  );
}
