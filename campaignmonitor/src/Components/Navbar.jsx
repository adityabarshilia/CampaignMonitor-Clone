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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Text,
  Divider,
  Stack
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import { Link as RouterLink } from "react-router-dom";
import { useRef } from "react";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();

  return (
    <>
      <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }} ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Contact us
      </Link>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent bg='black' color='white' opacity='.8' >
          <DrawerCloseButton />
          <DrawerHeader m='12px 0 0 50px' ><Logo color='white' /></DrawerHeader>

          <Flex w='100%' h='100vh' justifyContent='center' mt='200px'>
          <Box>
            <Text fontSize='12px' textAlign='center' p='8px'>ASK US YOUR QUESTIONS</Text>
            <Divider />
            <Stack textAlign='left' spacing='10px' mt='10px'>
            <Link p='8px' fontSize='20px'>Get started for free <ChevronRightIcon /></Link>
            <Link p='8px' fontSize='20px'>Contact the sales team <ChevronRightIcon /></Link>
            <Link p='8px' fontSize='20px'>Contact the support team <ChevronRightIcon /></Link>
            </Stack>
          </Box>        
          </Flex>
         
        </DrawerContent>
      </Drawer>
    </>
  )
}

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
          <Link as={RouterLink} to='/home' _hover={{ textDecoration: 'none' }}><Logo color='white' /></Link>

          <Flex alignItems="center" gap={{ base: '5px', md: '1px', lg: '25px' }} h='100%'>
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
            {/* <Link _hover={{ textDecoration: 'none', color:"#6AD6E0" }} as={RouterLink} to='/contact'>Contact us</Link> */}
            <DrawerExample />
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
