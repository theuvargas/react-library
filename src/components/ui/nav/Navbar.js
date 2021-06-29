import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ColorPopover from './ColorPopover';

function Navbar() {
  const mainColor = useSelector(state => state.color);

  return (
    <Flex
      h="12"
      bg={mainColor + '.600'}
      color="white"
      justify="space-around"
      alignItems="center"
    >
      <Box fontSize="22">
        <RouterLink to="/">React Library</RouterLink>
      </Box>

      <Flex alignItems="center">
        <Box>Language</Box>
        <Box ml="6">
          <ColorPopover />
        </Box>
        <Box ml="6">About</Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
