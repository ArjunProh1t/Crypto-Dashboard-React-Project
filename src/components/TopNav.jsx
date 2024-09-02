import { Box, Button, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaBars, FaUserTie } from "react-icons/fa6"

const TopNav = ({ title, onOpen }) => {
    return (
        <Box px="4" bg="white">
            <HStack
                maxW="70rem"
                h="16"
                justify="space-between"
                mx="auto">
                <Icon as={FaBars} onClick={onOpen} display={{ base: "block", lg: "none", }} />
                <Heading fontSize="28px" fontWeight="medium">{title}</Heading>
                <Menu>
                    <MenuButton as={Button}>
                        <Icon as={FaUserTie} fontSize="24px" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Support</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default TopNav