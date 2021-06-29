import React from 'react';
import { useDisclosure, MenuItem, Box, Icon } from '@chakra-ui/react';
import SetPagesModal from '../../modals/SetPagesModal';
import { FaBookReader } from 'react-icons/fa';

function SetPagesItem(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <MenuItem onClick={onToggle} icon={<Icon as={FaBookReader} />}>
        Set pages read
      </MenuItem>
      <SetPagesModal
        toggleIsOpen={onToggle}
        isOpen={isOpen}
        bookId={props.bookId}
      />
    </Box>
  );
}

export default SetPagesItem;
