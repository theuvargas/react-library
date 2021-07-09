import React, { Fragment } from 'react';
import { Box, Flex, Text, Progress, Tooltip } from '@chakra-ui/react';
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
              aria-label="progress bar"
            />
          </Tooltip>
        </Fragment>
      ) : (
        <Flex mt="1">
          <RatingStars starsFilled={rating} starSize="5" />
          <Text fontSize="14" ml="1">
            {rating === 0 ? 'Unrated' : rating + '/5'}
          </Text>
        </Flex>
      )}
    </Box>
  );
}

export default BookCardFooter;
