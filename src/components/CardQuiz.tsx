import {
  Box,
  Flex,
  Heading,
  Progress,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Button,
  HStack
} from '@chakra-ui/react';
import Card from 'components/Card';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import { questions } from '../mocks/utils';

const answers: string[] = [];

export default function CardQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [index, setIndex] = useState(0);

  function back() {
    if (currentPage > 1) {
      answers[index] = currentAnswer;
      setCurrentPage(currentPage - 1);
      setCurrentQuestion(currentQuestion - 1);
      setIndex(index - 1);
    }
  }

  function forward() {
    if (currentPage < questions.length) {
      answers[index] = currentAnswer;
      setCurrentPage(currentPage + 1);
      setCurrentQuestion(currentQuestion + 1);
      setIndex(index + 1);
      console.log(answers);
    }
  }

  return (
    <Card>
      <Heading fontSize="xl" fontWeight="bold">
        {currentPage}. {questions[currentQuestion].question}
      </Heading>
      {/* <Form> */}
      <RadioGroup
        colorScheme="green"
        marginTop={38}
        onChange={(e) => setCurrentAnswer(e)}
        defaultValue={answers[index]}
      >
        <Stack direction="column" spacing={6}>
          <Radio value={questions[currentQuestion].option1}>
            {questions[currentQuestion].option1}
          </Radio>
          <Radio value={questions[currentQuestion].option2}>
            {questions[currentQuestion].option2}
          </Radio>
          <Radio value={questions[currentQuestion].option3}>
            {questions[currentQuestion].option3}
          </Radio>
          <Radio value={questions[currentQuestion].option4}>
            {questions[currentQuestion].option4}
          </Radio>
          <Radio value={questions[currentQuestion].option5}>
            {questions[currentQuestion].option5}
          </Radio>
        </Stack>
      </RadioGroup>
      <Flex justify="space-between" marginTop={5}>
        <Box width={400} marginTop={30}>
          <Progress size="xs" colorScheme="green" value={currentPage * 10} />
          <Text marginTop={2}>{currentPage} de 10</Text>
        </Box>
        <HStack justify={'end'} marginLeft={30} spacing={5}>
          <Button
            maxWidth={120}
            variant="outline"
            colorScheme="pink"
            leftIcon={<FiArrowLeft color="pink" />}
            onClick={() => back()}
          >
            Anterior
          </Button>
          {currentPage < 10 ? (
            <Button
              maxWidth={120}
              rightIcon={<FiArrowRight color="white" />}
              onClick={() => forward()}
            >
              Próxima
            </Button>
          ) : (
            <Button type="submit" maxWidth={120} onSubmit={() => console.log('foi')}>
              Enviar
            </Button>
          )}
        </HStack>
      </Flex>
      {/* </Form> */}
    </Card>
  );
}
