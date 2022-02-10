import { Box } from '@chakra-ui/react';

import Logo from 'components/Logo';
import Container from 'components/Container';

export default function Home({ children }: Element) {
  return (
    <Container minHeight="100vh" alignItems="center" justifyContent="center">
      <Box mb="16" width={250}>
        <Logo size="3xl" />
      </Box>

      {children}
    </Container>
  );
}
