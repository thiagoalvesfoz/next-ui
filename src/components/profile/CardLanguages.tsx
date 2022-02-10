import { Text, useDisclosure } from '@chakra-ui/react';
import { Languages } from 'types/types';
import { useState } from 'react';
import Card from './Card';
import SelectItem from './SelectItem';
import FormLanguages from './forms/FormLanguages';
import * as api from 'mocks/user';

export default function CardLanguage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<Languages | null>(null);

  const openFormHandler = () => {
    setSelectedItem(null);
    onOpen();
  };

  const formUpdateHandler = (value: Languages) => {
    setSelectedItem({
      name: value.name,
      level: value.level
    });
    onOpen();
  };

  return (
    <>
      <Card title="Idiomas" openModal={openFormHandler}>
        {api.languages.map((item, i) => (
          <SelectItem key={i} onClick={() => formUpdateHandler(item)}>
            <Text fontSize="md" fontWeight="bold">
              {item.name}
            </Text>
            <Text fontSize="sm">Nível {item.level}</Text>
          </SelectItem>
        ))}
      </Card>
      <FormLanguages initialValues={selectedItem} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
