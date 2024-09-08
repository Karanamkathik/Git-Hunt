import React from "react";
import { Button, Flex,  Stack } from "@chakra-ui/react";
import Brand from "./brand";
import { FaChrome,FaGithub,FaShare } from "react-icons/fa";

 function PageHeader(){
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} pt={'15px'} >
                <Brand />

               <Stack isInline >
                    <Button leftIcon={<FaGithub/>} color={"black"}>View source</Button>
                    <Button leftIcon={<FaChrome/>}  colorScheme="red" variant={'solid'} bg={'red.500'} color={"black"}>Use extension</Button>
                    <Button leftIcon={<FaShare/>} colorScheme="purple" variant={'solid'} bg={'purple.500'} color={"black"}>Share</Button>
                    </Stack>
            </Flex>

    )
}
export default PageHeader;