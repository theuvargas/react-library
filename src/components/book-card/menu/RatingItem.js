import React from 'react';
import { useDisclosure, MenuItem, Box, Icon } from '@chakra-ui/react';
import RatingModal from '../../modals/RatingModal';
import { FaStar } from 'react-icons/fa';

function RatingItem(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <MenuItem onClick={onToggle} icon={<Icon as={FaStar} />}>
        Rate
      </MenuItem>
      <RatingModal
        toggleIsOpen={onToggle}
        isOpen={isOpen}
        bookId={props.bookId}
      />
    </Box>
  );
}

export default RatingItem;
