import React from 'react';
import { Box, HStack, Icon, Text, Tag, TagLabel, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { FaBookOpen, FaBook } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { useGetBook, useGetPercentageRead } from '../../util/hooks';

function BookCardInfo(props) {
  const { title, author, genres, pages, pagesRead } = useGetBook(props.bookId);
  const percentageRead = useGetPercentageRead(pages, pagesRead);

  const mainColor = useSelector(state => state.color);

  return (
    <Box mx="2" mt="2">
      <HStack my="-1">
        <Icon
          as={percentageRead === 100 ? FaBook : FaBookOpen}
          color={mainColor + '.700'}
        />
        <Text isTruncated>{title}</Text>
      </HStack>
      <Text as="i" fontSize="11">
        by {author}
      </Text>
      <HStack mt="1">
        {genres.map((genre, i) => {
          if (i > 3) return true;
          return (
            <Tag size="sm" colorScheme={mainColor} key={i}>
              <TagLabel>{genre}</TagLabel>
            </Tag>
          );
        })}
      </HStack>
    </Box>
  );
}

export default BookCardInfo;
