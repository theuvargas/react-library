import React from 'react';
import { Flex, Button, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';
import BookModal from '../modals/BookModal';
import { useDispatch, useSelector } from 'react-redux';
import { changeSort } from '../../features/books/booksSlice';
import BookForm from '../forms/BookForm';
import NewBookForm from '../forms/NewBookForm';

function BookGridActions() {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  const mainColor = useSelector(state => state.color);

  return (
    <Flex mt="4">
      <Flex ml="auto" mr="4">
        <Flex alignItems="center">
          <Text whiteSpace="nowrap" fontSize="13">
            Sort by:
          </Text>
          <Select
            variant="flushed"
            ml="2"
            size="sm"
            _focus={{ outlineColor: 'blue.200' }}
            borderColor={mainColor + '.600'}
            onChange={e => dispatch(changeSort(e.target.value))}
          >
            <option value="title">Title</option>
            <option value="rating">Rating</option>
            <option value="least progress">Least progress</option>
            <option value="most progress">Most progress</option>
          </Select>
        </Flex>
        <Button onClick={toggleModal} ml="2" size="sm" colorScheme={mainColor}>
          New book
        </Button>
        <BookModal
          header="Add new book"
          toggleIsOpen={toggleModal}
          isOpen={modalIsOpen}
        >
          <NewBookForm toggleIsOpen={toggleModal} />
        </BookModal>
      </Flex>
    </Flex>
  );
}

export default BookGridActions;
