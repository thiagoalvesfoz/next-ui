import { Text, useDisclosure } from '@chakra-ui/react';
import { Academic } from 'types/types';
import { useState } from 'react';
import Card from './Card';
import SelectItem from './SelectItem';
import FormAcademic from './forms/FormAcademic';
import * as api from 'mocks/user';

export default function CardAcademic() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<Academic | null>(null);

  const openFormHandler = () => {
    setSelectedItem(null);
    onOpen();
  };

  const formUpdateHandler = (values: Academic) => {
    setSelectedItem({
      institution: values.institution,
      degree: values.degree,
      course: values.course,
      start_at: values.start_at,
      finish_at: values.finish_at
    });
    onOpen();
  };

  return (
    <>
      <Card title="Acadêmico" openModal={openFormHandler}>
        {api.academic.map((item, key) => (
          <SelectItem key={key} onClick={() => formUpdateHandler(item)}>
            <Text fontSize="md" fontWeight="bold">
              {item.institution}
            </Text>
            <Text fontSize="sm">
              {item.degree}, {item.course}
            </Text>
            <Text fontSize="sm">
              {item.start_at.month.slice(0, 3)}. de {item.start_at.year} -{' '}
              {item.finish_at
                ? `${item.finish_at.month.slice(0, 3)}. de ${item.finish_at.year}`
                : 'o momento'}
            </Text>
          </SelectItem>
        ))}
      </Card>
      <FormAcademic initialValues={selectedItem} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
