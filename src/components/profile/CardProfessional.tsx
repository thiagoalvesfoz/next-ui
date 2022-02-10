import { Text, useDisclosure } from '@chakra-ui/react';
import { Professional } from 'types/types';
import { useState } from 'react';
import Card from './Card';
import SelectItem from './SelectItem';
import FormProfessional from './forms/FormProfessional';
import * as api from 'mocks/user';

export default function CardProfessional() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<Professional | null>(null);

  const openFormHandler = () => {
    setSelectedItem(null);
    onOpen();
  };

  const formUpdateHandler = (value: Professional) => {
    setSelectedItem({
      title: value.title,
      kind: value.kind,
      company: value.company,
      location: value.location,
      start_at: value.start_at,
      finish_at: value.finish_at
    });
    onOpen();
  };

  return (
    <>
      <Card title="Experiência Profissional" openModal={openFormHandler}>
        {api.professional.map((item, key) => (
          <SelectItem key={key} onClick={() => formUpdateHandler(item)}>
            <Text fontSize="md" fontWeight="bold">
              {item.company}
            </Text>
            <Text fontSize="sm">
              {item.kind}, {item.title}
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
      <FormProfessional initialValues={selectedItem} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
