import { Box, HStack, Icon, Stack, Text, Heading } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

const Sidenav = () => {

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack justify="space-between" boxShadow={{ base: "none", lg: "lg" }} w={{ base: "full", lg: "16rem"}} h="100vh"  bg="white"

    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">@ArjunPurohit</Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack key={nav.text}
              mx="3"
              borderRadius="10px"
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
              }}
              color="#797e82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" py="3" px="4" fontWeight="medium" >{nav.text}</Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <HStack
          mx="3"
          borderRadius="10px"
          _hover={{
            bg: "#f3f3f7",
            color: "#171717",
          }}
          color="#797e82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" py="3" px="4" fontWeight="medium" >Support</Text>
        </HStack>
      </Box>
    </Stack>
  )
}

export default Sidenav;