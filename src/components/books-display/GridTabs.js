import React, { useEffect } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Text,
} from '@chakra-ui/react';
import BookGrid from '../../components/books-display/BookGrid';
import { useSelector, useDispatch } from 'react-redux';
import { sortBooks } from '../../features/books/booksSlice';

function selectCompletedBooks(state) {
  return selectBooks(state).filter(book => book.pagesRead === book.pages);
}

function selectCurrentlyReadingBooks(state) {
  return selectBooks(state).filter(book => book.pagesRead !== book.pages);
}

function selectBooks(state) {
  return state.books.filter.length === 0
    ? state.books.booksArray
    : state.books.booksArray.filter(book =>
        book.genres.some(genre =>
          state.books.filter.includes(state.genres.genreArray[genre])
        )
      );
}

function GridTabs() {
  const allBooks = useSelector(selectBooks);

  const completedBooks = useSelector(selectCompletedBooks);
  const currentlyReadingBooks = useSelector(selectCurrentlyReadingBooks);

  const dispatch = useDispatch();

  const sortBy = useSelector(state => state.books.sortBy);
  const sortByOrder = useSelector(state => state.books.sortByOrder);

  useEffect(() => {
    dispatch(sortBooks(sortBy));
  }, [sortBy, sortByOrder, dispatch]);

  const mainColor = useSelector(state => state.color);

  return (
    <Tabs isLazy colorScheme={mainColor} mt="2">
      <TabList mb="2">
        <Tab outlineOffset="-3" _focus={{ outlineColor: 'blue.200' }}>
          Currently reading
        </Tab>
        <Tab outlineOffset="-3" _focus={{ outlineColor: 'blue.200' }}>
          Finished
        </Tab>
        <Tab outlineOffset="-3" _focus={{ outlineColor: 'blue.200' }}>
          All
        </Tab>
      </TabList>
      <TabPanels h="80vh" overflowY="scroll">
        <TabPanel>
          <BookGrid books={currentlyReadingBooks} footerType="progress" />
          {currentlyReadingBooks.length === 0 ? (
            <Text textAlign="center">
              You aren't reading any book right now. Add a new one by clicking
              "New book" above.
            </Text>
          ) : (
            true
          )}
        </TabPanel>
        <TabPanel>
          <BookGrid books={completedBooks} footerType="rating" />
          {completedBooks.length === 0 ? (
            <Text textAlign="center">No finished books yet.</Text>
          ) : (
            true
          )}
        </TabPanel>
        <TabPanel>
          <BookGrid books={allBooks} footerType="progress" />
          {allBooks.length === 0 ? (
            <Text textAlign="center">
              You have no books added! Start adding them by clicking "New book"
              above.
            </Text>
          ) : (
            true
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default GridTabs;
