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

const mainColor = 'pink';

function computePercentageRead() {
  const percentage = (this.pagesRead / this.pages) * 100;
  return Math.trunc(percentage);
}

const booksArray = [
  {
    id: '0',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    imageSrc: 'https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg',
    desciption:
      'From a renowned historian comes a groundbreaking narrative of humanity\'s creation and evolution - a number one international best seller - that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be "human".',
    genres: ['Non Fiction', 'History'],
    pages: 441,
    pagesRead: 441,
    percentageRead: computePercentageRead,
    rating: 5,
  },
  {
    id: '1',
    title: 'Fences',
    author: 'August Wilson',
    imageSrc:
      'https://images-na.ssl-images-amazon.com/images/I/51hA9YNKqAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    desciption:
      'Troy Maxson is a strong man, a hard man. He has had to be to survive. Troy Maxson has gone through life in an America where to be proud and black is to face pressures that could crush a man, body and soul. But the 1950s are yielding to the new spirit of liberation in the 1960s, a spirit that is changing the world Troy Maxson has learned to deal with the only way he can, a spirit that is making him a stranger, angry and afraid, in a world he never knew and to a wife and son he understands less and less. This is a modern classic, a book that deals with the impossibly difficult themes of race in America, set during the Civil Rights Movement of the 1950s and 60s.',
    genres: ['Fiction', 'Drama'],
    pages: 229,
    pagesRead: 109,
    percentageRead: computePercentageRead,
    rating: -1,
  },
  {
    id: '2',
    title: 'The Road',
    author: 'Cormac McCarthy',
    imageSrc:
      'https://images-na.ssl-images-amazon.com/images/I/41DOUWI2haL._SX323_BO1,204,203,200_.jpg',
    desciption:
      "A father and his son walk alone through burned America. Nothing moves in the ravaged landscape save the ash on the wind. It is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they don't know what, if anything, awaits them there. They have nothing; just a pistol to defend themselves against the lawless bands that stalk the road, the clothes they are wearing, a cart of scavenged food—and each other.",
    genres: ['Fiction', 'Drama', 'Adventure'],
    pages: 209,
    pagesRead: 10,
    percentageRead: computePercentageRead,
    rating: 1.5,
  },
  {
    id: '3',
    title: 'Recursion',
    author: 'Blake Crouch',
    imageSrc: 'https://m.media-amazon.com/images/I/51HsFY3rRBL._SY346_.jpg',
    desciption:
      'Reality is broken.\nAt first, it looks like a disease. An epidemic that spreads through no known means, driving its victims mad with memories of a life they never lived. But the force that’s sweeping the world is no pathogen. It’s just the first shock wave, unleashed by a stunning discovery—and what’s in jeopardy is not our minds but the very fabric of time itself.\n\nIn New York City, Detective Barry Sutton is closing in on the truth—and in a remote laboratory, neuroscientist Helena Smith is unaware that she alone holds the key to this mystery . . . and the tools for fighting back.\nTogether, Barry and Helena will have to confront their enemy—before they, and the world, are trapped in a loop of ever-growing chaos.',
    genres: ['Fiction', 'Sci-Fi', 'Action'],
    pages: 305,
    pagesRead: 277,
    percentageRead: computePercentageRead,
    rating: 2.5,
  },
  {
    id: '4',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupery',
    imageSrc:
      'https://images-na.ssl-images-amazon.com/images/I/41MkVPBdOOL._SX317_BO1,204,203,200_.jpg',
    desciption:
      "The Little Prince is a classic tale of equal appeal to children and adults. On one level it is the story of an airman's discovery, in the desert, of a small boy from another planet - the Little Prince of the title - and his stories of intergalactic travel, while on the other hand it is a thought-provoking allegory of the human condition.",
    genres: ['Fiction', 'Children', 'Adventure'],
    pages: 100,
    pagesRead: 0,
    percentageRead: computePercentageRead,
    rating: 4,
  },
  {
    id: '5',
    title: '1984',
    author: 'George Orwell',
    imageSrc:
      'https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg',
    genres: ['Fiction', 'Dystopia', 'Drama'],
    pages: 181,
    pagesRead: 100,
    percentageRead: computePercentageRead,
    rating: 3.5,
  },
];

function App() {
  const [books, setBooks] = useState(booksArray);

  const completedBooks = books.filter(book => {
    return book.percentageRead() === 100;
  });

  const currentlyReadingBooks = books.filter(book => {
    return book.percentageRead() !== 100;
  });

  const [triggerSort, setTriggerSort] = useState(false);
  function addBook(book) {
    setBooks(books.concat([book]));
    setTriggerSort(!triggerSort);
  }

  const [sortBy, setSortBy] = useState('title');

  function changeSort(newMethod) {
    setSortBy(newMethod);
  }

  useEffect(() => {
    if (sortBy === 'title') {
      books.sort((book1, book2) => {
        return book1.title.toLowerCase() < book2.title.toLowerCase() ? -1 : 1;
      });
      setBooks(books.concat([]));
    } else if (sortBy === 'rating') {
      books.sort((book1, book2) => {
        return book1.rating > book2.rating ? -1 : 1;
      });
      setBooks(books.concat([]));
    } else if (sortBy === 'most progress') {
      books.sort((book1, book2) => {
        return book1.percentageRead() > book2.percentageRead() ? -1 : 1;
      });
      setBooks(books.concat([]));
    } else if (sortBy === 'least progress') {
      books.sort((book1, book2) => {
        return book1.percentageRead() < book2.percentageRead() ? -1 : 1;
      });
      setBooks(books.concat([]));
    }
  }, [sortBy, triggerSort]);

  return (
    <ChakraProvider theme={theme}>
      <Box w="xl" mx="auto">
        <BookGridActions
          changeSort={changeSort}
          addBook={addBook}
          color={mainColor}
        />
        <Tabs isLazy colorScheme={mainColor}>
          <TabList mb="2">
            <Tab _focus={{}}>All books</Tab>
            <Tab _focus={{}}>Currently reading</Tab>
            <Tab _focus={{}}>Finished</Tab>
          </TabList>
          <TabPanels h="85vh" overflowY="scroll">
            <TabPanel>
              <BookGrid
                books={books}
                mainColor={mainColor}
                setBooks={setBooks}
                footerType="progress"
                allBooks={books}
              />
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
              <BookGrid
                books={currentlyReadingBooks}
                mainColor={mainColor}
                setBooks={setBooks}
                footerType="progress"
                allBooks={books}
              />
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
              <BookGrid
                books={completedBooks}
                mainColor={mainColor}
                setBooks={setBooks}
                footerType="rating"
                allBooks={books}
              />
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
