import {
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Divider,
  HStack,
  Text,
  Center,
} from "@chakra-ui/react";
import Logo from "./Logo";

// import { Link as ReactRouterLink } from 'react-router-dom';

function Footer() {
  const style = {
    border: "0",
    paddingLeft: "60px",
    paddingRight: "0px",
  };

  return (
    <>
      <Box h="700px" padding="60px 85px" bg="#111324" color="white">
        <Flex justifyContent="space-between">
          <Logo />
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr border="none">
                  <Th style={style}>PRODUCT</Th>
                  <Th style={style}>EMAIL MARKETING</Th>
                  <Th style={style}>COMMUNITY</Th>
                  <Th style={style}>COMPANY</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td style={style}>Features</Td>
                  <Td style={style}>Agencies</Td>
                  <Td style={style}>Get Started</Td>
                  <Td style={style}>About us</Td>
                </Tr>
                <Tr>
                  <Td style={style}>Pricing</Td>
                  <Td style={style}>Travel</Td>
                  <Td style={style}>Customers</Td>
                  <Td style={style}>Leadership</Td>
                </Tr>
                <Tr>
                  <Td style={style}>Integrations</Td>
                  <Td style={style}>Retail</Td>
                  <Td style={style}>Resources</Td>
                  <Td style={style}>Trust Center</Td>
                </Tr>
                <Tr>
                  <Td style={style}>API</Td>
                  <Td style={style}>Nonprofit</Td>
                  <Td style={style}>Blog</Td>
                  <Td style={style}>Careers</Td>
                </Tr>
                <Tr>
                  <Td style={style}>Email Templates</Td>
                  <Td style={style}>Entertainment</Td>
                  <Td style={style}>Email Academy</Td>
                  <Td style={style}>In the news</Td>
                </Tr>
                <Tr>
                  <Td style={style}></Td>
                  <Td style={style}>Publishing</Td>
                  <Td style={style}>Support</Td>
                  <Td style={style}>Modern Slavery Statement</Td>
                </Tr>
                <Tr>
                  <Td style={style}></Td>
                  <Td paddingBottom="35px" style={style}>
                    Technology
                  </Td>
                  <Td style={style}></Td>
                  <Td style={style}>
                    <Image src="https://consent.trustarc.com/asset/trustarc_cookiepreferences.png"></Image>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>

        <Divider margin="45px 0" />

        <Flex justifyContent="flex-end" gap="50px" marginBottom="70px">
          <HStack spacing="20px">
            <Image
              w="20px"
              h="20px"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            ></Image>
            <Image
              w="20px"
              h="20px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            ></Image>
            <Image
              w="20px"
              h="20px"
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            ></Image>
            <Image
              w="20px"
              h="20px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            ></Image>
          </HStack>
          <Text fontSize="12px">
            Terms & Policies&nbsp;&nbsp;|&nbsp;&nbsp;Do not sell my personal
            information&nbsp;&nbsp;©&nbsp;&nbsp;2022 All Rights Reserved
          </Text>
        </Flex>

        <Text fontSize="12px" marginBottom="25px">
          Campaign Monitor is part of the CM Group family of brands.
        </Text>

        <Center>
          <Image
            w="107.95px"
            h="48px"
            src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/global/footer/cmg_logo.svg?ver=16637"
          ></Image>
        </Center>
      </Box>
    </>
  );
}

export default Footer;
