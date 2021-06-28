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
        bookId={props.bookId}
        iconVisibility={iconVisibility}
        setIconVisibilityTrue={setIconVisibilityTrue}
        setIconVisibilityFalse={setIconVisibilityFalse}
      />
      <BookCardInfo bookId={props.bookId} />
      <BookCardFooter bookId={props.bookId} type={props.footerType} />
    </Flex>
  );
}

export default BookCard;
