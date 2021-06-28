import React from 'react';
import {
  Box,
  Input,
  NumberInputStepper,
  FormHelperText,
  Button,
  Text,
  FormControl,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { setRating } from '../../features/books/booksSlice';

function RateBookForm(props) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(props.bookId);
    dispatch(setRating({ id: props.bookId, rating: data.rating }));

    props.toggleIsOpen();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Input
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
        <Text color="red.500">{errors.rating && errors.rating.message}</Text>
        <FormHelperText>
          If you give 0 stars, the book will be considered unrated.
        </FormHelperText>
        <Box textAlign="right" mt="2">
          <Button colorScheme="green">Rate</Button>
        </Box>
      </FormControl>
    </form>
  );
}

export default RateBookForm;
