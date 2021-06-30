import React from 'react';
import { Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function BookCover(props) {
  return (
    <Link as={RouterLink} to={'/books/' + props.bookId}>
      <Image
        src={props.imageSrc}
        borderRadius="md"
        h="48"
        w="36"
        objectFit="fill"
        mx="auto"
        mt="-7"
        transform={'scale(' + props.coverScale + ')'}
        transitionDuration="0.3s"
      />
    </Link>
  );
}

export default BookCover;
