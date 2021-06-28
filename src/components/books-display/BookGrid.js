import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import BookCard from '../book-card/BookCard';
import { useSelector } from 'react-redux';

function BookGrid(props) {
  // const books = useSelector(state => state.books.booksArray);

  return (
    <Grid autoFlow="row" templateColumns="repeat(2, 1fr)" gap="3">
      {props.books.map(book => {
        return (
          <GridItem key={book.id}>
            <BookCard bookId={book.id} footerType={props.footerType} />
          </GridItem>
        );
      })}
    </Grid>
  );
}

export default BookGrid;
