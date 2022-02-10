type Props = {
  colorMode: string;
};

const Select = {
  variants: {
    outline: (props: Props) => ({
      field: {
        background: props.colorMode === 'dark' ? 'inherit' : 'gray.50',
        _focus: {
          borderColor: 'gray'
        }
      }
    })
  },
  defaultProps: {
    variant: 'outline'
  }
};

export default Select;
