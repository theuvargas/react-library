import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';
import colorReducer from '../features/theme/colorSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    color: colorReducer,
  },
});
