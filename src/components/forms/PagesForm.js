import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  FormHelperText,
  NumberInput,
  NumberInputField,
  Box,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useGetBook } from '../../util/hooks';

function PagesModal(props) {
  const { pages, pagesRead } = useGetBook(props.bookId);

  return (
    <Modal isOpen={props.isOpen} onClose={props.toggleIsOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.header}</ModalHeader>
        <ModalBody>
          <form onSubmit={props.onSubmit}>
            <FormControl min="0" max={pages - pagesRead}>
              <FormLabel>{props.label}</FormLabel>
              <NumberInput>
                <NumberInputField />
                <FormHelperText>
                  Currently, you have read {pagesRead} out of {pages} pages.
                </FormHelperText>
              </NumberInput>
              <Box textAlign="right">
                <Button mt="2" ml="auto" colorScheme="green">
                  {props.submitButton}
                </Button>
              </Box>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PagesModal;
