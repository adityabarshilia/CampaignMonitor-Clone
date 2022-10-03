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
    Heading,
    Stack,
    HStack,
  } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
  import NormalButton from "../Components/NormaButton";
  import OutlineButton from "../Components/OutlineButton";
  import TransparentButton from "../Components/TransparentButton";
  
  function Home() {
    return (
      <>
      <Navbar />
        <Flex
          h="619.7px"
          alignItems="center"
          justifyContent="space-around"
          paddingTop="130px"
        >
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
              <NormalButton text="Sign up for free" />
              <OutlineButton text="Learn more" />
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
          marginBottom="80px"
        >
          <Box>
            <Text fontSize="2xl" marginBottom="20px">
              Powering email marketing for businesses around the world.
            </Text>
            <Flex gap={[10,15,30,50, 100, 140]} justifyContent='center' alignItems='center'>
              <Image
                w="88px"
                h="88px"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/ripcurl-2.png?ver=2981664369451352"
              ></Image>
              <Image
                w="88px"
                h="88px"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/digiday-2.png?ver=2981664369451353"
              ></Image>
              <Image
                w="88px"
                h="88px"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/au_red_cross-2.png?ver=2981664369451353"
              ></Image>
              <Image
                w="88px"
                h="88px"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/thegist.png?ver=2981664369451354"
              ></Image>
              <Image
                w="88px"
                h="88px"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/eno-2.png?ver=2981664369451354"
              ></Image>
            </Flex>
          </Box>
        </Flex>
  
        <Text fontSize="4xl" fontWeight="500" marginBottom="80px">
          Drag and drop your way to a beautiful email.
        </Text>
  
        <Flex justifyContent="space-between" marginBottom="80px">
          <Stack textAlign="left" spacing="25px" w="25%" marginLeft="100px">
            <Heading size="xs" fontSize="12px">
              EASE OF USE
            </Heading>
            <Text style={{ marginTop: "13px" }} fontSize="14px">
              Customize any template or design to showcase your brand using the
              simply powerful drag-and-drop email builder—no coding required.
            </Text>
            <Heading size="xs" fontSize="12px">
              COMPLETE CUSTOMIZATION
            </Heading>
            <Text style={{ marginTop: "13px" }} fontSize="14px">
              Display your brand at its best with precise adjustments to every
              aspect of your campaign in the email builder.
            </Text>
            <Heading size="xs" fontSize="12px">
              MOBILE OPTIMIZATION
            </Heading>
            <Text style={{ marginTop: "13px" }} fontSize="14px">
              Every template is responsive to mobile devices so you can send
              knowing your campaigns look great everywhere.
            </Text>
            <Heading size="xs" fontSize="12px">
              TEMPLATE MANAGEMENT FOR TEAMS
            </Heading>
            <Text style={{ marginTop: "13px" }} fontSize="14px">
              Allow your email designer to lock sections of the template so that
              your team only updates what you want them to — ensuring your brand
              style and business critical information all stay intact.
            </Text>
          </Stack>
  
          <Flex h="510px" boxShadow="dark-lg" overflow="hidden">
            <Image
              w="30%"
              h="659.09px"
              src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/editor_sidebar_r.png?ver=298"
            ></Image>
            <Image
              w="70%"
              src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/editor_email_r.png?ver=298"
            ></Image>
          </Flex>
        </Flex>
  
        <VStack spacing="20px">
          <Text fontSize="20px">Eager to see it in action? Take a look.</Text>
          <NormalButton text="Get started for free" />
        </VStack>
  
        <Flex
          alignItems="center"
          justifyContent="space-between"
          m="80px 0"
          bg="#F6F6F7"
        >
          <Box
            w="55%"
            h="700px"
            bgSize="cover"
            bgImage="url('https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/sms-vector-bg-no-dots.svg?ver=298')"
          >
            <Image
              paddingLeft="120px"
              h="100%"
              src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/sms-image-2x.png?ver=298"
              alt="image"
            />
          </Box>
          <Box w="26%" textAlign="left" marginRight="250px">
            <Stack spacing="30px" marginBottom="30px">
              <Text
                style={{ margin: "0" }}
                lineHeight="40px"
                fontSize="35px"
                fontWeight="500"
              >
                SMS is here!
              </Text>
              <Text
                style={{ margin: "0" }}
                lineHeight="40px"
                fontSize="35px"
                fontWeight="500"
              >
                A new way to{" "}
                <Text fontWeight="400" as="i">
                  connect.
                </Text>
              </Text>
              <Text
                style={{ margin: "0" }}
                lineHeight="40px"
                fontSize="35px"
                fontWeight="500"
              >
                A new way to{" "}
                <Text fontWeight="400" as="i">
                  convert.
                </Text>
              </Text>
              <Text fontSize="18px">
                Combining SMS and email marketing is the perfect way to build a
                stronger connection with your audience and maximize ROI. We make
                it easy to get started.
              </Text>
            </Stack>
            <NormalButton text="Learn more" />
          </Box>
        </Flex>
  
        <Flex
          padding="30px 100px 30px 0"
          margin="50px 0"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack>
            <Box boxShadow="dark-lg">
              <Image
                w="280px"
                h="380.29px"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/template-1_comp-r.jpg?ver=298"
              ></Image>
            </Box>
            <Box boxShadow="dark-lg">
              <Image
                w="280px"
                h="380.29px"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/template-2_comp-r.jpg?ver=298"
              ></Image>
            </Box>
            <Box boxShadow="dark-lg">
              <Image
                w="280px"
                h="380.29px"
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/template-3_comp-r.jpg?ver=298"
              ></Image>
            </Box>
          </HStack>
  
          <Box w="30%" textAlign="left">
            <VStack spacing="30px" marginBottom="30px">
              <Text lineHeight="40px" fontSize="35px" fontWeight="500">
                Get started with one of our free templates.
              </Text>
              <Text fontSize="18px">
                Start your email with one of our professionally-designed templates
                to launch targeted campaigns like marketing offers, product
                announcements, newsletters, or event promotions.
              </Text>
            </VStack>
            <OutlineButton text="Build an email" />
          </Box>
        </Flex>
  
        <Box
          h="406.93px"
          m="50px 0"
          bgImage="url('https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/heroes/banner-ripcurl.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Stack color="white" textAlign="left" p="90px" spacing="20px" w="70%">
            <Text fontSize="24px">
              "Campaign Monitor helped us easily create beautiful emails that
              turned our Bombshell wetsuit into a global phenomenon.”
            </Text>
            <Text fontSize="17px" fontWeight="500">
              James Taylor, Global Creative Director
            </Text>
            <TransparentButton text="See Rip Curl's success" />
          </Stack>
        </Box>
  
        <Flex alignItems="center" justifyContent="space-around" m="80px 0">
          <Box w="30%" textAlign="left">
            <VStack spacing="30px" marginBottom="30px">
              <Text lineHeight="40px" fontSize="35px" fontWeight="500">
                Automate email journeys for perfectly timed sends.
              </Text>
              <Text fontSize="18px">
                Most marketers think automation is intimidating. But creating
                customer journeys has never been more approachable than with the
                visual journey designer.
              </Text>
            </VStack>
            <OutlineButton text="Expore automation" />
          </Box>
          <Box w="40%" h="460px">
            <Image
              h="100%"
              src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/resized-5-21/automation-graphic_2.png?ver=298"
              alt="image"
            />
          </Box>
        </Flex>
  
        <Box>
          <Box
            h="406.93px"
            m="50px 0 0 0"
            bgImage="url('https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/thegist-bg.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Stack color="white" textAlign="left" p="90px" spacing="20px" w="75%">
              <Text fontSize="24px">
                “Campaign Monitor helped transform us from a small idea to a real
                company thanks to their user-friendly tools — I honestly could not
                recommend them enough.”
              </Text>
              <Text fontSize="17px" fontWeight="500">
                Ellen Hyslop, Co-Founder of The GIST
              </Text>
              <TransparentButton text="See The GIST's success" />
            </Stack>
          </Box>
  
          <Flex
            h="586.92px"
            bg="linear-gradient(to right,#7856ff 0%,#65b9ff 100%)"
            justifyContent="center"
            alignItems="center"
          >
            <VStack color="white" spacing="30px">
              <Text w="420px" fontWeight="500" fontSize="4xl">
                Get started with Campaign Monitor today
              </Text>
              <Text w="500px" fontSize="18px">
                With our powerful yet easy-to-use tools, it's never been easier to
                make an impact with email marketing.
              </Text>
              <TransparentButton text="Sign up for free" />
            </VStack>
          </Flex>
        </Box>
      <Footer />
      </>
    );
  }
  
  
  export default Home;