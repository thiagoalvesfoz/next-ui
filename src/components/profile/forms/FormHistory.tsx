import { FormikHelpers } from 'formik';
import { MyHistory } from 'types/types';
import ModalFormik from './ModalFormik';
import CustomField from 'components/CustomField';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialValues: MyHistory | null;
}

export default function FormHistory({ isOpen, onClose, ...props }: Props) {
  const initialValues: MyHistory = {
    course: ''
  };

  const onSubmit = (values: MyHistory, { setSubmitting }: FormikHelpers<MyHistory>) => {
    console.log(values);
    setTimeout(() => setSubmitting(false), 400);
  };

  return (
    <ModalFormik
      title="Minha História"
      initialValues={initialValues}
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <CustomField
        isRequired
        name="course"
        label="Curso dos sonhos"
        placeholder="Ex: Engenharia de Software"
        defaultValue={props.initialValues?.course}
      />
    </ModalFormik>
  );
}
