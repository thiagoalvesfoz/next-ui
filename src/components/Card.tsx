import { Box, BoxProps, useColorMode } from '@chakra-ui/react';

import theme from 'theme/styles';

export default function Card({ children, ...rest }: BoxProps) {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={8}
      mb={8}
      width="full"
      bg={theme.card.bg[colorMode]}
      color={theme.card.color[colorMode]}
      boxShadow={theme.card.shadow}
      rounded={theme.card.radius}
      {...rest}
    >
      {children}
    </Box>
  );
}
