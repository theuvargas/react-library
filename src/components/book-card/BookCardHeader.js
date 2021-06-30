import React from 'react';
import { Box } from '@chakra-ui/react';

import BookCover from '../BookCover';

import { useState } from 'react';
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
      <BookCover bookId={props.bookId} imageSrc={imageSrc} />
    </Box>
  );
}

export default BookCardHeader;
