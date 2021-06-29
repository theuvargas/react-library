import React from 'react';
import { useDisclosure, MenuItem, Box, Icon } from '@chakra-ui/react';
import AddPagesModal from '../../modals/AddPagesModal';
import { FaPlus } from 'react-icons/fa';

function AddPagesItem(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <MenuItem onClick={onToggle} icon={<Icon as={FaPlus} />}>
        Add pages read
      </MenuItem>
      <AddPagesModal
        toggleIsOpen={onToggle}
        isOpen={isOpen}
        bookId={props.bookId}
      />
    </Box>
  );
}

export default AddPagesItem;
