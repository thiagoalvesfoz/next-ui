const Button = {
  baseStyle: {
    position: 'initial'
  },
  sizes: {
    xs: {
      px: '2rem'
    },
    sm: {
      px: '3rem'
    },
    md: {
      px: '4em'
    },
    lg: {
      px: '5em'
    }
  },
  variants: {
    primary: {
      bg: 'pink.500',
      color: 'white',
      _hover: {
        opacity: '0.8'
      },
      _focus: {
        boxShadow: 'none'
      }
    },
    gradient: {
      bg: 'linear-gradient(103.63deg, rgba(26, 234, 139, 0.8) 0%, rgba(22, 115, 189, 0.4) 100%)',
      _hover: {
        opacity: '0.8'
      },
      _focus: {
        boxShadow: 'none'
      }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};

export default Button;
