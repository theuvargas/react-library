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
import { useGetPercentageRead } from '../../util/hooks';

function GridTabs() {
  const books = useSelector(state => state.books.booksArray);

  const dispatch = useDispatch();

  const completedBooks = books.filter(book => {
    return useGetPercentageRead(book.pages, book.pagesRead) === 100;
  });

  const currentlyReadingBooks = books.filter(book => {
    return useGetPercentageRead(book.pages, book.pagesRead) !== 100;
  });

  const sortBy = useSelector(state => state.books.sortBy);
  useEffect(() => {
    dispatch(sortBooks(sortBy));
  }, [books, sortBy]);

  const mainColor = useSelector(state => state.color);

  return (
    <Tabs isLazy colorScheme={mainColor}>
      <TabList mb="2">
        <Tab _focus={{}}>All books</Tab>
        <Tab _focus={{}}>Currently reading</Tab>
        <Tab _focus={{}}>Finished</Tab>
      </TabList>
      <TabPanels h="80vh" overflowY="scroll">
        <TabPanel>
          <BookGrid books={books} footerType="progress" />
          {books.length === 0 ? (
            <Text textAlign="center">
              You have no books added! Start adding them by clicking "New book"
              above.
            </Text>
          ) : (
            true
          )}
        </TabPanel>
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
      </TabPanels>
    </Tabs>
  );
}

export default GridTabs;
