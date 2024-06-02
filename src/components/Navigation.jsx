import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="gray.800" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/mynfts" colorScheme="teal" variant="ghost">
          My NFTs
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;
