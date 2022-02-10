import { Heading } from '@chakra-ui/react';
import PdfUpload from 'components/PdfUpload';
import Application from 'layout/Application';

export default function Notas() {
  return (
    <>
      <Heading mb="12">Minhas Notas</Heading>
      <PdfUpload />
    </>
  );
}

Notas.Layout = Application;
