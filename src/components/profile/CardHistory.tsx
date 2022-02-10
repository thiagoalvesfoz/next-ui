import { Text, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { MyHistory } from 'types/types';
import Card from './Card';
import SelectItem from './SelectItem';
import FormHistory from './forms/FormHistory';
import * as api from 'mocks/user';

export default function CardHistory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<MyHistory | null>(null);

  const openFormHandler = () => {
    setSelectedItem(null);
    onOpen();
  };

  const formUpdateHandler = (values: MyHistory) => {
    setSelectedItem({
      course: values.course
    });
    onOpen();
  };

  return (
    <>
      <Card title="Minha História" openModal={openFormHandler}>
        <SelectItem onClick={() => formUpdateHandler(api.myHistory)}>
          <Text fontSize="md" fontWeight="bold">
            Curso dos sonhos
          </Text>
          <Text fontSize="sm">{api.myHistory.course}</Text>
        </SelectItem>
      </Card>
      <FormHistory initialValues={selectedItem} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
