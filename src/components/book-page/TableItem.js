import React from 'react';
import { Tr, Td, Flex, Icon, Text } from '@chakra-ui/react';

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
        <Text fontWeight="medium">{props.data}</Text>
      </Td>
    </Tr>
  );
}

export default TableItem;
