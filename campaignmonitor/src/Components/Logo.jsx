import { Flex, Image, Text } from "@chakra-ui/react";


function Logo(){
    return (
        <Flex alignItems='center' h="22px" lineHeight='22px' gap='6px'>
          <Image h='100%' src="https://cdn.iconscout.com/icon/free/png-256/campaign-monitor-3521322-2944741.png" alt="logo" />
          <Text color='white' fontSize='20px' paddingBottom='3px' fontWeight='bold'>Campaign Monitor</Text>
        </Flex>
    )
}

export default Logo;
