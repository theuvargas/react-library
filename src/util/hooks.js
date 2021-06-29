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

export { useGetBook, useGetPercentageRead };
