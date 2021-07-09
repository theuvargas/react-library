import React from 'react';

import { FaEllipsisV } from 'react-icons/fa';

import { Icon, Menu, MenuButton, IconButton, MenuList } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import AddPagesItem from './menu/AddPagesItem';
import SetPagesItem from './menu/SetPagesItem';
import RatingItem from './menu/RatingItem';
import DeleteBookItem from './menu/DeleteBookItem';
import MarkAsCompletedItem from './menu/MarkAsCompletedItem';
import { useGetPercentageRead } from '../../util/hooks';

function BookCardMenu(props) {
  const { pages, pagesRead } = useSelector(state => {
    return state.books.booksArray.find(book => book.id === props.bookId);
  });

  const percentageRead = useGetPercentageRead(pages, pagesRead);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="none"
        onFocus={props.setIconVisibilityTrue}
        onBlur={props.setIconVisibilityFalse}
        _focus={{ outlineColor: 'blue.200' }}
        outlineOffset="-4px"
        w="2"
        aria-label="book actions"
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
        {percentageRead === 100 ? true : <AddPagesItem bookId={props.bookId} />}
        <SetPagesItem bookId={props.bookId} />
        {percentageRead === 100 ? (
          true
        ) : (
          <MarkAsCompletedItem bookId={props.bookId} />
        )}
        {percentageRead === 100 ? <RatingItem bookId={props.bookId} /> : true}
        <DeleteBookItem bookId={props.bookId} />
      </MenuList>
    </Menu>
  );
}

export default BookCardMenu;
