import {  Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";

export function GroupTitle({startDate ,endDate}){
   
    if(!startDate || !endDate){
        return null;
    }
    
   const startMoment = moment(startDate);
   const endMoment = moment(endDate);


    return(
        <Text fontSize={'24px'} fontWeight={'700'} color={'black'}>
            {startMoment.fromNow()} {""}
            <Text fontSize={'15px'} fontWeight={'400'} ml={'5px'} as={'span'}>
              {startMoment.format("MMM D ,YYYY")}-{endMoment.format("MMM D ,YYYY")}
            </Text>
        </Text>
    )
}