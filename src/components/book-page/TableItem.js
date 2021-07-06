import React from 'react';
import { Tr, Td, Flex, Icon, Text, Box } from '@chakra-ui/react';

function TableItem(props) {
  return (
    <Tr>
      <Td>
        <Flex alignItems="center">
          <Icon as={props.icon} mr="2" color={props.iconColor} />
          <Text letterSpacing="wider" mr="4" fontWeight="light">
            {props.label}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Box fontWeight="medium">{props.data}</Box>
      </Td>
    </Tr>
  );
}

export default TableItem;
