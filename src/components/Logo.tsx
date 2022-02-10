import { Flex, FlexProps, Heading, ThemingProps, useColorMode } from '@chakra-ui/react';

interface Props extends FlexProps {
  logoStyle?: 'light' | 'dark' | 'system';
  size?: ThemingProps<'Heading'>['size'];
}

export default function Logo({ logoStyle = 'system', size, ...props }: Props) {
  const { colorMode } = useColorMode();

  const color = {
    light: 'pink.500',
    dark: '#ececec'
  };

  const schemaColor = {
    ...color,
    system: color[colorMode]
  };

  return (
    <Flex {...props} justifyContent="center">
      <Heading size={size} color={schemaColor[logoStyle]}>
        NEXT UI
      </Heading>
    </Flex>
  );
}
