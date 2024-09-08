import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import {  GoIssueOpened, GoRepoForked, GoStar } from "react-icons/go";

export function Repo(props) {

    const { isListView = false, repo } = props;

    return (
        <Flex borderWidth={1} bg={"white"} padding={'15px'} margin={'15px 0px'} rounded={'5px'}>

            <Flex flex={1} flexDir="column">
                {!isListView && (
                    <Flex mb={'15px'} as="a" href={repo.owner.html_url}>
                        <Image

                            src={repo.owner.avatar_url}
                            w={'35px'}
                            h={'35px'}
                            rounded={'5px'}

                        />
                        <Box ml={'10px'}>
                            <Heading fontSize={'16px'}>{repo.owner.login}</Heading>
                            <Text fontSize={'13px'}>view profile</Text>
                        </Box>
                    </Flex>
                )}

                {/* <Box mb={'15px'}>
                <Box mb={'10px'}>
                    <Heading fontSize={'19px'} as={"a"} href='https://github.com/Karanamkathik/codepen-clone' target='_blank' color={'purple.700'}>
                        git hunt
                    </Heading>
                    <Text fontSize={'14px'} color={'gray.600'}>Built by &middot; <Link fontWeight={'bold'} href="https://github.com/Karanamkathik" target="_blank">karanam</Link>&middot; sep-01-2024</Text>
                </Box>
                <Text fontSize={'14px'} color={'gray.900'}>most starred repo</Text>
            </Box> */}


                <Box mb="15px" flex={1}>
                    <Box mb="10px">
                        <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
                            {isListView && (
                                <>
                                    <Text as="a" href={repo.owner.html_url} target="_blank">
                                        {repo.owner.login}
                                    </Text>
                                    &nbsp;/&nbsp;
                                </>
                            )}
                            <Text as="a" href={repo.html_url} target="_blank">
                                {repo.name}
                            </Text>
                        </Flex>
                        <Text fontSize="14px" color="gray.600">
                            <Box as={"span"} d={["none", "none", "inline", "inline"]}>
                                Built by &middot;{" "}
                                <Link
                                    fontWeight={600}
                                    href={repo.owner.html_url}
                                    target="_blank"
                                >
                                    {repo.owner.login}
                                </Link>{" "}
                                &middot;
                            </Box>{" "}
                            {moment(repo.created_at).format("MMMM D, YYYY")}
                        </Text>
                    </Box>

                    <Text fontSize="14px" color="gray.900">
                        {repo.description}
                    </Text>
                </Box>

                <Stack isInline>
                    <Button a={'a'} cursor={'pointer'}  href={`${repo.html_url}/stargazers`} leftIcon={<GoStar />} variant={'link'} fontSize={'14px'} iconSpacing={'4px'} color={"black"}>
                    {repo.stargazers_count}
                    </Button>
                    <Button a={'a'} cursor={'pointer'}  href={`${repo.html_url}/network/members`}  leftIcon={<GoRepoForked />} variant={'link'} fontSize={'14px'} iconSpacing={'4px'} color={"black"}>
                    {repo.forks_count}
                    </Button>
                    <Button a={'a'} cursor={'pointer'} href={`${repo.html_url}/issues`} leftIcon={<GoIssueOpened />} variant={'link'} fontSize={'14px'} iconSpacing={'4px'} color={"black"}>
                    {repo.open_issues_count}
                    </Button>
                </Stack>
            </Flex>
            {isListView && (
                <Image
                    src={repo.owner.avatar_url}
                    w={"105px"}
                    h={"105px"}
                    rounded="100%"
                />
            )}
        </Flex>
    )
}