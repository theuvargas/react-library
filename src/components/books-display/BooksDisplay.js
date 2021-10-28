import React from 'react';
import { Box } from '@chakra-ui/react';
import BookGridActions from './BookGridActions';
import GridTabs from './GridTabs';
import { useSelector } from 'react-redux';

function BooksDisplay() {
  const mainColor = useSelector(state => state.color);

  return (
    <Box w="xl" mx="auto" bg="white">
      <BookGridActions color={mainColor} />
      <GridTabs />
    </Box>
  );
}

export default BooksDisplay;
