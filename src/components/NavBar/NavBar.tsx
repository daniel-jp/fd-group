// import {
//     Box,
//     Button,
//     Collapse,
//     color,
//     Flex,
//     Icon,
//     IconButton,
//     Image,
//     Link,
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
//     Stack,
//     Text,
//     useColorModeValue,
//     useDisclosure,
// } from '@chakra-ui/react';
// import { CaretCircleDoubleRight, CaretDown, List, X } from 'phosphor-react';
// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { NavLink as RouteLink } from 'react-router-dom';
import { Box, Flex, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { NavLink as RouteLink } from 'react-router-dom';

import DesktopNav from '../NavBar/DesktopNav';
import MobileNav from '../NavBar/MobileNav';




const Navbar = () => {
 
    
    return (

        <Box
        as="nav"
        position={"fixed"}
      
        transition={"ease-in-out"}
        transitionDuration={"200s"}
        top={0}
        left={0}
        right={0}
        zIndex={1000}>

        <Flex bg={"white"} color={"gray.600"} 
        minH="60px" py={{base: 2}} px={{base: 4}} 
        borderBottom={1} borderStyle="solid" 
        borderColor={"gray.200"} 
        align="center">
            <Flex flex={{base: 1, md: "auto"}}
             ml={{base: -2}} 
             display={{base: "flex", md: "none"}}>
                <MobileNav />
            </Flex>
            <Stack  direction="row" spacing={8} align="center">
                <DesktopNav />
            </Stack>
        </Flex>
        </Box>
        );
    }


export default Navbar;

function useState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}
