import React from 'react';
import { Flex, Button, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';
import NewBookModal from '../modals/NewBookModal';
import { useDispatch, useSelector } from 'react-redux';
import { changeSort } from '../../features/books/booksSlice';

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
            _focus={{}}
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
        <NewBookModal toggleIsOpen={toggleModal} isOpen={modalIsOpen} />
      </Flex>
    </Flex>
  );
}

export default BookGridActions;
