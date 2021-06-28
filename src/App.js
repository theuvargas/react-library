import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Box,
  Text,
} from '@chakra-ui/react';
import theme from './theme';
import BookGrid from './components/BookGrid';
import BookGridActions from './components/BookGridActions';
import { useSelector, useDispatch } from 'react-redux';
import { changeSort } from './features/books/booksSlice';

// const mainColor = 'pink';

function App() {
  const books = useSelector(state => state.books.booksArray);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSort('title'));
  }, []);

  const completedBooks = books.filter(book => {
    return book.percentageRead() === 100;
  });

  const currentlyReadingBooks = books.filter(book => {
    return book.percentageRead() !== 100;
  });

  const sortMethod = useSelector(state => state.books.sortMethod);
  useEffect(() => {
    dispatch(changeSort(sortMethod));
  }, [books]);

  const mainColor = useSelector(state => state.color);

  return (
    <ChakraProvider theme={theme}>
      <Box w="xl" mx="auto">
        <BookGridActions color={mainColor} />
        <Tabs isLazy colorScheme={mainColor}>
          <TabList mb="2">
            <Tab _focus={{}}>All books</Tab>
            <Tab _focus={{}}>Currently reading</Tab>
            <Tab _focus={{}}>Finished</Tab>
          </TabList>
          <TabPanels h="85vh" overflowY="scroll">
            <TabPanel>
              <BookGrid books={books} footerType="progress" />
              {books.length === 0 ? (
                <Text textAlign="center">
                  You have no books added! Start adding them by clicking "New
                  book" above.
                </Text>
              ) : (
                true
              )}
            </TabPanel>
            <TabPanel>
              <BookGrid books={currentlyReadingBooks} footerType="progress" />
              {currentlyReadingBooks.length === 0 ? (
                <Text textAlign="center">
                  You aren't reading any book right now. Add a new one by
                  clicking "New book" above.
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
      </Box>
    </ChakraProvider>
  );
}

export default App;
