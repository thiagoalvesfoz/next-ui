import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { BsPlusLg } from 'react-icons/bs';
import Card from 'components/Card';

type CardProps = {
  title: string;
  openModal?: () => void;
  children: JSX.Element | JSX.Element[];
};

export default function CardItem(props: CardProps) {
  return (
    <Card mb={5}>
      <Flex mb={5} alignItems="center" justifyContent={'space-between'}>
        <Heading as="h2" size="md">
          {props.title}
        </Heading>
        <IconButton
          aria-label="Menu"
          bg="none"
          fontSize={20}
          onClick={props.openModal}
          icon={<BsPlusLg />}
          size="sm"
        />
      </Flex>
      {props.children}
    </Card>
  );
}
