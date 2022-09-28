import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {
  Flex,
  Box,
  Image,
  Text,
  Link,
  Button,
  VStack,
  ButtonGroup,
  color,
} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Flex h="619.7px" alignItems="center" justifyContent="space-around" paddingTop='130px'>
        <Box w="39%" textAlign="left">
          <VStack spacing="30px" marginBottom="30px">
            <Text lineHeight="60px" fontSize="55px" fontWeight="500">
              Drive results with unforgettable email marketing.
            </Text>
            <Text fontSize="18px">
              Connecting with your audience has never been easier with Campaign
              Monitor’s straightforward email marketing and automation tools.
            </Text>
          </VStack>

          <ButtonGroup gap="4" w="100%">
            <Button w="257.39px" h="60.93px" colorScheme="purple" size="lg">
              Sign up for free
            </Button>
            <Button
              w="257.39px"
              h="60.93px"
              colorScheme="purple"
              variant="outline"
              size="lg"
              _hover={{ bg: "#6B46C1", color: "white" }}
            >
              Learn more
            </Button>
          </ButtonGroup>
        </Box>
        <Box w="40%" h="531px">
          <Image
            h="100%"
            src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/2021_cm_web_homepage_hero-stackofemails.png?ver=298"
            alt="image"
          />
        </Box>
      </Flex>

      <Flex
        h="306.11px"
        bg="#F6F6F7"
        alignItems="center"
        justifyContent="center"
        marginBottom='80px'
      >
        <Box>
          <Text fontSize="2xl" marginBottom='20px'>
            Powering email marketing for businesses around the world.
          </Text>
          <Flex gap='140px'>
            <Image w='88px' h='88px' src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/ripcurl-2.png?ver=2981664369451352"></Image>
            <Image w='88px' h='88px' src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/digiday-2.png?ver=2981664369451353"></Image>
            <Image w='88px' h='88px' src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/au_red_cross-2.png?ver=2981664369451353"></Image>
            <Image w='88px' h='88px' src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/thegist.png?ver=2981664369451354"></Image>
            <Image w='88px' h='88px' src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/eno-2.png?ver=2981664369451354"></Image>
          </Flex>
        </Box>
      </Flex>

      <Text fontSize='4xl' fontWeight='500' marginBottom='80px'>Drag and drop your way to a beautiful email.</Text>

      <Footer />
    </div>
  );
}

export default App;
