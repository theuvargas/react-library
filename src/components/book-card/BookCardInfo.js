import React from 'react';
import { Box, HStack, Icon, Text, Tag, TagLabel } from '@chakra-ui/react';

import { FaBookOpen, FaBook } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import {
  useGetBook,
  useGetGenreArrayById,
  useGetPercentageRead,
} from '../../util/hooks';

function BookCardInfo(props) {
  const { title, author, pages, pagesRead } = useGetBook(props.bookId);
  const percentageRead = useGetPercentageRead(pages, pagesRead);

  const mainColor = useSelector(state => state.color);

  const genreArray = useGetGenreArrayById(props.bookId);

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
        {genreArray.map((genre, i) => {
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
