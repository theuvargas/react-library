import React from 'react';
import PagesModal from '../forms/PagesForm';
import { useDispatch } from 'react-redux';
import { setPagesRead } from '../../features/books/booksSlice';

function SetPagesModal(props) {
  const dispatch = useDispatch();

  function setPages(e) {
    e.preventDefault();

    dispatch(
      setPagesRead({
        id: props.bookId,
        pagesRead: e.target.children[0].children[1].children[0].value,
      })
    );

    props.toggleIsOpen();
  }

  return (
    <PagesModal
      header="Set pages read"
      label="New number of pages read"
      submitButton="Set"
      onSubmit={setPages}
      bookId={props.bookId}
      isOpen={props.isOpen}
      toggleIsOpen={props.toggleIsOpen}
    />
  );
}

export default SetPagesModal;
