import React from 'react';
import PagesModal from './ui/PagesModal';
import { useDispatch } from 'react-redux';
import { setPagesRead } from '../features/booksSlice';

function SetPagesModal(props) {
  const dispatch = useDispatch();

  function setPages(e) {
    e.preventDefault();

    dispatch(
      setPagesRead({
        id: props.book.id,
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
      book={props.book}
      isOpen={props.isOpen}
      toggleIsOpen={props.toggleIsOpen}
    />
  );
}

export default SetPagesModal;
