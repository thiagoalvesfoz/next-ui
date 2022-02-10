import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { Field, FieldProps, useFormikContext } from 'formik';

type CustomFieldProps = {
  label?: string;
  mask: (value: string) => string;
  disabled?: boolean;
  name: string;
} & InputProps;

export default function CustomField({
  label,
  mask,
  isRequired,
  isDisabled,
  children,
  defaultValue,
  ...props
}: CustomFieldProps) {
  const id = props.id || props.name;
  const InputComponent = props.as || Input;

  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (defaultValue) {
      setFieldValue(props.name, defaultValue);
    }
  }, [props.name, defaultValue, setFieldValue]);

  useEffect(() => {
    if (isDisabled) {
      setFieldValue(props.name, '');
    }
  }, [props.name, isDisabled, setFieldValue]);

  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => (
        <FormControl
          isDisabled={isDisabled}
          isRequired={isRequired}
          isInvalid={!!form.errors[field.name] && !!form.touched[field.name]}
        >
          {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
          <InputComponent
            id={id}
            {...field}
            {...props}
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(field.name)(mask(target.value));
            }}
          >
            {children}
          </InputComponent>
          <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

CustomField.defaultProps = {
  mask: (value: string) => value
};
