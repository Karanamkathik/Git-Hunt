import React from "react";
import { Box, Button, Flex, Heading, Image,  Text } from "@chakra-ui/react";

function Brand(){
    return(
        <Flex alignItems={'center'}>
        <Image src="/githunt.png" maxWidth={'60px'} maxHeight={'60px'}/>
        <Box ml={'10px'}>
          <Heading fontSize={'24px'}>Git Hunt</Heading>
          <Text color={'gray.600'}>Most starred projects in github</Text>
        </Box>

      </Flex>
    )
}

export default Brand;