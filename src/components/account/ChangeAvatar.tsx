import { Flex, Text, Avatar } from '@chakra-ui/react';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import FileUpload from 'components/FieldUpload';

type Props = {
  fieldName: string;
  avatar: string | undefined;
  size?: number | string;
  onChange: (file: File | undefined) => void;
};

export default function ChangeAvatar({ fieldName, avatar, onChange, size }: Props) {
  return (
    <FileUpload name={fieldName} accept={'image/png, image/jpeg'} onChangeFile={onChange}>
      <Flex alignItems="center" justifyContent="center">
        <Flex
          position="absolute"
          zIndex={1}
          alignItems="center"
          justifyContent="center"
          w={size}
          h={size}
          borderRadius={100}
          bg="blackAlpha.800"
          direction="column"
          opacity={0}
          cursor="pointer"
          transition="all 0.2s"
          _hover={{ opacity: 1 }}
        >
          <MdOutlineAddAPhoto size={22} />
          <Text fontSize="xs" mt={1} color="whiteAlpha.700">
            Trocar foto
          </Text>
        </Flex>
        <Avatar src={avatar} w={size} h={size} />
      </Flex>
    </FileUpload>
  );
}

ChangeAvatar.defaultProps = {
  size: 32,
  fieldName: 'avatar'
};
