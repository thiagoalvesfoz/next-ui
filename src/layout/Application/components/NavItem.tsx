import { Box, Flex, FlexProps, Icon, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemProps extends FlexProps {
  icon?: React.FC;
  href: string;
  title: string;
}

import { sidebar } from 'layout/Application/styles';

export default function NavItem({ icon, href, title, ...rest }: NavItemProps) {
  const { colorMode } = useColorMode();

  const router = useRouter();

  function useRouterActive(active: string, inactive: string): string {
    return router.pathname === href ? active : inactive;
  }

  const styles = {
    colorActive: useRouterActive(sidebar.active[colorMode], 'inherit')
  };

  return (
    <Link passHref href={href}>
      <Flex role="link" alignItems="center">
        <Box w="5px" h="40px" borderRadius="0 10px 10px 0" bg={styles.colorActive} />
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          role="group"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Icon
              as={icon}
              mx="2"
              mr={5}
              color={styles.colorActive}
              boxSize="5"
              _groupHover={{
                opacity: 0.8
              }}
            />
          )}
          <Text
            color={styles.colorActive}
            _groupHover={{
              opacity: 0.8
            }}
          >
            {title}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
