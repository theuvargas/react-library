import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';

function NewBookModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.toggleIsOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.header}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default NewBookModal;
