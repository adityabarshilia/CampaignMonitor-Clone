import { Flex, Box, Link, Button, } from "@chakra-ui/react";
import {  ChevronDownIcon } from '@chakra-ui/icons'
import Logo from "./Logo";
// import { Link as ReactRouterLink } from 'react-router-dom';

function Navbar() {
   
  return (
    <>
      <Box position='fixed' w='100%' zIndex='10'>
        <Flex color="white" bg="#111324" h="82.6px" alignItems='center' justifyContent='space-around'>
        <Logo />

        <Flex alignItems='center' gap='25px'>
          <Link>Features <ChevronDownIcon w={6} h={6}></ChevronDownIcon></Link>
          <Link>Pricing</Link>
          <Link>Resources</Link>
          <Link>Customers</Link>
          <Link>Gallery</Link>
          <Link>Agencies</Link>
        </Flex>

        <Flex alignItems='center' gap='20px'>
          <Link>Contact us</Link>
          <Link>Log in</Link>
          <Button colorScheme='teal' size='md'><Link>Try it free</Link></Button>
        </Flex>
      </Flex>
      </Box>
    </>
  );
}

export default Navbar;
