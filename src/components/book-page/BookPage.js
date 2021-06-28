import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/layout';

function BookPage() {
  const { bookId } = useParams();
  const book = useSelector(state =>
    state.books.booksArray.find(book => book.id === bookId)
  );

  return <Box>ola {book.title}</Box>;
}

export default BookPage;
