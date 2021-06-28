import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Button,
  CheckboxGroup,
  Checkbox,
  Box,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBook } from '../../features/books/booksSlice';

const genreArray = [
  'Drama',
  'Comedy',
  'Epic',
  'Romance',
  'Young Adult',
  'Children',
  'Nonfiction',
  'Sci-fi',
  'Biografy',
  'Adventure',
  'Horror',
  'Mystery',
  'Thriller',
  'Self Help',
  'History',
  'Psychology',
];

function NewBookForm(props) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  function onSubmit(data) {
    data.genreArray = Object.values(data.genreArray);
    data.genreArray = data.genreArray.filter(genre => {
      return genre !== false;
    });

    if (data.image === '')
      data.image =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJk-qCpmshndFRatcLSOB8GsyboaySnGpeS2GvkZsQShaZpccKqkkK4MkBRGbIVOBnzw&usqp=CAU';

    const newBook = {
      id: data.title,
      title: data.title,
      author: data.author,
      description: data.description,
      imageSrc: data.image,
      genres: data.genreArray,
      pages: data.pages,
      pagesRead: 0,
      rating: -1,
      percentageRead: function computePercentageRead() {
        const percentage = (this.pagesRead / this.pages) * 100;
        return Math.trunc(percentage);
      },
    };

    //props.addBook(newBook);
    dispatch(addBook(newBook));

    props.toggleIsOpen();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          id="title"
          name="title"
          {...register('title', { required: 'This is required' })}
        />
        <Text color="red.500">{errors.name && errors.name.message}</Text>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="author">Author</FormLabel>
        <Input
          id="author"
          {...register('author', { required: 'This is required' })}
        />
        <Text color="red.500">{errors.author && errors.author.message}</Text>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="pages">Number of pages</FormLabel>
        <Input
          id="pages"
          name="pages"
          type="number"
          {...register('pages', {
            required: 'This is required',
            valueAsNumber: true,
            validate: {
              positive: v =>
                parseInt(v, 10) > 0 || 'Number of pages should be positive',
            },
          })}
        />
        <Text color="red.500">{errors.pages && errors.pages.message}</Text>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea id="description" {...register('description')} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="genres">Genres</FormLabel>
        <CheckboxGroup id="genres">
          {genreArray.map(genre => {
            return (
              <Checkbox
                mr="3"
                value={genre}
                key={genre}
                {...register('genreArray.' + genre)}
              >
                {genre}
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="image">Image URL</FormLabel>
        <Input id="image" type="url" {...register('image')} />
      </FormControl>
      <Box mt="2" textAlign="right">
        <Button isLoading={isSubmitting} type="submit" colorScheme="green">
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default NewBookForm;
