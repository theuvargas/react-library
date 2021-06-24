import PagesModal from './ui/PagesModal';

function SetPagesModal(props) {
  function setPages(e) {
    e.preventDefault();

    props.setPagesRead(
      props.book.id,
      e.target.children[0].children[1].children[0].value
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
