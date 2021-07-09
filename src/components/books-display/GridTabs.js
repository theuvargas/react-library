import React, { useEffect, useState } from 'react';
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
  const allBooks = useSelector(state => state.books.booksArray);

  const [books, setBooks] = useState(allBooks);

  const [completedBooks, setCompletedBooks] = useState(
    books.filter(book => {
      return book.pagesRead === book.pages;
    })
  );
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState(
    books.filter(book => {
      return book.pagesRead !== book.pages;
    })
  );

  const genreArray = useSelector(state => state.genres.genreArray);
  const filter = useSelector(state => state.books.filter);
  useEffect(() => {
    if (filter.length !== 0) {
      setBooks(
        allBooks.filter(book => {
          return book.genres.some(genre => filter.includes(genreArray[genre]));
        })
      );
    } else setBooks(allBooks);
  }, [filter, allBooks, genreArray]);

  useEffect(() => {
    setCompletedBooks(
      books.filter(book => {
        return book.pagesRead === book.pages;
      })
    );

    setCurrentlyReadingBooks(
      books.filter(book => {
        return book.pagesRead !== book.pages;
      })
    );
  }, [books]);

  const dispatch = useDispatch();

  const sortBy = useSelector(state => state.books.sortBy);
  const sortByOrder = useSelector(state => state.books.sortByOrder);
  useEffect(() => {
    dispatch(sortBooks(sortBy));
  }, [sortBy, sortByOrder]);

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
      </TabPanels>
    </Tabs>
  );
}

export default GridTabs;
