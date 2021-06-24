import { Flex, Button, Box, Icon, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import NewBookModal from './NewBookModal';

function BookGridActions(props) {
  function changeSort(e) {
    props.changeSort(e.target.value);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

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
            borderColor={props.color + '.600'}
            onChange={changeSort}
          >
            <option value="title">Title</option>
            <option value="rating">Rating</option>
            <option value="least progress">Least progress</option>
            <option value="most progress">Most progress</option>
          </Select>
        </Flex>
        <Button
          onClick={toggleModal}
          ml="2"
          size="sm"
          colorScheme={props.color}
        >
          New book
        </Button>
        <NewBookModal
          addBook={props.addBook}
          toggleIsOpen={toggleModal}
          isOpen={modalIsOpen}
        />
      </Flex>
    </Flex>
  );
}

export default BookGridActions;
