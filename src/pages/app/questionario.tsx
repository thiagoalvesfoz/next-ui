import { Heading } from '@chakra-ui/react';
import CardQuiz from 'components/CardQuiz';
import Application from 'layout/Application';

export default function Questionario() {
  return (
    <>
      <Heading mb="12">Questionário</Heading>
      <CardQuiz />
    </>
  );
}

Questionario.Layout = Application;
