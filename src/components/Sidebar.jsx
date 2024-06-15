import { Box, VStack, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} w="250px" p={4} boxShadow="md" height="100vh">
      <VStack align="start" spacing={4}>
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" color={color}>
          Home
        </Link>
        {/* Add more links as needed */}
      </VStack>
    </Box>
  );
};

export default Sidebar;