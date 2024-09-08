import { Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Select, Stack } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import languages from "../data/language.json"
import { FaCalendar, FaList, FaTable } from "react-icons/fa";


export function Filters(props) {
  const { onViewChange,
    viewType,
    onDateJumpChange,
    dateJump,
    language,
    onLanguageChange
  } = props;
  // const [viewType, onViewChange] = useState("grid");
  // useEffect(() => {
  //   onViewChange(viewType);
  // }, [viewType]

  // )
  return (
    <Stack isInline >
      <Select bg={'white'} color={'black'} value={language} onChange={(e) => onLanguageChange(e.target.value)}>
        {languages.map((language) => (
          <option key={language.value} value={language.value} >
            {language.label}
          </option>
        ))}
      </Select>
      <Menu >
        <MenuButton w={'250px'} as={Button} color={'black'} bg={'white'} borderWidth={'1'} px={'15px'} leftIcon={<FaCalendar />}>
          <Icon name="calander" mr={'3'} />
          <Box as="span" textTransform={'captalize'}>{dateJump}</Box>
        </MenuButton>
        <MenuList>

          <MenuItem onClick={() => onDateJumpChange('day')}>Daily</MenuItem>
          <MenuItem onClick={() => onDateJumpChange('week')}>Weakly</MenuItem>

          <MenuItem onClick={() => onDateJumpChange('month')}>Monthly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange('year')}>Yearly</MenuItem>
        </MenuList>
      </Menu>
      <Stack isInline spacing={1} borderWidth={1}>
        <Button
          onClick={() => onViewChange("grid")}
          leftIcon={<FaTable />}
          color={"black"}
          bg={viewType === 'grid' ? 'gray.200' : 'white'}>
          Grid
        </Button>
        <Button
          onClick={() => onViewChange("list")}
          leftIcon={<FaList />}
          color={'black'}
          bg={viewType === 'list' ? 'gray.200' : 'white'}>
          List
        </Button>

      </Stack>

    </Stack>
  )
}