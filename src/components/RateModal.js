import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import RateBookForm from './RateBookForm';

function RateModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.toggleIsOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Rate this book</ModalHeader>
        <ModalBody>
          <RateBookForm
            setRating={props.setRating}
            book={props.book}
            toggleIsOpen={props.toggleIsOpen}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default RateModal;
