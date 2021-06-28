import React from 'react';
import { Box } from '@chakra-ui/react';

import BookCover from '../BookCover';

import { useState } from 'react';
import BookCardMenu from './BookCardMenu';

import { useSelector } from 'react-redux';

function BookCardHeader(props) {
  const [coverScale, setCoverScale] = useState(1);

  function increaseCoverScale() {
    setCoverScale(1.04);
  }

  function decreaseCoverScale() {
    setCoverScale(1);
  }

  const coverImageSrc = useSelector(state => {
    const book = state.books.booksArray.find(book => book.id === props.bookId);
    return book.imageSrc;
  });

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
      <BookCover coverScale={coverScale} imageSrc={coverImageSrc} />
    </Box>
  );
}

export default BookCardHeader;
