import { FormControl, FormErrorMessage, Button, ButtonProps } from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import { useRef } from 'react';

type Props = {
  id?: string;
  name: string;
  accept: string;
  allowMultipleFiles?: boolean;
  label?: string;
  onChangeFile?: (file: File) => void;
  children?: JSX.Element | JSX.Element[];
} & ButtonProps;

export default function FileUpload(props: Props) {
  const {
    children,
    onChangeFile,
    name,
    accept,
    allowMultipleFiles,
    label,
    ...buttonProps
  } = props;
  const id = props.id || props.name;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl isInvalid={!!form.errors[field.name] && !!form.touched[field.name]}>
          {children ? (
            <div onClick={onClickHandler}>{children}</div>
          ) : (
            <Button {...buttonProps} onClick={onClickHandler}>
              {label || 'Upload'}
            </Button>
          )}
          <input
            id={id}
            type="file"
            accept={accept}
            multiple={allowMultipleFiles}
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (!event.target.files?.length) return;
              form.setFieldValue(field.name, event.target.files[0]);
              if (onChangeFile) onChangeFile(event.target.files[0]);
            }}
          />
          <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
