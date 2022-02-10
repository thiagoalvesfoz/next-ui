import {
  Box,
  Flex,
  FlexProps,
  Heading,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { sidebar } from 'layout/Application/styles';
import Logo from 'components/Logo';

// icons
import { FaGraduationCap } from 'react-icons/fa';
import { MdChecklist, MdSupport } from 'react-icons/md';
import { ImUser } from 'react-icons/im';

import NavItem from './NavItem';
import { FiSettings } from 'react-icons/fi';

const routes = [
  {
    path: '/perfil',
    name: 'Perfil',
    icon: ImUser,
    layout: '/app'
  },
  {
    path: '/notas',
    name: 'Notas ENEM',
    icon: FaGraduationCap,
    layout: '/app'
  },
  {
    path: '/questionario',
    name: 'Questionário',
    icon: MdChecklist,
    layout: '/app'
  }
];

export default function Sidebar(props: FlexProps) {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={sidebar.bg[colorMode]}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth="1px"
      w={280}
      {...props}
    >
      <Box p={30} mb="60px" width="100%">
        <Logo width={150} logoStyle="dark" />
      </Box>

      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color={sidebar.color[colorMode]}
        aria-label="Main Navigation"
        fontWeight="semibold"
      >
        <Heading px="5" mb="2" fontSize="xs" color={sidebar.label[colorMode]}>
          ALUNO
        </Heading>
        {routes.map((route, key) => (
          <NavItem
            key={key}
            href={route.layout + route.path}
            icon={route.icon}
            title={route.name}
          />
        ))}
        <Heading px="5" my="2" mt="5" fontSize="xs" color={sidebar.label[colorMode]}>
          GERAL
        </Heading>
        <NavItem href="/app/conta" icon={FiSettings} title="Configurações" />
        <NavItem href="/suporte" icon={MdSupport} title="Suporte" />
      </Flex>
    </Box>
  );
}
