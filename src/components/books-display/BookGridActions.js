import React from 'react';
import {
  Flex,
  Button,
  Select,
  Text,
  Menu,
  MenuButton,
  Icon,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from '@chakra-ui/react';
import { useState } from 'react';
import BookModal from '../modals/BookModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilter,
  changeSort,
  changeSortOrder,
} from '../../features/books/booksSlice';
import BookForm from '../forms/BookForm';
import NewBookForm from '../forms/NewBookForm';
import { FaFilter, FaPlus, FaSort } from 'react-icons/fa';

function BookGridActions() {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  const mainColor = useSelector(state => state.color);
  const genreArray = useSelector(state => state.genres.genreArray);

  return (
    <Flex mt="4">
      <Menu closeOnSelect={false}>
        <MenuButton
          as={Button}
          colorScheme={mainColor}
          size="sm"
          rightIcon={<Icon as={FaSort} />}
          variant="outline"
        >
          Sort
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            title="Sort by"
            defaultValue="title"
            type="radio"
            onChange={e => dispatch(changeSort(e))}
          >
            <MenuItemOption value="title">Title</MenuItemOption>
            <MenuItemOption value="rating">Rating</MenuItemOption>
            <MenuItemOption value="progress">Progress</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup
            title="Order"
            defaultValue="ascending"
            type="radio"
            onChange={e => dispatch(changeSortOrder(e))}
          >
            <MenuItemOption value="ascending">Ascending</MenuItemOption>
            <MenuItemOption value="descending">Descending</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Menu closeOnSelect={false}>
        <MenuButton
          ml="2"
          as={Button}
          colorScheme={mainColor}
          size="sm"
          rightIcon={<Icon as={FaFilter} />}
          variant="outline"
        >
          Filter
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            onChange={e => dispatch(changeFilter(e))}
            title="Genre"
            type="checkbox"
          >
            {genreArray.map(genre => {
              return (
                <MenuItemOption key={genre} value={genre}>
                  {genre}
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Button
        onClick={toggleModal}
        placeSelf="flex-end"
        size="sm"
        colorScheme={mainColor}
        ml="auto"
        rightIcon={<Icon as={FaPlus} />}
        variant="outline"
      >
        New
      </Button>
      <BookModal
        header="Add new book"
        toggleIsOpen={toggleModal}
        isOpen={modalIsOpen}
      >
        <NewBookForm toggleIsOpen={toggleModal} />
      </BookModal>
    </Flex>
  );
}

export default BookGridActions;
