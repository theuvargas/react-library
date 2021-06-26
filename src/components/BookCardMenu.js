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
import DeleteBookDialog from './DeleteBookDialog';
import AddPagesModal from './AddPagesModal';
import SetPagesModal from './setPagesModal';
import RateModal from './RateModal';

function BookCardMenu(props) {
  function completeBook() {
    props.completeBook(props.book.id);
  }

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
        {props.book.percentageRead() === 100 ? (
          true
        ) : (
          <Box>
            <MenuItem onClick={toggleAddModal} icon={<Icon as={FaPlus} />}>
              Add pages read
            </MenuItem>
            <AddPagesModal
              toggleIsOpen={toggleAddModal}
              isOpen={addModalIsOpen}
              book={props.book}
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
          book={props.book}
          setPagesRead={props.setPagesRead}
        />
        {props.book.percentageRead() === 100 ? (
          true
        ) : (
          <MenuItem onClick={completeBook} icon={<Icon as={FaCheck} />}>
            Mark as completed
          </MenuItem>
        )}
        {props.book.percentageRead() === 100 ? (
          <MenuItem onClick={toggleRateModal} icon={<Icon as={FaStar} />}>
            Rate
          </MenuItem>
        ) : (
          true
        )}
        <RateModal
          setRating={props.setRating}
          book={props.book}
          isOpen={rateModalIsOpen}
          toggleIsOpen={toggleRateModal}
        />
        <MenuItem onClick={toggleDialog} icon={<Icon as={FaTrash} />}>
          Delete book
          <DeleteBookDialog
            toggleDialog={toggleDialog}
            dialogIsOpen={dialogIsOpen}
            book={props.book}
            removeBook={props.removeBook}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default BookCardMenu;
