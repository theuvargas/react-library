import { createSlice } from '@reduxjs/toolkit';

export const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    genreArray: [
      'Drama',
      'Comedy',
      'Epic',
      'Romance',
      'Young Adult',
      'Children',
      'Nonfiction',
      'Sci-fi',
      'Biografy',
      'Adventure',
      'Horror',
      'Mystery',
      'Thriller',
      'Self Help',
      'History',
      'Psychology',
      'Dystopia',
    ].sort((genre1, genre2) => {
      return genre1 < genre2 ? -1 : 1;
    }),
  },
  reducers: {},
});

// export const {} = genresSlice.actions;

export default genresSlice.reducer;
