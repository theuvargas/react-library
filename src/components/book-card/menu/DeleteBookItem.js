import React from 'react';
import { useDisclosure, MenuItem, Box, Icon } from '@chakra-ui/react';
import DeleteBookDialog from '../../modals/DeleteBookDialog';
import { FaTrash } from 'react-icons/fa';

function DeleteBookItem(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <MenuItem onClick={onToggle} icon={<Icon as={FaTrash} />}>
        Delete book
      </MenuItem>
      <DeleteBookDialog
        toggleDialog={onToggle}
        dialogIsOpen={isOpen}
        bookId={props.bookId}
      />
    </Box>
  );
}

export default DeleteBookItem;
