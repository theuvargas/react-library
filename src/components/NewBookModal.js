import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import NewBookForm from './NewBookForm';

function NewBookModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.toggleIsOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new book</ModalHeader>
        <ModalBody>
          <NewBookForm
            addBook={props.addBook}
            toggleIsOpen={props.toggleIsOpen}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default NewBookModal;
