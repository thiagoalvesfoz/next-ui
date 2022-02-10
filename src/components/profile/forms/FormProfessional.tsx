import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Field, FieldProps, FormikHelpers } from 'formik';
import { Professional } from 'types/types';
import { months, years, type_work } from 'mocks/utils';
import CustomField from 'components/CustomField';
import ModalFormik from './ModalFormik';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialValues: Professional | null;
}

export default function FormProfessional({ isOpen, onClose, ...props }: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(
    () => setChecked(!props.initialValues?.finish_at),
    [props.initialValues?.finish_at]
  );

  const initialValues: Professional = {
    title: '',
    kind: '',
    company: '',
    location: '',
    start_at: { month: '', year: '' },
    finish_at: { month: '', year: '' }
  };

  const onSubmit = (
    values: Professional,
    { setSubmitting }: FormikHelpers<Professional>
  ) => {
    console.log(values);
    setTimeout(() => setSubmitting(false), 400);
  };

  return (
    <ModalFormik
      title="Minhas experiências profissionais"
      initialValues={initialValues}
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Flex direction="column" gap={6} mb="5">
        <CustomField
          isRequired
          name="title"
          label="Título"
          placeholder="Ex: Analista de Infraestrutura"
          defaultValue={props.initialValues?.title}
        />

        <CustomField
          as={Select}
          label="Tipo de emprego"
          name="kind"
          placeholder="Selecione"
          defaultValue={props.initialValues?.kind}
        >
          {type_work.map((item, i) => (
            <option key={i} value={item.label}>
              {item.label}
            </option>
          ))}
        </CustomField>

        <CustomField
          isRequired
          name="company"
          label="Nome da empresa"
          placeholder="Ex: Uniamerica Descomplica"
          defaultValue={props.initialValues?.company}
        />

        <CustomField
          isRequired
          name="location"
          label="Localidade"
          placeholder="Ex: Foz do Iguaçu"
          defaultValue={props.initialValues?.location}
        />

        <Field name="finish_at">
          {({ form }: FieldProps) => (
            <Checkbox
              size="lg"
              colorScheme="pink"
              isChecked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
                form.setTouched({ checked: e.target.checked });
              }}
            >
              Trabalho atualmente neste cargo
            </Checkbox>
          )}
        </Field>

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

        <FormControl isDisabled={checked}>
          <FormLabel>Data de término</FormLabel>
          <Wrap spacing="5">
            <WrapItem flexGrow="1">
              <CustomField
                as={Select}
                isDisabled={checked}
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
                isDisabled={checked}
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
