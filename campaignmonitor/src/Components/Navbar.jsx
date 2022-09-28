import {
  Flex,
  Box,
  Link,
  Button,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
// import { Link as ReactRouterLink } from 'react-router-dom';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position="fixed" w="100%" zIndex="10">
        <Flex
          color="white"
          bg="#111324"
          h="82.6px"
          alignItems="center"
          justifyContent="space-around"
        >
          <Logo />

          <Flex alignItems="center" gap="25px" h='100%'>
            <Link>
              <Menu isOpen={isOpen}>
                <MenuButton
                  mx={1}
                  py={[1, 2, 2]}
                  px={4}
                  aria-label="Courses"
                  fontWeight="normal"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  
                >
                  Features {isOpen ? <ChevronUpIcon w={5} h={5} /> : <ChevronDownIcon w={5} h={5} />}
                </MenuButton>
                <MenuList
                  marginTop='-7px'
                  color="black"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  padding='0'
                  border='0'
                  boxShadow='md'
                >
                  <MenuItem _hover={{ bg: "#6AD6E0", borderTopRadius:'5px' }}>Menu Item 1</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 2</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 3</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 3</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 3</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 3</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 3</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 3</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 3</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 3</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0" }}>Menu Item 3</MenuItem>
                  <MenuItem _hover={{ bg: "#6AD6E0", borderBottomRadius:'5px' }}>Menu Item 3</MenuItem>
                </MenuList>
              </Menu>
            </Link>
            <Link>Pricing</Link>
            <Link>Resources</Link>
            <Link>Customers</Link>
            <Link>Gallery</Link>
            <Link>Agencies</Link>
          </Flex>

          <Flex alignItems="center" gap="20px">
            <Link>Contact us</Link>
            <Link>Log in</Link>
            <Button colorScheme="teal" size="md">
              <Link>Try it free</Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
