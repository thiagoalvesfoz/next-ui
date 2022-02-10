import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorMode
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element | JSX.Element[];
};

import theme from 'theme/styles';

export default function ModalTemplate({ onClose, isOpen, children, title }: Props) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent
          bg={theme.card.bg[colorMode]}
          py={2}
          maxWidth={650}
          m={{ base: 5, md: 10 }}
        >
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton m="2" />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button variant="gradient" onClick={onClose}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
