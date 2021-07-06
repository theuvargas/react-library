import { FaStarHalf } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import React from 'react';

function RatingStars(props) {
  const stars = [];
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      if (i / 2 < props.starsFilled) {
        stars.push(
          <Icon
            boxSize={props.starSize}
            mr={-props.starSize}
            color={'yellow.300'}
            as={FaStarHalf}
            key={i}
          />
        );
      } else {
        stars.push(
          <Icon
            key={i}
            boxSize={props.starSize}
            mr={-props.starSize}
            as={FaStarHalf}
          />
        );
      }
    } else {
      if (i / 2 < props.starsFilled) {
        stars.push(
          <Icon
            key={i}
            transform="rotateY(180deg)"
            color={'yellow.300'}
            as={FaStarHalf}
            boxSize={props.starSize}
          />
        );
      } else {
        stars.push(
          <Icon
            key={i}
            boxSize={props.starSize}
            transform="rotateY(180deg)"
            as={FaStarHalf}
          />
        );
      }
    }
  }

  return stars;
}

export default RatingStars;
