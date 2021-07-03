import React from 'react';
import { Box } from '@chakra-ui/react';

import BookCardCover from './BookCardCover';

import BookCardMenu from './BookCardMenu';

import { useSelector } from 'react-redux';
import { useGetBook } from '../../util/hooks';

function BookCardHeader(props) {
  const { imageSrc } = useGetBook(props.bookId);

  const mainColor = useSelector(state => state.color);

  return (
    <Box borderBottomWidth="1px" py="1" bg={mainColor + '.50'}>
      <Box textAlign="right">
        <BookCardMenu
          setIconVisibilityTrue={props.setIconVisibilityTrue}
          setIconVisibilityFalse={props.setIconVisibilityFalse}
          iconVisibility={props.iconVisibility}
          bookId={props.bookId}
        />
      </Box>
      <Box textAlign="center">
        <BookCardCover bookId={props.bookId} imageSrc={imageSrc} />
      </Box>
    </Box>
  );
}

export default BookCardHeader;
