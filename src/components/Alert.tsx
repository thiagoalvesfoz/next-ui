import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useColorMode
} from '@chakra-ui/react';
import { useRef } from 'react';
import theme from 'theme/styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  whenAccept: () => void;
};

export default function Alert({ isOpen, onClose, whenAccept }: Props) {
  const cancelRef = useRef(null);
  const { colorMode } = useColorMode();
  const handleConfirm = () => {
    whenAccept();
    onClose();
  };

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent bg={theme.card.bg[colorMode]}>
          <AlertDialogHeader>Descartar Alterações?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Tem certeza de que deseja descartar as alterações?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              variant="outline"
              size="sm"
              py={4}
              px={5}
              ref={cancelRef}
              onClick={onClose}
            >
              Não
            </Button>
            <Button size="sm" py={4} px={5} ml={3} onClick={handleConfirm}>
              Descartar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
