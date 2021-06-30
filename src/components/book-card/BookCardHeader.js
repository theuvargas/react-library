import React from 'react';
import { Box } from '@chakra-ui/react';

import BookCover from '../BookCover';

import { useState } from 'react';
import BookCardMenu from './BookCardMenu';

import { useSelector } from 'react-redux';
import { useGetBook } from '../../util/hooks';

function BookCardHeader(props) {
  const [coverScale, setCoverScale] = useState(1);

  function increaseCoverScale() {
    setCoverScale(1.04);
  }

  function decreaseCoverScale() {
    setCoverScale(1);
  }

  const { imageSrc } = useGetBook(props.bookId);

  const mainColor = useSelector(state => state.color);

  return (
    <Box
      borderBottomWidth="1px"
      py="1"
      bg={mainColor + '.50'}
      onMouseEnter={increaseCoverScale}
      onMouseLeave={decreaseCoverScale}
    >
      <Box textAlign="right">
        <BookCardMenu
          setIconVisibilityTrue={props.setIconVisibilityTrue}
          setIconVisibilityFalse={props.setIconVisibilityFalse}
          iconVisibility={props.iconVisibility}
          bookId={props.bookId}
        />
      </Box>
      <BookCover
        coverScale={coverScale}
        bookId={props.bookId}
        imageSrc={imageSrc}
      />
    </Box>
  );
}

export default BookCardHeader;
