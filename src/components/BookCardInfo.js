import React from 'react';
import { Box, HStack, Icon, Text, Tag, TagLabel, Link } from '@chakra-ui/react';

import { FaBookOpen, FaBook } from 'react-icons/fa';

function BookCardInfo(props) {
  return (
    <Box mx="2" mt="2">
      <HStack my="-1">
        <Icon
          as={props.percentageRead === 100 ? FaBook : FaBookOpen}
          color={props.color + '.700'}
        />
        <Text isTruncated>
          <Link href="#">{props.title}</Link>
        </Text>
      </HStack>
      <Text as="i" fontSize="11">
        by {props.author}
      </Text>
      <HStack mt="1">
        {props.genres.map((genre, i) => {
          if (i > 3) return true;
          return (
            <Tag size="sm" colorScheme={props.color} key={i}>
              <TagLabel>{genre}</TagLabel>
            </Tag>
          );
        })}
      </HStack>
    </Box>
  );
}

export default BookCardInfo;
