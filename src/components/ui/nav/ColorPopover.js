import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import {
  Icon,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
  PopoverCloseButton,
  Button,
  SimpleGrid,
  Box,
  GridItem,
} from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux';
import { changeColor } from '../../../features/theme/colorSlice';

const colors = [
  'pink',
  'green',
  'cyan',
  'teal',
  'blue',
  'red',
  'yellow',
  'orange',
  'purple',
  'gray',
];

function ColorPopover() {
  const dispatch = useDispatch();

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="unstyled">App Color</Button>
      </PopoverTrigger>
      <PopoverContent color="black" bg="gray.50">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Change the app main color</PopoverHeader>
        <PopoverBody>
          <SimpleGrid columns={5} textAlign="center">
            {colors.map(color => {
              return (
                <GridItem key={color}>
                  <Box
                    as="button"
                    w="max-content"
                    p="1"
                    _focus={{
                      outlineColor: 'blue.200',
                    }}
                    value={color}
                    onClick={() => {
                      dispatch(changeColor(color));
                    }}
                  >
                    <Box
                      h="7"
                      w="7"
                      bg={color + '.300'}
                      borderRadius="full"
                      borderWidth="thin"
                      borderColor={color + '.600'}
                      _active={{ bg: color + '.600' }}
                    ></Box>
                  </Box>
                </GridItem>
              );
            })}
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default ColorPopover;
