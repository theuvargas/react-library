import React from 'react';
import { Box, HStack, Icon, Text, Tag, TagLabel, Link } from '@chakra-ui/react';

import { FaBookOpen, FaBook } from 'react-icons/fa';

import { useSelector } from 'react-redux';

function BookCardInfo(props) {
  const [title, author, genres, percentageRead] = useSelector(state => {
    const book = state.books.booksArray.find(book => book.id === props.bookId);

    return [book.title, book.author, book.genres, book.percentageRead()];
  });

  const mainColor = useSelector(state => state.color);

  return (
    <Box mx="2" mt="2">
      <HStack my="-1">
        <Icon
          as={percentageRead === 100 ? FaBook : FaBookOpen}
          color={mainColor + '.700'}
        />
        <Text isTruncated>
          <Link href="#">{title}</Link>
        </Text>
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
