import { Flex, FormControl, FormLabel, Select, Wrap, WrapItem } from '@chakra-ui/react';
import { months, years } from 'mocks/utils';
import { FormikHelpers } from 'formik';
import { Academic } from 'types/types';
import CustomField from 'components/CustomField';
import ModalFormik from './ModalFormik';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialValues: Academic | null;
}

export default function FormAcademic({ isOpen, onClose, ...props }: Props) {
  const initialValues: Academic = {
    institution: '',
    degree: '',
    course: '',
    start_at: { month: '', year: '' },
    finish_at: { month: '', year: '' }
  };

  const onSubmit = (values: Academic, { setSubmitting }: FormikHelpers<Academic>) => {
    console.log(values);
    setTimeout(() => setSubmitting(false), 400);
  };

  return (
    <ModalFormik
      title="Minhas informações acadêmicas"
      initialValues={initialValues}
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Flex direction="column" gap={6} mb="5">
        <CustomField
          isRequired
          name="institution"
          label="Instituição de ensino"
          placeholder="Ex: Uniamerica Descomplica"
          defaultValue={props.initialValues?.institution}
        />

        <CustomField
          isRequired
          name="degree"
          label="Diploma"
          placeholder="Ex: Bacharelado"
          defaultValue={props.initialValues?.degree}
        />

        <CustomField
          isRequired
          name="course"
          label="Área de estudo"
          placeholder="Ex: Engenharia de Software"
          defaultValue={props.initialValues?.course}
        />

        <FormControl isRequired>
          <FormLabel>Data de início</FormLabel>
          <Wrap spacing="5">
            <WrapItem flexGrow="1">
              <CustomField
                as={Select}
                name="start_at.month"
                placeholder="Selecione"
                defaultValue={props.initialValues?.start_at?.month}
              >
                {months.map((item, i) => (
                  <option key={i} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </CustomField>
            </WrapItem>
            <WrapItem flexGrow="1">
              <CustomField
                as={Select}
                name="start_at.year"
                placeholder="Selecione"
                defaultValue={props.initialValues?.start_at?.year}
              >
                {years.map((item, i) => (
                  <option key={i} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </CustomField>
            </WrapItem>
          </Wrap>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Data de término</FormLabel>
          <Wrap spacing="5">
            <WrapItem flexGrow="1">
              <CustomField
                as={Select}
                name="finish_at.month"
                placeholder="Selecione"
                defaultValue={props.initialValues?.finish_at?.month}
              >
                {months.map((item, i) => (
                  <option key={i} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </CustomField>
            </WrapItem>
            <WrapItem flexGrow="1">
              <CustomField
                as={Select}
                name="finish_at.year"
                placeholder="Selecione"
                defaultValue={props.initialValues?.finish_at?.year}
              >
                {years.map((item, i) => (
                  <option key={i} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </CustomField>
            </WrapItem>
          </Wrap>
        </FormControl>
      </Flex>
    </ModalFormik>
  );
}
