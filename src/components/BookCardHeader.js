import React from 'react';
import { Box } from '@chakra-ui/react';

import BookCover from './BookCover';

import { useState } from 'react';
import BookCardMenu from './BookCardMenu';

function BookCardHeader(props) {
  const [coverScale, setCoverScale] = useState(1);

  function increaseCoverScale() {
    setCoverScale(1.04);
  }

  function decreaseCoverScale() {
    setCoverScale(1);
  }

  return (
    <Box
      borderBottomWidth="1px"
      py="1"
      bg={props.color + '.50'}
      onMouseEnter={increaseCoverScale}
      onMouseLeave={decreaseCoverScale}
    >
      <Box textAlign="right">
        <BookCardMenu
          setIconVisibilityTrue={props.setIconVisibilityTrue}
          setIconVisibilityFalse={props.setIconVisibilityFalse}
          iconVisibility={props.iconVisibility}
          removeBook={props.removeBook}
          completeBook={props.completeBook}
          addPagesRead={props.addPagesRead}
          setPagesRead={props.setPagesRead}
          setRating={props.setRating}
          book={props.book}
        />
      </Box>
      <BookCover coverScale={coverScale} imageSrc={props.book.imageSrc} />
    </Box>
  );
}

export default BookCardHeader;
