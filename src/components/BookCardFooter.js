import React from 'react';
import { Box, Text, Progress, Tooltip } from '@chakra-ui/react';
import { Fragment } from 'react';
import RatingStars from './ui/RatingStars';

function BookCardFooter(props) {
  return (
    <Box mx="2">
      {props.type === 'progress' ? (
        <Fragment>
          <Text fontSize="12" align="right">
            {props.percentageRead}% read
          </Text>
          <Tooltip
            placement="bottom"
            label={props.pagesRead + '/' + props.pages}
            openDelay={250}
            hasArrow
            shouldWrapChildren
          >
            <Progress
              value={props.percentageRead}
              colorScheme={props.color}
              hasStripe
              display="block"
            />
          </Tooltip>
        </Fragment>
      ) : (
        <RatingStars starsFilled={props.rating} starSize="5" />
      )}
    </Box>
  );
}

export default BookCardFooter;
