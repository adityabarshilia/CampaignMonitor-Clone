import Logo from "../Components/Logo";
import {
  VStack,
  Box,
  Input,
  Text,
  FormControl,
  FormHelperText,
  Link,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link as RouterLink, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

function Login() {

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const {authState, setAuthState} = useContext(AuthContext);

  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
}

const handleSubmit = async(e) => {
  e.preventDefault();
    let req = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    let res = await req.json();

    console.log(res);

    setAuthState({...authState, id: res.id, token: res.token, isAuth: true});
}

if(authState.isAuth && authState.token) return <Navigate to="/home" />

const {email, password} = data;

console.log(authState);

  return (
    <Box
     background="url('https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/signup/signup-light.jpg')"
     bgSize='cover'
     bgPosition='center'
     bgRepeat='no-repeat'
     h='90vh'
     >
      <VStack w="500px"  m="60px auto" spacing="20px">
        <Logo color="black" />
        <Text fontSize="5xl">Log in to your account.</Text>

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
              name='email'
              onChange={handleChange}
              value={email}
              placeholder="Email Address"
            />
            <Input
              h="50px"
              _hover={{ border: "1px", borderColor: "black.100" }}
              border="1px"
              borderColor="black.100"
              type="password"
              name='password'
              onChange={handleChange}
              value={password}
              placeholder="Password"
            />
            <Input
              bg="#72A72F"
              color="white"
              type="submit"
              h="60px"
              cursor="pointer"
              value="Log In"
              onClick={handleSubmit}
              _hover={{bg:'#93cd4c'}}
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
        <Text color="gray.600" fontSize="14px">Don't have an account? <Link _hover={{ textDecoration: 'none', color:"#7453F8" }} as={RouterLink} to='/signup'>Sign up</Link></Text>
      </VStack>
    </Box>
  );
}

export default Login;
