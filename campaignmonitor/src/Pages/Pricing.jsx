import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { CheckIcon } from "@chakra-ui/icons";

import {
  Flex,
  Box,
  Text,
  Button,
  VStack,
  ButtonGroup,
  Heading,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NormalButton from "../Components/NormaButton";

import { useState } from "react";

const ChangingSlider = ({ handleChangeSlider, value }) => {
  return (
    <Slider
      onChange={(e) => handleChangeSlider(e)}
      value={value}
      w="60%"
      defaultValue={0}
      min={0}
      max={50000}
    >
      <SliderTrack bg="lightgrey">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="#7856FF" />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
};

// import { useRef } from "react";

function Pricing() {
  // const ChangingInput = ({ handleChangeInput, value }) => {
  //   return (
  //     <Input
  //       size="lg"
  //       w="120px"
  //       h="45px"
  //       bg="#7856FF"
  //       borderRadius="0"
  //       type="number"
  //       textAlign="center"
  //       color="white"
  //       fontSize="18px"
  //       fontWeight="bolder"
  //       value={value}
  //       onChange={handleChangeInput}
  //     ></Input>
  //   );
  // };

  const [value, setValue] = useState(0);

  //   const inputRef = useRef(null);

  const handleChangeSlider = (e) => {
    setValue(e);
  };
  const handleChangeInput = (e) => {
    // inputRef.current.focus();
    setValue(e.target.value);
  };

  return (
    <>
      <Navbar />
      <VStack pt="150px" spacing="20px">
        <Heading size="3xl" fontWeight="500">
          Simple, straightforward pricing.
        </Heading>
        <Text color="#8A8B9A" fontSize="18px" w="68%">
          Choose the plan that's right for your brand. Whether you're just
          getting started with email marketing or you're personalizing every
          campaign, there's a plan for you.
        </Text>
        <ButtonGroup gap="4">
          <NormalButton text="Get started for free" />
          <Button
            w="257.39px"
            h="60.93px"
            bg="#54D0DC"
            _hover={{ bg: "#6bd7e1" }}
            size="lg"
            color="black"
          >
            High volume pricing
          </Button>
        </ButtonGroup>
      </VStack>

      <Text fontSize="20px" fontWeight="bolder" m="100px 0">
        With your list of {/* {ChangingInput(handleChangeInput, value)} */}
        <Input
          size="lg"
          w="120px"
          h="45px"
          bg="#7856FF"
          borderRadius="0"
          type="number"
          textAlign="center"
          color="white"
          fontSize="18px"
          fontWeight="bolder"
          value={value}
          onChange={handleChangeInput}
        ></Input>{" "}
        {/* <ChangingInput value={value} handleChangeInput={handleChangeInput} />{" "} */}
        contacts, we've got the right plan for you.
      </Text>

      <Flex justifyContent="center" alignItems="center" gap="20px">
        <ChangingSlider handleChangeSlider={handleChangeSlider} value={value} />
        {/* <Slider
          onChange={handleChangeSlider}
          value={value}
          w="60%"
          defaultValue={0}
          min={0}
          max={50000}
        >
          <SliderTrack bg="lightgrey">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="#7856FF" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider> */}
        <Text fontSize="13.5px" fontWeight="bold" color="#7856FF">
          MORE THAN 50000
        </Text>
      </Flex>

      <Flex
        bg="#F2F2F3"
        m="100px 0 50px 0"
        justifyContent="center"
        alignItems="center"
        p="30px 0"
        gap="20px"
      >
        <VStack boxShadow="lg" bg="white" p="20px 15px">
          <Text fontSize="4xl" color="#886AFF">
            Basic
          </Text>
          <Text fontSize="13px" color="#8A9FC7" w="80%">
            Get started quickly with our core features.
          </Text>
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              paddingTop="17px"
              fontSize="24px"
              verticalAlign="top"
              as="span"
            >
              $
            </Text>
            <Text fontWeight="bolder" as="span" fontSize="6xl">
              299
            </Text>
            /month
          </Text>
          <NormalButton text="Sign up" />
        </VStack>
        <VStack boxShadow="lg" bg="white" p="20px 15px">
          <Text fontSize="4xl" color="#886AFF">
            Unlimited
          </Text>
          <Text fontSize="13px" color="#8A9FC7" w="80%">
            Unlimited emails for the frequent sender.
          </Text>
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              paddingTop="17px"
              fontSize="24px"
              verticalAlign="top"
              as="span"
            >
              $
            </Text>
            <Text fontWeight="bolder" as="span" fontSize="6xl">
              299
            </Text>
            /month
          </Text>
          <NormalButton text="Sign up" />
        </VStack>
        <VStack boxShadow="lg" bg="white" p="20px 15px">
          <Text fontSize="4xl" color="#886AFF">
            Premier
          </Text>
          <Text fontSize="13px" color="#8A9FC7" w="80%">
            Advanced segmentation plus premier support.
          </Text>
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              paddingTop="17px"
              fontSize="24px"
              verticalAlign="top"
              as="span"
            >
              $
            </Text>
            <Text fontWeight="bolder" as="span" fontSize="6xl">
              299
            </Text>
            /month
          </Text>
          <NormalButton text="Sign up" />
        </VStack>
      </Flex>

      <TableContainer m="80px 0">
        <Table w="75%" ml="50px" variant="striped" colorScheme="gray">
          <Tbody>
            <Tr>
              <Th
                textTransform="capitalize"
                fontSize="28px"
                p="60px 0 30px 0"
                fontWeight="bold"
              >
                Channels
              </Th>
            </Tr>

            <Tr>
              <Td>Email</Td>
              <Td>2,500</Td>
              <Td textAlign="center">Unlimited</Td>
              <Td textAlign="center">Unlimited</Td>
            </Tr>

            <Tr>
              <Th
                textTransform="capitalize"
                fontSize="28px"
                p="60px 0 30px 0"
                fontWeight="bold"
              >
                Email account settings
              </Th>
            </Tr>

            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Th
                textTransform="capitalize"
                fontSize="28px"
                p="60px 0 30px 0"
                fontWeight="bold"
              >
                Core email features
              </Th>
            </Tr>

            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>

            <Tr>
              <Th
                textTransform="capitalize"
                fontSize="28px"
                p="60px 0 30px 0"
                fontWeight="bold"
              >
                Advanced email features
              </Th>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
            <Tr>
              <Td>Multiple users</Td>
              <Td>
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
              <Td textAlign="center">
                <CheckIcon w={6} h={6} color="#00CFDD" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Text fontSize="4xl" m="50px 0">
        Frequently Asked Questions
      </Text>

      <Grid w="80%" m="auto" mb='100px' templateColumns="repeat(3, 1fr)" rowGap='40px' columnGap='30px'>
        <GridItem w="100%" h="auto">
          <Stack textAlign='left'>
            <Text>What if I go over my plan’s limits?</Text>
            <Text fontSize='13px'>
              If you send above your limits or your subscriber list grows, we’ll
              notify you and you'll have an option to upgrade or pay for the
              additional emails.
            </Text>
          </Stack>
        </GridItem>
        <GridItem w="100%" h="auto">
          <Stack textAlign='left'>
            <Text>What if I go over my plan’s limits?</Text>
            <Text fontSize='13px'>
              If you send above your limits or your subscriber list grows, we’ll
              notify you and you'll have an option to upgrade or pay for the
              additional emails.
            </Text>
          </Stack>
        </GridItem>
        <GridItem w="100%" h="auto">
          <Stack textAlign='left'>
            <Text>What if I go over my plan’s limits?</Text>
            <Text fontSize='13px'>
              If you send above your limits or your subscriber list grows, we’ll
              notify you and you'll have an option to upgrade or pay for the
              additional emails.
            </Text>
          </Stack>
        </GridItem>
        <GridItem w="100%" h="auto">
          <Stack textAlign='left'>
            <Text>What if I go over my plan’s limits?</Text>
            <Text fontSize='13px'>
              If you send above your limits or your subscriber list grows, we’ll
              notify you and you'll have an option to upgrade or pay for the
              additional emails.
            </Text>
          </Stack>
        </GridItem>
        <GridItem w="100%" h="auto">
          <Stack textAlign='left'>
            <Text>What if I go over my plan’s limits?</Text>
            <Text fontSize='13px'>
              If you send above your limits or your subscriber list grows, we’ll
              notify you and you'll have an option to upgrade or pay for the
              additional emails.
            </Text>
          </Stack>
        </GridItem>
        <GridItem w="100%" h="auto">
          <Stack textAlign='left'>
            <Text>What if I go over my plan’s limits?</Text>
            <Text fontSize='13px'>
              If you send above your limits or your subscriber list grows, we’ll
              notify you and you'll have an option to upgrade or pay for the
              additional emails.
            </Text>
          </Stack>
        </GridItem>
        <GridItem w="100%" h="auto">
          <Stack textAlign='left'>
            <Text>What if I go over my plan’s limits?</Text>
            <Text fontSize='13px'>
              If you send above your limits or your subscriber list grows, we’ll
              notify you and you'll have an option to upgrade or pay for the
              additional emails.
            </Text>
          </Stack>
        </GridItem>
        <GridItem w="100%" h="auto">
          <Stack textAlign='left'>
            <Text>What if I go over my plan’s limits?</Text>
            <Text fontSize='13px'>
              If you send above your limits or your subscriber list grows, we’ll
              notify you and you'll have an option to upgrade or pay for the
              additional emails.
            </Text>
          </Stack>
        </GridItem>
        <GridItem w="100%" h="auto">
          <Stack textAlign='left'>
            <Text>What if I go over my plan’s limits?</Text>
            <Text fontSize='13px'>
              If you send above your limits or your subscriber list grows, we’ll
              notify you and you'll have an option to upgrade or pay for the
              additional emails.
            </Text>
          </Stack>
        </GridItem>
      </Grid>

      <Footer />
    </>
  );
}

export default Pricing;
