import { Image } from '@chakra-ui/react';

function BookCover(props) {
  return (
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
  );
}

export default BookCover;
