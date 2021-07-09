import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Checkbox,
  Box,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

function BookForm(props) {
  const genreState = useSelector(state => state.genres.genreArray);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    getValues,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <FormControl isRequired>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          defaultValue={props.book?.title}
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
          defaultValue={props.book?.author}
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
          defaultValue={props.book?.pages}
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
      {props.editMode ? (
        <>
          <FormControl>
            <FormLabel htmlFor="pagesRead">Number of pages read</FormLabel>
            <Input
              id="pagesRead"
              name="pagesRead"
              type="number"
              defaultValue={props.book?.pagesRead}
              {...register('pagesRead', {
                valueAsNumber: true,
                validate: {
                  nonNegative: v =>
                    parseInt(v, 10) >= 0 ||
                    "Number of pages read shouldn't be negative",
                  notBiggerThanPages: v =>
                    v <= getValues().pages ||
                    "Number of pages read shouldn't be bigger than number of pages",
                },
              })}
            />
            <Text color="red.500">
              {errors.pagesRead && errors.pagesRead.message}
            </Text>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="rating">Rating</FormLabel>
            <Input
              id="rating"
              name="rating"
              type="number"
              step="any"
              /*step="0.5"
              min="0"
              max="5"*/
              defaultValue={props.book?.rating}
              {...register('rating', {
                valueAsNumber: true,
                max: { value: 5, message: 'Ratings can only go up to 5' },
                min: {
                  value: 0,
                  message: "Ratings shouldn't be negative",
                },
                validate: {
                  isMultiple: v =>
                    Number.isInteger(v / 0.5) ||
                    'The rating should be a multiple of 0.5',
                },
              })}
            />
            <Text color="red.500">
              {errors.rating && errors.rating.message}
            </Text>
          </FormControl>{' '}
        </>
      ) : (
        true
      )}
      <FormControl>
        <FormLabel htmlFor="genres">Genres</FormLabel>
        <Box id="genres">
          {genreState.map((genre, index) => {
            const containsGenre = props.bookGenres?.includes(genre);
            return (
              <Checkbox
                defaultIsChecked={containsGenre}
                mr="3"
                value={index}
                key={genre}
                {...register('genreArray.' + genre)}
              >
                {genre}
              </Checkbox>
            );
          })}
        </Box>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="image">Image URL</FormLabel>
        <Input
          id="image"
          type="url"
          defaultValue={props.book?.imageSrc}
          {...register('image')}
        />
      </FormControl>
      <Box mt="2" textAlign="right">
        <Button isLoading={isSubmitting} type="submit" colorScheme="green">
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default BookForm;
