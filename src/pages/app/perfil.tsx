import { Flex, Heading, IconButton, SystemProps, Wrap, WrapItem } from '@chakra-ui/react';
import { FaExchangeAlt } from 'react-icons/fa';
import { useState } from 'react';
import Application from 'layout/Application';
import CardProfile from 'components/profile/CardProfile';
import CardHistory from 'components/profile/CardHistory';
import CardAcademic from 'components/profile/CardAcademic';
import CardProfessional from 'components/profile/CardProfessional';
import CardLanguage from 'components/profile/CardLanguages';

export default function Perfil() {
  const [reverse, setReverse] = useState<SystemProps['flexDirection']>('row');

  const handleChange = () => {
    setReverse(reverse === 'row' ? 'row-reverse' : 'row');
  };

  return (
    <>
      <Flex mb="16" justifyContent="space-between" width="100%" maxWidth={1500}>
        <Heading>Meu Perfil</Heading>
        <IconButton
          bg="none"
          aria-label="profile"
          fontSize={20}
          onClick={handleChange}
          icon={<FaExchangeAlt />}
          size="sm"
        />
      </Flex>
      <Wrap direction={reverse} maxWidth={1500} spacing={5}>
        <WrapItem width={2} minWidth={350} flexGrow={3}>
          <CardProfile />
        </WrapItem>
        <WrapItem flexDirection="column" flexGrow={8}>
          <CardHistory />
          <CardAcademic />
          <CardProfessional />
          <CardLanguage />
        </WrapItem>
      </Wrap>
    </>
  );
}

Perfil.Layout = Application;
