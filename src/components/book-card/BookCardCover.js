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
        transitionDuration="0.3s"
        _hover={{ transform: 'scale(1.04)' }}
        _focus={{ transform: 'scale(1.04)' }}
      />
    </Link>
  );
}

export default BookCover;
