import Logo from "../Components/Logo";
import {
  VStack,
  Box,
  Input,
  Text,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";

function Signup() {
  return (
    <Box
     background="url('https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/signup/signup-light.jpg')"
     bgSize='cover'
     bgPosition='center'
     bgRepeat='no-repeat'
     >
      <VStack w="500px"  m="60px auto" spacing="20px">
        <Logo color="black" />
        <Text fontSize="6xl">Sign up for free.</Text>
        <Text fontSize="18px" p="0 20px">
          Start sending beautifully designed emails today with our drag-and-drop
          editor and library of free templates.
        </Text>

        <FormControl
          w="400px"
          p="35px"
          boxShadow="dark-lg"
          borderRadius="5px"
          gap="10px"
          bg='white'
        >
          <VStack spacing="20px">
            <Input
              h="50px"
              _hover={{ border: "1px", borderColor: "black.100" }}
              border="1px"
              borderColor="black.100"
              type="email"
              placeholder="Full Name"
            />
            <Input
              h="50px"
              _hover={{ border: "1px", borderColor: "black.100" }}
              border="1px"
              borderColor="black.100"
              type="email"
              placeholder="Company Name"
            />
            <Input
              h="50px"
              _hover={{ border: "1px", borderColor: "black.100" }}
              border="1px"
              borderColor="black.100"
              type="email"
              placeholder="Email Address"
            />
            <Input
              h="50px"
              _hover={{ border: "1px", borderColor: "black.100" }}
              border="1px"
              borderColor="black.100"
              type="email"
              placeholder="Password"
            />
            <Input
              bg="#7856FF"
              color="white"
              type="submit"
              h="60px"
              cursor="pointer"
              value="Create my account"
              _hover={{bg:'#704dff'}}
            />
            <FormHelperText fontSize="11px" color="gray">
              To find out more about how we're using the information you're
              giving us, please review our{" "}
              <Text as="span" color="#7856FF">
                privacy statement.
              </Text>
            </FormHelperText>
          </VStack>
        </FormControl>
        <Text color="gray.600" fontSize="12px">Already have an account? Log in.</Text>
        <Text color="gray.600" w='350px' fontSize="12px">
          By signing up, you agree to our Terms of Use and Anti-spam Policy.
        </Text>
      </VStack>
    </Box>
  );
}

export default Signup;
