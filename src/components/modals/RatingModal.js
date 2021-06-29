import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';
import RateBookForm from '../forms/RateBookForm';

function RateModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.toggleIsOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Rate this book</ModalHeader>
        <ModalBody>
          <RateBookForm
            setRating={props.setRating}
            bookId={props.bookId}
            toggleIsOpen={props.toggleIsOpen}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default RateModal;
