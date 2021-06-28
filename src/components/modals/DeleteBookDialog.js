import React from 'react';
import { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { removeBook } from '../../features/books/booksSlice';

function DeleteBookDialog(props) {
  const dispatch = useDispatch();
  const cancelRef = useRef();

  function callRemoveBook() {
    dispatch(removeBook(props.bookId));
    props.toggleDialog();
  }

  return (
    <AlertDialog
      isOpen={props.dialogIsOpen}
      leastDestructiveRef={cancelRef}
      onClose={props.toggleDialog}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Delete book</AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? This action cannot be undone.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={props.toggleDialog}>
              Cancel
            </Button>
            <Button colorScheme="red" ml="3" onClick={callRemoveBook}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default DeleteBookDialog;
