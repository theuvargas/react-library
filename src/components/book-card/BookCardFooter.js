import React, { Fragment } from 'react';
import { Box, Text, Progress, Tooltip } from '@chakra-ui/react';
import RatingStars from '../ui/RatingStars';
import { useSelector } from 'react-redux';

function BookCardFooter(props) {
  const [pages, pagesRead, percentageRead, rating] = useSelector(state => {
    const book = state.books.booksArray.find(book => book.id === props.bookId);

    return [book.pages, book.pagesRead, book.percentageRead(), book.rating];
  });

  const mainColor = useSelector(state => state.color);

  return (
    <Box mx="2">
      {props.type === 'progress' ? (
        <Fragment>
          <Text fontSize="12" align="right">
            {percentageRead}% read
          </Text>
          <Tooltip
            placement="bottom"
            label={pagesRead + '/' + pages}
            openDelay={250}
            hasArrow
            shouldWrapChildren
          >
            <Progress
              value={percentageRead}
              colorScheme={mainColor}
              hasStripe
              display="block"
            />
          </Tooltip>
        </Fragment>
      ) : (
        <RatingStars starsFilled={rating} starSize="5" />
      )}
    </Box>
  );
}

export default BookCardFooter;
