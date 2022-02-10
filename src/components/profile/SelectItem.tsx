import { Box, Divider, Flex, Icon, useColorMode } from '@chakra-ui/react';
import { ImPencil } from 'react-icons/im';
import theme from 'theme/styles';

type ItemProps = {
  onClick?: () => void;
  children: JSX.Element | JSX.Element[];
};

export default function ItemList({ children, onClick }: ItemProps) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        mt={4}
        role="group"
        cursor="pointer"
        alignItems="center"
        justifyContent="space-between"
        onClick={onClick}
      >
        <Box
          flexGrow="1"
          _groupHover={{
            textDecoration: 'underline',
            textDecorationColor: theme.text.paragraph[colorMode]
          }}
        >
          {children}
        </Box>
        <Box display="none" _groupHover={{ display: 'block' }}>
          <Icon as={ImPencil} color={theme.text.paragraph[colorMode]} />
        </Box>
      </Flex>
      <Divider my={4} __css={{ _last: { display: 'none' } }} />
    </>
  );
}
