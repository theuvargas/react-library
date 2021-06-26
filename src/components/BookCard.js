import React from 'react';
import { Flex } from '@chakra-ui/react';
import BookCardHeader from './BookCardHeader';

import BookCardInfo from './BookCardInfo';

import { useState } from 'react';
import BookCardFooter from './BookCardFooter';

function BookCard(props) {
  const [iconVisibility, setIconVisibility] = useState('hidden');

  function setIconVisibilityTrue() {
    setIconVisibility('visible');
  }

  function setIconVisibilityFalse() {
    setIconVisibility('hidden');
  }

  return (
    <Flex
      flexDir="column"
      borderWidth="1px"
      pb="2"
      w="64"
      h="min-content"
      boxShadow="base"
      onMouseOver={setIconVisibilityTrue}
      onMouseLeave={setIconVisibilityFalse}
    >
      <BookCardHeader
        book={props.book}
        completeBook={props.completeBook}
        removeBook={props.removeBook}
        addPagesRead={props.addPagesRead}
        setPagesRead={props.setPagesRead}
        setRating={props.setRating}
        iconVisibility={iconVisibility}
        setIconVisibilityTrue={setIconVisibilityTrue}
        setIconVisibilityFalse={setIconVisibilityFalse}
        color={props.color}
      />
      <BookCardInfo
        color={props.color}
        percentageRead={props.book.percentageRead()}
        genres={props.book.genres}
        title={props.book.title}
        author={props.book.author}
      />
      <BookCardFooter
        color={props.color}
        percentageRead={props.book.percentageRead()}
        pages={props.book.pages}
        pagesRead={props.book.pagesRead}
        rating={props.book.rating}
        type={props.footerType}
      />
    </Flex>
  );
}

export default BookCard;
