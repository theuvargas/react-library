import React from 'react';
import { useParams } from 'react-router';
import { Flex, Box } from '@chakra-ui/layout';
import { useGetBook, useGetGenreArrayById } from '../../util/hooks';
import { useSelector } from 'react-redux';
import {
  Image,
  Icon,
  Table,
  Tbody,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FaTheaterMasks,
  FaUser,
  FaBookReader,
  FaStar,
  FaBook,
  FaEdit,
} from 'react-icons/fa';
import TableItem from './TableItem';
import RatingStars from '../ui/RatingStars';
import EditBookForm from '../forms/EditBookForm';
import BookModal from '../modals/BookModal';

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

  const { isOpen, onToggle } = useDisclosure();

  const genreArray = useGetGenreArrayById(book.id);

  return (
    <Box bg={mainColor + '.50'}>
      <Flex
        w="container.md"
        h="100vh"
        px="6"
        mx="auto"
        shadow="lg"
        bg="white"
        direction="column"
      >
        <IconButton
          variant="ghost"
          ml="auto"
          mr="4"
          mt="1"
          w="8"
          colorScheme={mainColor}
          size="md"
          icon={<Icon as={FaEdit} />}
          onClick={onToggle}
          aria-label="edit book"
        />
        <BookModal header="Edit book" isOpen={isOpen} toggleIsOpen={onToggle}>
          <EditBookForm isOpen={isOpen} toggleIsOpen={onToggle} book={book} />
        </BookModal>
        <Flex alignItems="center" justify="center">
          <Image
            src={book.imageSrc}
            w="60"
            h="80"
            shadow="base"
            alt="book cover"
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
                data={stringifyGenres(genreArray)}
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
      </Flex>
    </Box>
  );
}

export default BookPage;
