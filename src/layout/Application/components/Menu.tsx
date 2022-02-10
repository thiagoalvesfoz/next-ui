import {
  Avatar,
  Flex,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Button,
  useColorMode,
  Heading
} from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/router';

const routes = [
  {
    path: '/perfil',
    name: 'Meu Perfil',
    icon: FiUser,
    layout: '/app'
  },
  {
    path: '/conta',
    name: 'Configurações',
    icon: FiSettings,
    layout: '/app'
  }
];

type Props = {
  user: {
    name: string;
    avatar: string;
    email: string;
  };
};

import { header, text } from 'layout/Application/styles';

export default function HeaderMenu({ user }: Props) {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const handleLogout = () => {
    router.push('/auth/login');
  };

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            _focus={{}}
            leftIcon={
              <Avatar
                width={10}
                height={10}
                name={user.name}
                src={user.avatar}
                cursor="pointer"
              />
            }
            rightIcon={<Icon as={isOpen ? FiChevronUp : FiChevronDown} fontSize={20} />}
            variant="outline"
            rounded="100px"
            boxSizing="unset"
            p={1}
            pr={4}
          >
            {user.name}
          </MenuButton>

          <MenuList bg={header.menu[colorMode]}>
            <Flex p={4} direction="column" alignItems="center">
              <Avatar
                mb={3}
                width={20}
                height={20}
                name={user.name}
                src={user.avatar}
                cursor="pointer"
              />
              <Flex direction="column" textAlign="center" mx={4}>
                <Heading fontSize="xl" my={2}>
                  {user.name}
                </Heading>
                <Text fontSize="sm">{user.email}</Text>
              </Flex>
            </Flex>
            <MenuDivider />

            {routes.map((route, key) => (
              <MenuItem
                key={key}
                color={text.paragraph[colorMode]}
                onClick={() => router.push(route.layout + route.path)}
              >
                <Icon as={route.icon} mr={3} />
                {route.name}
              </MenuItem>
            ))}

            <MenuDivider />
            <MenuItem color={text.paragraph[colorMode]} onClick={handleLogout}>
              <Icon as={FiLogOut} mr={3} />
              Sair
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
