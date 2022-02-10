import theme from 'theme/styles';

export const sidebar = theme.sidebar;
export const header = theme.header;
export const body = theme.body;
export const text = theme.text;

export const gradient = {
  light: 'none',
  dark: `linear(to-b, ${theme.header.bg.dark}, transparent)`
};
