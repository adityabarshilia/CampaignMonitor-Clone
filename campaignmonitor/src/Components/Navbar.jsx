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
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import { Link as RouterLink } from "react-router-dom";

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
          <Link as={RouterLink} to='/home' _hover={{ textDecoration: 'none' }}><Logo /></Link>

          <Flex alignItems="center" gap="25px" h='100%'>
            <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }}>
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
                  Features {isOpen ? <ChevronUpIcon color="#6AD6E0" w={5} h={5} /> : <ChevronDownIcon w={5} h={5} />}
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
                  <MenuItem p='12px'  _hover={{ bg: "#6AD6E0", borderTopRadius:'5px' }}>Features Overview</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>Email Template Builder</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>Segmentation</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>Personalization</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>Marketing Automation</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>Transactional Email</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>Analytics</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>Integrations</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>Signup Forms</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>SMS</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0" }}>Expert Services</MenuItem>
                  <MenuItem p='12px' _hover={{ bg: "#6AD6E0", borderBottomRadius:'5px' }}>What's New</MenuItem>
                </MenuList>
              </Menu>
            </Link>
            <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }} as={RouterLink} to='/pricing'>Pricing</Link>
            <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }}>Resources</Link>
            <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }}>Customers</Link>
            <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }}>Gallery</Link>
            <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }}>Agencies</Link>
          </Flex>

          <Flex alignItems="center" gap="20px">
            <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }} as={RouterLink} to='/contact'>Contact us</Link>
            <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }} as={RouterLink} to='/login'>Log in</Link>
            <Button colorScheme="teal" size="md">
              <Link _hover={{ textDecoration: 'none' }} as={RouterLink} to='/signup'>Try it free</Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
