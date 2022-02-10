import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import '@fontsource/inter';

import theme from 'theme/styles';

import Input from 'theme/components/Input';
import Select from 'theme/components/Select';
import Button from 'theme/components/Button';

type ThemeProps = {
  colorMode: 'light' | 'dark';
};

const Theme: ThemeConfig = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  styles: {
    global: ({ colorMode }: ThemeProps) => ({
      'html, body': {
        fontSize: 'md',
        background: theme.body.bg[colorMode],
        lineHeight: 'tall'
      },
      'h1,h2,h3,h4,h5,h6': {
        color: theme.text.heading[colorMode]
      },
      'p,span,label': {
        color: theme.text.paragraph[colorMode]
      },
      a: {
        color: theme.text.links[colorMode]
      },
      svg: {
        color: colorMode === 'dark' ? 'green.500' : 'gray.600'
      },
      'span svg': {
        color: colorMode === 'dark' ? 'gray.900' : 'gray.50'
      }
    })
  },
  colors: {
    white: {
      50: '#f3f2ef'
    },
    green: {
      500: '#1AEA8B',
      600: '#32b06a'
    },
    blue: {
      50: '#1673BD',
      300: '#131D3F',
      500: '#051035',
      700: '#000721',
      900: '#04091C'
    },
    pink: {
      500: '#E24681'
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  components: {
    Input,
    Select,
    Button
  }
});

export default Theme;
