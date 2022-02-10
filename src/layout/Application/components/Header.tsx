import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Icon,
  Box
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';
import HeaderMenu from './Menu';
import { header } from 'layout/Application/styles';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { user } from 'mocks/user';

type Props = {
  sidebar: {
    onOpen: () => void;
  };
};

export default function Header({ sidebar }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        top="0"
        right="0"
        px={{ base: '5', md: '10' }}
        height="80px"
        align="center"
        width="full"
        zIndex={4}
        backdropFilter="blur(6px)"
        ml={{ base: 0, md: 280 }}
        justify={{ base: 'space-between', md: 'flex-end' }}
      >
        <IconButton
          aria-label="Menu"
          bg="none"
          fontSize={20}
          display={{ base: 'inline-flex', md: 'none' }}
          onClick={sidebar.onOpen}
          icon={<CgMenuLeft />}
          size="sm"
        />

        <Flex align="center">
          <IconButton
            bg="none"
            onClick={toggleColorMode}
            aria-label="dark mode"
            fontSize={20}
            icon={
              <Icon
                color={useColorModeValue('gray.700', 'gray.100')}
                as={useColorModeValue(FaMoon, FaSun)}
              />
            }
            mr={5}
          />

          <HeaderMenu user={user} />
        </Flex>
      </Flex>
      <motion.div
        style={{
          width: '100%',
          top: 0,
          right: 0,
          position: 'fixed',
          height: '80px',
          zIndex: 3,
          opacity
        }}
      >
        <Box
          ml={{ base: 0, md: 280 }}
          shadow={'md'}
          h="full"
          w="full"
          bg={header.bg[colorMode]}
        />
      </motion.div>
    </>
  );
}
