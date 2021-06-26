import React from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function RateBookForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    props.setRating(props.book.id, data.rating);
    props.toggleIsOpen();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('rating', {
          valueAsNumber: true,
          max: { value: 5, message: 'Ratings can only go up to 5' },
          validate: {
            isMultiple: v =>
              Number.isInteger(v / 0.5) ||
              'The rating should be a multiple of 0.5',
          },
        })}
      />
      <Text color="red.500">{errors.rating && errors.rating.message}</Text>
      <Box textAlign="right" mt="2">
        <Button colorScheme="green">Rate</Button>
      </Box>
    </form>
  );
}

export default RateBookForm;
