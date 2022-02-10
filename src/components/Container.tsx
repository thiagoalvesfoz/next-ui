import { Flex, FlexProps, useColorMode } from '@chakra-ui/react';

export default function Container(props: FlexProps) {
  const { colorMode } = useColorMode();

  const color = { light: 'black', dark: 'white' };

  return (
    <Flex
      width="full"
      direction="column"
      px={5}
      py={30}
      color={color[colorMode]}
      {...props}
    />
  );
}
