import React from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../../features/books/booksSlice';
import { useGetGenreArrayById } from '../../util/hooks';
import BookForm from './BookForm';

function EditBookForm(props) {
  const dispatch = useDispatch();

  function onSubmit(data) {
    data.genreArray = Object.values(data.genreArray);
    data.genreArray = data.genreArray.filter(genre => {
      return genre !== false;
    });

    if (data.image === '')
      data.image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJk-qCpmshndFRatcLSOB8GsyboaySnGpeS2GvkZsQShaZpccKqkkK4MkBRGbIVOBnzw&usqp=CAU';

    const editedBook = {
      id: props.book.id,
      title: data.title,
      author: data.author,
      description: data.description,
      imageSrc: data.image,
      genres: data.genreArray,
      pages: data.pages,
      pagesRead: data.pagesRead,
      rating: data.rating,
    };

    dispatch(editBook(editedBook));

    props.toggleIsOpen();
  }

  const bookGenres = useGetGenreArrayById(props.book.id);

  return (
    <BookForm
      book={props.book}
      onSubmit={onSubmit}
      bookGenres={bookGenres}
      editMode
    />
  );
}

export default EditBookForm;
