import React, { Fragment } from 'react';
import { Box, Text, Progress, Tooltip } from '@chakra-ui/react';
import RatingStars from '../ui/RatingStars';
import { useSelector } from 'react-redux';
import { useGetBook, useGetPercentageRead } from '../../util/hooks';

function BookCardFooter(props) {
  const { pages, pagesRead, rating } = useGetBook(props.bookId);
  const percentageRead = useGetPercentageRead(pages, pagesRead);

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
