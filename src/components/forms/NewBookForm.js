import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../features/books/booksSlice';
import BookForm from './BookForm';

function NewBookForm(props) {
  const dispatch = useDispatch();

  function onSubmit(data) {
    data.genreArray = Object.values(data.genreArray);
    data.genreArray = data.genreArray.filter(genre => {
      return genre !== false;
    });

    if (data.image === '')
      data.image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJk-qCpmshndFRatcLSOB8GsyboaySnGpeS2GvkZsQShaZpccKqkkK4MkBRGbIVOBnzw&usqp=CAU';

    const newBook = {
      id: data.title,
      title: data.title,
      author: data.author,
      imageSrc: data.image,
      genres: data.genreArray,
      pages: data.pages,
      pagesRead: 0,
      rating: 0,
    };

    dispatch(addBook(newBook));

    props.toggleIsOpen();
  }

  return <BookForm onSubmit={onSubmit} />;
}

export default NewBookForm;
