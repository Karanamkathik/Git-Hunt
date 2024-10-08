import React, { useState, useEffect } from "react";
import PageHeader from "./components/page-header";
import { Box, Button, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { GroupTitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";
import moment from "moment";
import { useFetch } from "use-http";
import { PageLoader } from "./components/page-loader";

function transformFilters({ startDate, endDate, language }) {
    const transformedFilters = {};

    const languageQuery = language ? `language:${language} ` : "";
    const dateQuery = `created:${startDate}..${endDate}`;

    transformedFilters.q = languageQuery + dateQuery;
    transformedFilters.sort = "stars";
    transformedFilters.order = "desc";

    return transformedFilters;
}

export function Feed() {

    const { loading, error, get } = useFetch("https://api.github.com");


    const [viewType, setViewType] = useState("grid");
    const [dateJump, setDateJump] = useState("day")
    const [language, setLanguage] = useState();

    const [repositories, setRepositories] = useState([]);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState(moment().subtract(1, "day").format());

    useEffect(() => {
        const endDate = moment().subtract(1, "day").format();
        const startDate = moment(endDate).subtract(1, dateJump).format();


        setEndDate(endDate);
        setStartDate(startDate);

        setRepositories([]);
    }, [dateJump, language]);

    useEffect(() => {
        if (!startDate) {
            return;
        }

        const filters = transformFilters({ language, startDate, endDate });
        const filtersQuery = new URLSearchParams(filters).toString();

        get(`/search/repositories?${filtersQuery}`).then((repo) => {
            setRepositories([
                ...repositories,
                {
                    startDate,
                    endDate,
                    items: repo.items,
                },
            ]);
        });
    }, [startDate]);


    return (
        <Box maxWidth={'1200px'} mr={'50px'} ml={'35px'} px={'15px'} >
            <PageHeader />

            {repositories.length === 0 && loading && <PageLoader />}

            <Flex alignItems={'center'} justify={'space-between'}>
                <GroupTitle
                    startDate={repositories?.[0]?.startDate}
                    endDate={repositories?.[0]?.endDate} />
                <Filters
                    viewType={viewType}
                    onViewChange={setViewType}
                    dateJump={dateJump}
                    onDateJumpChange={setDateJump}
                    language={language}
                    onLanguageChange={setLanguage}
                />
            </Flex>

            {repositories.map((repoGroup, counter, number) => {
                const groupTitle = counter > 0 && (

                    <GroupTitle

                        startDate={repoGroup.startDate}
                        endDate={repoGroup.endDate}

                    />

                )
                return (



                    <Box>
                        {groupTitle}

                        <SimpleGrid columns={viewType === 'list' ? 1 : 3} spacing={'10px'}>

                            {repoGroup.items.map(repo => <Repo isListView={viewType === 'list'} repo={repo} />)}



                        </SimpleGrid>
                    </Box>
                );
            })}


            <Flex alignItems={'center'} justifyContent={'center'} >
                <Button

                    isLoading={loading}
                    onClick={() => {
                        setEndDate(startDate);
                        setStartDate(moment(startDate).subtract(1, dateJump).format());
                    }}
                    colorScheme="blue"
                    variant={'solid'}
                    bg={'blue.500'}>

                    Load Next Group

                </Button>
            </Flex>
        </Box>
    )
}