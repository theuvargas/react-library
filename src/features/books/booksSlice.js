import { createSlice } from '@reduxjs/toolkit';
import { useGetPercentageRead } from '../../util/hooks';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksArray: [
      {
        id: '0',
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        imageSrc: 'https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg',
        description:
          'From a renowned historian comes a groundbreaking narrative of humanity\'s creation and evolution - a number one international best seller - that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be "human".',
        genres: [0, 1, 2],
        pages: 441,
        pagesRead: 441,
        rating: 5,
      },
      {
        id: '1',
        title: 'Fences',
        author: 'August Wilson',
        imageSrc:
          'https://images-na.ssl-images-amazon.com/images/I/51hA9YNKqAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        description:
          'Troy Maxson is a strong man, a hard man. He has had to be to survive. Troy Maxson has gone through life in an America where to be proud and black is to face pressures that could crush a man, body and soul. But the 1950s are yielding to the new spirit of liberation in the 1960s, a spirit that is changing the world Troy Maxson has learned to deal with the only way he can, a spirit that is making him a stranger, angry and afraid, in a world he never knew and to a wife and son he understands less and less. This is a modern classic, a book that deals with the impossibly difficult themes of race in America, set during the Civil Rights Movement of the 1950s and 60s.',
        genres: [0, 1, 2],
        pages: 229,
        pagesRead: 109,
        rating: 0,
      },
      {
        id: '2',
        title: 'The Road',
        author: 'Cormac McCarthy',
        imageSrc:
          'https://images-na.ssl-images-amazon.com/images/I/41DOUWI2haL._SX323_BO1,204,203,200_.jpg',
        description:
          "A father and his son walk alone through burned America. Nothing moves in the ravaged landscape save the ash on the wind. It is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they don't know what, if anything, awaits them there. They have nothing; just a pistol to defend themselves against the lawless bands that stalk the road, the clothes they are wearing, a cart of scavenged food—and each other.",
        genres: [0, 1, 2],
        pages: 209,
        pagesRead: 10,
        rating: 1.5,
      },
      {
        id: '3',
        title: 'Recursion',
        author: 'Blake Crouch',
        imageSrc: 'https://m.media-amazon.com/images/I/51HsFY3rRBL._SY346_.jpg',
        description:
          'Reality is broken.\nAt first, it looks like a disease. An epidemic that spreads through no known means, driving its victims mad with memories of a life they never lived. But the force that’s sweeping the world is no pathogen. It’s just the first shock wave, unleashed by a stunning discovery—and what’s in jeopardy is not our minds but the very fabric of time itself.\n\nIn New York City, Detective Barry Sutton is closing in on the truth—and in a remote laboratory, neuroscientist Helena Smith is unaware that she alone holds the key to this mystery . . . and the tools for fighting back.\nTogether, Barry and Helena will have to confront their enemy—before they, and the world, are trapped in a loop of ever-growing chaos.',
        genres: [0, 1, 2],
        pages: 305,
        pagesRead: 277,
        rating: 2.5,
      },
      {
        id: '4',
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupery',
        imageSrc:
          'https://images-na.ssl-images-amazon.com/images/I/41MkVPBdOOL._SX317_BO1,204,203,200_.jpg',
        description:
          "The Little Prince is a classic tale of equal appeal to children and adults. On one level it is the story of an airman's discovery, in the desert, of a small boy from another planet - the Little Prince of the title - and his stories of intergalactic travel, while on the other hand it is a thought-provoking allegory of the human condition.",
        genres: [0, 1, 2],
        pages: 100,
        pagesRead: 0,
        rating: 4,
      },
      {
        id: '5',
        title: '1984',
        author: 'George Orwell',
        imageSrc:
          'https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg',
        genres: [0, 1, 2],
        pages: 181,
        pagesRead: 100,
        rating: 3.5,
      },
    ],
    sortBy: 'title',
  },
  reducers: {
    addBook: (state, action) => {
      state.booksArray.push(action.payload);
    },
    editBook: (state, action) => {
      //state.booksArray.find(book => book.id === action.payload.id) = action.payload;
      state.booksArray.forEach((book, i, arr) => {
        if (book.id === action.payload.id) {
          arr[i] = action.payload;
        }
      });
    },
    completeBook: (state, action) => {
      const requiredBook = state.booksArray.find(
        book => book.id === action.payload
      );
      requiredBook.pagesRead = requiredBook.pages;
    },
    addPagesRead: (state, action) => {
      const pagesToAdd = parseInt(action.payload.pagesToAdd, 10);

      const requiredBook = state.booksArray.find(
        book => book.id === action.payload.id
      );

      if (pagesToAdd + requiredBook.pagesRead > requiredBook.pages)
        requiredBook.pagesRead = requiredBook.pages;
      else requiredBook.pagesRead += pagesToAdd;
    },
    setPagesRead: (state, action) => {
      const pagesRead = parseInt(action.payload.pagesRead, 10);
      if (pagesRead < 0) return;

      const requiredBook = state.booksArray.find(
        book => book.id === action.payload.id
      );

      if (pagesRead > requiredBook.pages)
        requiredBook.pagesRead = requiredBook.pages;
      else requiredBook.pagesRead = pagesRead;
    },
    setRating: (state, action) => {
      const requiredBook = state.booksArray.find(
        book => book.id === action.payload.id
      );
      requiredBook.rating = action.payload.rating;
    },
    removeBook: (state, action) => {
      state.booksArray = state.booksArray.filter(
        book => book.id !== action.payload
      );
    },
    changeSort: (state, action) => {
      state.sortBy = action.payload;
    },
    sortBooks: state => {
      const sortBy = state.sortBy;
      if (sortBy === 'title') {
        state.booksArray.sort((book1, book2) => {
          return book1.title.toLocaleLowerCase() <
            book2.title.toLocaleLowerCase()
            ? -1
            : 1;
        });
      } else if (sortBy === 'rating') {
        state.booksArray.sort((book1, book2) => {
          return book1.rating > book2.rating ? -1 : 1;
        });
      } else if (sortBy === 'most progress') {
        state.booksArray.sort((book1, book2) => {
          return useGetPercentageRead(book1.pages, book1.pagesRead) >
            useGetPercentageRead(book2.pages, book2.pagesRead)
            ? -1
            : 1;
        });
      } else if (sortBy === 'least progress') {
        state.booksArray.sort((book1, book2) => {
          return useGetPercentageRead(book1.pages, book1.pagesRead) <
            useGetPercentageRead(book2.pages, book2.pagesRead)
            ? -1
            : 1;
        });
      }
    },
  },
});

export const {
  addBook,
  editBook,
  completeBook,
  addPagesRead,
  setPagesRead,
  setRating,
  removeBook,
  changeSort,
  sortBooks,
} = booksSlice.actions;

export default booksSlice.reducer;
