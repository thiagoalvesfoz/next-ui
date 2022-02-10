import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';

import Application from 'layout/Application';

import Account from 'components/account';
import Address from 'components/account/address';
import Security from 'components/account/security';

export default function Perfil() {
  const tabColor = 'gray.500';

  return (
    <Box width="full">
      <Box mb={20}>
        <Heading as="h1" pb={2}>
          Configurações
        </Heading>
        <Text>Confira e atualize seus dados para agilizar a conquista da sua bolsa.</Text>
      </Box>

      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab color={tabColor}>Minha Conta</Tab>
          <Tab color={tabColor}>Endereço</Tab>
          <Tab color={tabColor}>Segurança</Tab>
        </TabList>

        <TabPanels mt="10" maxWidth={1200}>
          <TabPanel px={0}>
            <Account />
          </TabPanel>
          <TabPanel px={0}>
            <Address />
          </TabPanel>
          <TabPanel px={0}>
            <Security />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

Perfil.Layout = Application;
