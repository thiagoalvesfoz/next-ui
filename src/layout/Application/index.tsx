import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react';
import Header from 'layout/Application/components/Header';
import Sidebar from 'layout/Application/components/Sidebar';

import Container from 'components/Container';
import { body, gradient } from 'layout/Application/styles';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

interface MainProps {
  children: JSX.Element;
}

export default function Dashboard({ children }: MainProps) {
  const { colorMode } = useColorMode();
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 2.5], [1, 0]);

  const sidebar = useDisclosure();

  return (
    <>
      <Sidebar display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={sidebar.isOpen} onClose={sidebar.onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        bg={body.bg[colorMode]}
        minHeight="100vh"
        pt="80px"
        ml={{ base: 0, md: 280 }}
        transition=".2s ease"
      >
        <Header sidebar={sidebar} />

        <Container padding={{ base: 5, md: 10 }}>
          <motion.div
            style={{
              width: '100%',
              position: 'absolute',
              top: 0,
              right: 0,
              height: '200px',
              zIndex: 1,
              opacity
            }}
          >
            <Box h="full" w="full" bgGradient={gradient[colorMode]} />
          </motion.div>

          <Box zIndex={2}>{children}</Box>
        </Container>
      </Box>
    </>
  );
}
