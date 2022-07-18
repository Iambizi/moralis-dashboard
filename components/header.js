import { Center, Flex, Text, Button } from "@chakra-ui/react";

const Header = ({ user, logout }) => {
  return (
    <header>
      <Flex
        px="10"
        py="6"
        justifyContent="space-between"
        bgGradient="linear(to-br,teal.400, purple.300)"
      >
        <Center>
          <Text fontSize="xl" fontWeight="bold">
            Dashboard3
          </Text>
        </Center>
        <Center>
          <Text>{user.getUsername()}</Text>
          <Button ml={4} onClick={logout} colorScheme="purple">
            Logout
          </Button>
        </Center>
      </Flex>
    </header>
  );
};

export default Header;
