import React from 'react';
import { useParams } from 'react-router';
import { Box } from '@chakra-ui/layout';
import { useGetBook } from '../../util/hooks';

function BookPage() {
  const { bookId } = useParams();
  const book = useGetBook(bookId);

  return <Box>ola {book.title}</Box>;
}

export default BookPage;
