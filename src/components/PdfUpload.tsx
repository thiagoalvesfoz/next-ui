import { Button, Heading, Input, Text } from '@chakra-ui/react';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import { useRef, useState } from 'react';
import Card from './Card';
import PdfViewer from './pdfViewer';

type Form = {
  notasPdf: File | null;
};

const initialValues: Form = {
  notasPdf: null
};

export default function PdfUpload() {
  const ref = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onSubmit = (values: Form, { setSubmitting }: FormikHelpers<Form>) => {
    console.log(values);
    setTimeout(() => setSubmitting(false), 400);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return null;
    }
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setPreview(fileUrl);
    return file;
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Card maxWidth={1000}>
              <Heading fontSize="xl" fontWeight="bold" marginBottom={1}>
                Faça o upload das suas notas do ENEM em formato PDF.
              </Heading>
              <Text marginBottom={15}>
                Certifique-se de que é o arquivo correto antes de enviar.
              </Text>
              <Field name="notasPdf">
                {({ form, field }: FieldProps) => (
                  <>
                    <Input
                      type="file"
                      accept="application/pdf"
                      name="notasPdf"
                      ref={ref}
                      onChange={(e) => {
                        form.setFieldValue(field.name, onChangeHandler(e));
                      }}
                      hidden
                    />
                    <Button variant="outline" onClick={() => ref.current?.click()}>
                      Selecionar arquivo
                    </Button>
                  </>
                )}
              </Field>
              <PdfViewer file={preview} />
            </Card>
            <Button isLoading={isSubmitting} variant="gradient" type="submit">
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
