import React from "react";
import { Button, Flex, Stack } from "@chakra-ui/react";
import Brand from "./brand";
import { FaChrome, FaGithub, FaShare } from "react-icons/fa";
// import {useWebShare} from "rwebshare";

function PageHeader() {
        const openGithub = () => {
                window.open("https://github.com/Karanamkathik/Git-Hunt", "_blank")
        };
        const handleShare = async () => {
                if (navigator.share) {
                    try {
                        await navigator.share({
                            title: 'Check out this awesome project!',
                            text: 'Here is the link to an amazing project',
                            url: window.location.href, // Sharing the current page URL
                        });
                        console.log('Content shared successfully');
                    } catch (error) {
                        console.error('Error sharing:', error);
                    }
                } else {
                    alert('Sharing is not supported in your browser.');
                }
            };
        return (
                <Flex justifyContent={'space-between'} alignItems={'center'} pt={'15px'} >
                        <Brand />

                        <Stack isInline >
                                <Button
                                        leftIcon={<FaGithub />}
                                        color={"black"}
                                        onClick={openGithub} >
                                        View source
                                </Button>
                                <Button
                                        as="a"
                                        href="https://chrome.google.com/webstore/detail/githunt/khpcnaokfebphakjgdgpinmglconplhp"
                                        target="_blank"
                                        leftIcon={<FaChrome />}
                                        colorScheme="red"
                                        variant={'solid'}
                                        bg={'red.500'}
                                        color={"black"}>

                                        Use extension
                                </Button>
                                <Button
                                        leftIcon={<FaShare />}
                                        colorScheme="purple"
                                        variant={'solid'}
                                        bg={'purple.500'}
                                        color={"black"}
                                        onClick={handleShare}>

                                        Share
                                </Button>
                        </Stack>
                </Flex>

        )
}
export default PageHeader;