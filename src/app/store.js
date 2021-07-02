import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';
import colorReducer from '../features/theme/colorSlice';
import genresReducer from '../features/books/genresSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    color: colorReducer,
    genres: genresReducer,
  },
});
