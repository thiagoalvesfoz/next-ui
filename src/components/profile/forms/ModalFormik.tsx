import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react';
import { Form, Formik, FormikHelpers } from 'formik';
import theme from 'theme/styles';
import Alert from 'components/Alert';

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  initialValues: object;
  children: JSX.Element | JSX.Element[];
  onSubmit: (values: object, formikHelpers: FormikHelpers<object>) => void;
}

export default function ModalFormik({ isOpen, onClose, title, ...props }: Props) {
  const { colorMode } = useColorMode();

  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert
  } = useDisclosure();

  return (
    <Formik initialValues={props.initialValues} onSubmit={props.onSubmit}>
      {({ resetForm, dirty, touched, submitForm }) => (
        <Form>
          <Alert
            isOpen={isOpenAlert}
            onClose={onCloseAlert}
            whenAccept={() => {
              onClose();
              resetForm();
            }}
          />
          <Modal
            onClose={() => {
              if (dirty && Object.keys(touched).length) {
                onOpenAlert();
                return;
              } else {
                resetForm();
                onClose();
              }
            }}
            isOpen={isOpen}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent
              bg={theme.card.bg[colorMode]}
              py={2}
              maxWidth={650}
              m={{ base: 5, md: 10 }}
            >
              <ModalHeader>{title}</ModalHeader>
              <ModalCloseButton m="2" />
              <ModalBody>{props.children}</ModalBody>
              <ModalFooter>
                <Button type="submit" variant="gradient" onClick={submitForm}>
                  Salvar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Form>
      )}
    </Formik>
  );
}
