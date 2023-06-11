import theme from '@/styles/root';
import { Box, Center, Flex } from '@chakra-ui/react';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

/**
 * Renders a component displaying a list item's details.
 *
 * @param {Object} item - The item object to display details of.
 * @return {JSX.Element} A React element representing the list item's details.
 */
const ListDetailsExp = ({item}) => {
    return (
      <>
        <Flex w={"100%"} h={"auto"}>
          <Center
            w={"5%"}
            h={"100%"}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{ color: theme.green }}
              size="xs"
            />
          </Center>
          <Box w={"95%"} h={"100%"} fontSize={"smaller"} textAlign={'justify'} color={theme.slate}>
            {item.description}
          </Box>
        </Flex>
      </>
    );
};

export default ListDetailsExp;