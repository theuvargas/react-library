import React from 'react';
import { useParams } from 'react-router';
import { Flex, Box } from '@chakra-ui/layout';
import { useGetBook } from '../../util/hooks';
import { useSelector } from 'react-redux';
import { Image, Text, Icon, Table, Tbody, Heading } from '@chakra-ui/react';
import {
  FaTheaterMasks,
  FaUser,
  FaBookOpen,
  FaBookReader,
  FaStar,
  FaBook,
} from 'react-icons/fa';
import { useGetPercentageRead } from '../../util/hooks';
import TableItem from './TableItem';
import RatingStars from '../ui/RatingStars';

function BookPage() {
  const { bookId } = useParams();
  const book = useGetBook(bookId);

  const mainColor = useSelector(state => state.color);

  function stringifyGenres(genres) {
    let str = '';

    for (let i = 0; i < genres.length; i++) {
      str += genres[i] + ', ';
    }

    return str.substr(0, str.length - 2);
  }

  return (
    <Box bg={mainColor + '.50'}>
      <Flex
        w="fit-content"
        h="100vh"
        px="6"
        mx="auto"
        shadow="lg"
        bg="white"
        direction="column"
      >
        <Flex mt="4" alignItems="center" justify="center">
          <Image
            src={book.imageSrc}
            w="60"
            h="80"
            objectFit="fill"
            shadow="base"
          />
          <Table w="2/5" fontSize="18" mt="2">
            <Tbody>
              <TableItem
                icon={FaBook}
                label="title"
                data={book.title}
                iconColor={mainColor + '.600'}
              />
              <TableItem
                icon={FaUser}
                label="author"
                data={book.author}
                iconColor={mainColor + '.600'}
              />
              <TableItem
                icon={FaTheaterMasks}
                label="genres"
                data={stringifyGenres(book.genres)}
                iconColor={mainColor + '.600'}
              />

              <TableItem
                icon={FaBookReader}
                label="pages read"
                data={book.pagesRead + ' / ' + book.pages}
                iconColor={mainColor + '.600'}
              />
              {book.rating === 0 ? (
                true
              ) : (
                <TableItem
                  icon={FaStar}
                  label="your rating"
                  data={<RatingStars starsFilled={book.rating} starSize={6} />}
                  iconColor={mainColor + '.600'}
                />
              )}
            </Tbody>
          </Table>
        </Flex>
        {book.description ? (
          <Box>
            <Text mt="4" fontSize="20" fontWeight="bold">
              Description
            </Text>
            <Text mt="2" fontSize="18" lineHeight="tall" w="container.md">
              {book.description}
            </Text>
          </Box>
        ) : (
          true
        )}
      </Flex>
    </Box>
  );
}

export default BookPage;
