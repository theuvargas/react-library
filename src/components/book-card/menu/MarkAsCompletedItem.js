import React from 'react';
import { MenuItem, Icon } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { completeBook } from '../../../features/books/booksSlice';

function MarkAsCompletedItem(props) {
  const dispatch = useDispatch();

  return (
    <MenuItem
      onClick={() => {
        dispatch(completeBook(props.bookId));
      }}
      icon={<Icon as={FaCheck} />}
    >
      Mark as completed
    </MenuItem>
  );
}

export default MarkAsCompletedItem;
