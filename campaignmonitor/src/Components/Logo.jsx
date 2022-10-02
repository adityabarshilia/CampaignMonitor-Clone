import { Flex, Image, Text } from "@chakra-ui/react";


function Logo({color}){
    return (
        <Flex alignItems='center' h="22px" lineHeight='22px' gap='6px'>
          <Image h='100%' src="https://cdn.iconscout.com/icon/free/png-256/campaign-monitor-3521322-2944741.png" alt="logo" />
          <Text color={color} fontSize='20px' fontWeight='bold'>Campaign Monitor</Text>
        </Flex>
    )
}

export default Logo;
