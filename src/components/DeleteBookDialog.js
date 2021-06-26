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

function DeleteBookDialog(props) {
  const cancelRef = useRef();

  function removeBook() {
    props.toggleDialog();
    props.removeBook(props.book.id);
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
            <Button colorScheme="red" ml="3" onClick={removeBook}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default DeleteBookDialog;
