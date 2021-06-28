import React from 'react';
import PagesModal from '../forms/PagesForm';
import { useDispatch } from 'react-redux';
import { addPagesRead } from '../../features/books/booksSlice';

function AddPagesModal(props) {
  const dispatch = useDispatch();

  function addPages(e) {
    e.preventDefault();

    dispatch(
      addPagesRead({
        id: props.bookId,
        pagesToAdd: e.target.children[0].children[1].children[0].value,
      })
    );

    props.toggleIsOpen();
  }

  return (
    <PagesModal
      header="Add pages read"
      label="Number of pages to add"
      submitButton="Add pages"
      onSubmit={addPages}
      bookId={props.bookId}
      isOpen={props.isOpen}
      toggleIsOpen={props.toggleIsOpen}
    />
  );
}
/**<Modal isOpen={props.isOpen} onClose={props.toggleIsOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add pages read</ModalHeader>
        <ModalBody>
          <form onSubmit={addPages}>
            <FormControl min="0" max={props.book.pages - props.book.pagesRead}>
              <FormLabel>Number of pages to add</FormLabel>
              <NumberInput>
                <NumberInputField />
                <FormHelperText>
                  Currently, you have read {props.book.pagesRead} out of{' '}
                  {props.book.pages} pages.
                </FormHelperText>
              </NumberInput>
              <Box textAlign="right">
                <Button mt="2" ml="auto" colorScheme="green">
                  Add pages
                </Button>
              </Box>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal> */
export default AddPagesModal;
