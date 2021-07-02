import { useSelector } from 'react-redux';

function useGetBook(id) {
  return useSelector(state =>
    state.books.booksArray.find(book => book.id === id)
  );
}

function useGetPercentageRead(pagesTotal, pagesRead) {
  const percentage = (pagesRead / pagesTotal) * 100;
  return Math.trunc(percentage);
}

function useGetGenreArrayById(id) {
  const { genres } = useGetBook(id);
  const genreState = useSelector(state => state.genres.genreArray);

  const genreArray = [];
  genres.forEach(genre => {
    genreArray.push(genreState[genre]);
  });

  return genreArray;
}

export { useGetBook, useGetPercentageRead, useGetGenreArrayById };
