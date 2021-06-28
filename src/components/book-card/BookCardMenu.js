import React, { useState } from 'react';

import {
  FaEllipsisV,
  FaPlus,
  FaTrash,
  FaCheck,
  FaBookReader,
  FaStar,
} from 'react-icons/fa';

import {
  Icon,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Box,
} from '@chakra-ui/react';
import DeleteBookDialog from '../modals/DeleteBookDialog';
import AddPagesModal from '../modals/AddPagesModal';
import SetPagesModal from '../modals/setPagesModal';
import RateModal from '../modals/RateModal';

import { useDispatch, useSelector } from 'react-redux';
import { completeBook } from '../../features/books/booksSlice';

function BookCardMenu(props) {
  const dispatch = useDispatch();

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  function toggleDialog() {
    setDialogIsOpen(!dialogIsOpen);
  }

  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  function toggleAddModal() {
    setAddModalIsOpen(!addModalIsOpen);
  }

  const [defineModalIsOpen, setDefineModalIsOpen] = useState(false);

  function toggleSetModal() {
    setDefineModalIsOpen(!defineModalIsOpen);
  }

  const [rateModalIsOpen, setRateModalIsOpen] = useState(false);

  function toggleRateModal() {
    setRateModalIsOpen(!rateModalIsOpen);
  }

  const percentageRead = useSelector(state => {
    const book = state.books.booksArray.find(book => book.id === props.bookId);
    return book.percentageRead();
  });

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="none"
        onFocus={props.setIconVisibilityTrue}
        onBlur={props.setIconVisibilityFalse}
        icon={
          <Icon
            _hover={{ cursor: 'pointer' }}
            as={FaEllipsisV}
            visibility={props.iconVisibility}
            color={props.color + '.700'}
          />
        }
      />
      <MenuList>
        {percentageRead === 100 ? (
          true
        ) : (
          <Box>
            <MenuItem onClick={toggleAddModal} icon={<Icon as={FaPlus} />}>
              Add pages read
            </MenuItem>
            <AddPagesModal
              toggleIsOpen={toggleAddModal}
              isOpen={addModalIsOpen}
              bookId={props.bookId}
              addPagesRead={props.addPagesRead}
            />
          </Box>
        )}
        <MenuItem onClick={toggleSetModal} icon={<Icon as={FaBookReader} />}>
          Set pages read
        </MenuItem>
        <SetPagesModal
          toggleIsOpen={toggleSetModal}
          isOpen={defineModalIsOpen}
          bookId={props.bookId}
          setPagesRead={props.setPagesRead}
        />
        {percentageRead === 100 ? (
          true
        ) : (
          <MenuItem
            onClick={() => {
              dispatch(completeBook(props.bookId));
            }}
            icon={<Icon as={FaCheck} />}
          >
            Mark as completed
          </MenuItem>
        )}
        {percentageRead === 100 ? (
          <MenuItem onClick={toggleRateModal} icon={<Icon as={FaStar} />}>
            Rate
          </MenuItem>
        ) : (
          true
        )}
        <RateModal
          setRating={props.setRating}
          bookId={props.bookId}
          isOpen={rateModalIsOpen}
          toggleIsOpen={toggleRateModal}
        />
        <MenuItem onClick={toggleDialog} icon={<Icon as={FaTrash} />}>
          Delete book
          <DeleteBookDialog
            toggleDialog={toggleDialog}
            dialogIsOpen={dialogIsOpen}
            bookId={props.bookId}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default BookCardMenu;
