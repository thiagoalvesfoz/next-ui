import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Progress,
  Text,
  Link,
  useColorMode
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ImLinkedin, ImLocation, ImPencil } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import Card from 'components/Card';
import theme from 'theme/styles';
import * as api from 'mocks/user';

export default function CardProfile() {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const handleEdit = () => router.push('/app/conta');

  return (
    <Card>
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          bg="none"
          aria-label="profile"
          fontSize={20}
          onClick={handleEdit}
          icon={<ImPencil />}
          size="sm"
        />
      </Box>

      <Flex direction="column" alignItems="center" justifyContent="center">
        <Avatar
          mb={5}
          width={32}
          height={32}
          name={api.user.name}
          src={api.user.avatar}
          cursor="pointer"
        />

        <Heading fontSize="xl" fontWeight="bold">
          {api.user.name}
        </Heading>
      </Flex>
      <Divider my={8} />
      <Box my={8}>
        <Heading as="h5" size="sm" mb="4" fontWeight="bold">
          Força do Perfil
        </Heading>
        <Progress my="3" value={80} size="xs" colorScheme="pink" />
        <Text fontSize="sm">
          Seu perfil está <b>80%</b> completo
        </Text>
      </Box>

      <Box my={8}>
        <Heading as="h5" size="sm" mb="3" fontWeight="bold">
          Sobre
        </Heading>
        <Text fontSize="sm">{api.user.about}</Text>
      </Box>
      <Box mt="8">
        <Flex my="4" alignItems="center">
          <Icon as={ImLocation} size={20} />
          <Text ml="3" fontSize="sm" fontWeight="semibold">
            {api.addressUser.city} - {api.addressUser.state}
          </Text>
        </Flex>
        <Flex my="4" alignItems="center">
          <Icon as={MdEmail} size={20} />
          <Text ml="3" fontSize="sm" fontWeight="semibold">
            {api.user.email}
          </Text>
        </Flex>
        <Flex mt="4" alignItems="center">
          <Icon as={ImLinkedin} size={20} />

          <Link
            isExternal
            href={api.user.link_social}
            ml="3"
            fontSize="sm"
            fontWeight="semibold"
            color={theme.text.paragraph[colorMode]}
          >
            thiagoalvesfoz
          </Link>
        </Flex>
      </Box>
    </Card>
  );
}
