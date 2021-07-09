import React, { useState } from 'react';
import { Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function BookCover(props) {
  const [scale, setScale] = useState(1);

  return (
    <Link
      as={RouterLink}
      onFocus={() => {
        setScale(props.scale);
      }}
      onBlur={() => {
        setScale(1);
      }}
      display="inline-block"
      to={'/books/' + props.bookId}
    >
      <Image
        src={props.imageSrc}
        borderRadius="md"
        h="48"
        w="36"
        objectFit="fill"
        mt="-7"
        transitionDuration="0.3s"
        _hover={{ transform: 'scale(' + props.scale + ')' }}
        transform={'scale(' + scale + ')'}
        alt="book cover"
      />
    </Link>
  );
}

export default BookCover;
