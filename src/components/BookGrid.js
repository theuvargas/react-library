import { Grid, GridItem } from '@chakra-ui/react';
import BookCard from './BookCard';

function BookGrid(props) {
  function completeBook(id) {
    props.books.forEach(book => {
      if (book.id === id) {
        book.pagesRead = book.pages;
      }
    });
    props.setBooks(props.allBooks.concat([]));
  }

  function addPagesRead(id, pagesToAdd) {
    pagesToAdd = parseInt(pagesToAdd);
    if (pagesToAdd < 0) return;
    props.books.forEach(book => {
      if (book.id === id) {
        if (pagesToAdd + book.pagesRead > book.pages)
          book.pagesRead = book.pages;
        else book.pagesRead += pagesToAdd;
      }
    });
    props.setBooks(props.allBooks.concat([]));
  }

  function setPagesRead(id, pagesRead) {
    pagesRead = parseInt(pagesRead);
    if (pagesRead < 0) return;
    props.books.forEach(book => {
      if (book.id === id) {
        if (pagesRead > book.pages) book.pagesRead = book.pages;
        else book.pagesRead = pagesRead;
      }
    });
    props.setBooks(props.allBooks.concat([]));
  }

  function setRating(id, rating) {
    props.books.forEach(book => {
      if (book.id === id) {
        book.rating = rating;
      }
    });
    props.setBooks(props.allBooks.concat([]));
  }

  function removeBook(id) {
    props.setBooks(
      props.allBooks.filter(book => {
        return book.id !== id;
      })
    );
  }

  return (
    <Grid autoFlow="row" templateColumns="repeat(2, 1fr)" gap="3">
      {props.books.map(book => {
        return (
          <GridItem key={book.id}>
            <BookCard
              book={book}
              color={props.mainColor}
              completeBook={completeBook}
              removeBook={removeBook}
              addPagesRead={addPagesRead}
              setPagesRead={setPagesRead}
              setRating={setRating}
              footerType={props.footerType}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}

export default BookGrid;
