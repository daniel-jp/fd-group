import { Box, Flex, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink as RouteLink } from 'react-router-dom';

import DesktopNav from '../NavBar/DesktopNav';
import MobileNav from '../NavBar/MobileNav';
import fr from '/assets/flag/fr.png';
import pt from '/assets/flag/pt.png';
import uk from '/assets/flag/uk.png';

const languageOptions = [
    {
        name: "En",
        value: "en",
        flag: uk,
    },

    {
        name: "Pt",
        value: "pt",
        flag: pt
    },

    {
        name: "Fr",
        value: "fr",
        flag: fr
    }

]

const Navbar = () => {

    const {t, i18n} = useTranslation();

    return (

        <Box
            position={"fixed"}
            transition={"ease-in-out"}
            transitionDuration={"200s"}
            top={0}
            left={0}
            right={0}
            zIndex={1000}>

            <Flex color={"gray.600"} minH="60px" 
                borderBottom={1} borderStyle="solid" align={'center'}
                borderColor={"gray.200"}
                justify={'space-between'} 
                bg={useColorModeValue("gray.800", "white")}
                py={{base: 2}}
                px={{base: 4, md: 8}}>

                <Flex flex={{base: 1, md: "auto"}}
                    ml={{base: -2}}
                    display={{base: "flex", md: "none"}}>
                    <MobileNav />
                </Flex>
                <Stack direction="row" spacing={8} align="center">
                    <DesktopNav />
                </Stack>


                <Stack p={8} direction={"row"}>

                    {languageOptions.map((languageOption) => (
                        <Text
                          
                            key={`${languageOption.value}`}
                            bg={"gray.800"}
                        
                            borderRadius={"30px"}
                            display={'block'} textAlign={'center'}
                            onClick={() => {
                                i18n.changeLanguage(languageOption.value)
                            }}
                            w={5} h={5} 
                         

                            color={"white"}
                            fontSize={"12px"}
                            fontWeight={"bord"}
                            _hover={{
                                cursor:"pointer",
                                bg: "gray.800",
                            }}>
                                
                            <Image w={5} h={5} src={languageOption.flag} alt={languageOption.name} />
                           
                            <span style={{
                                fontWeight: i18n.language === languageOption.value ? "bord" : "normal",
                                color: i18n.language === languageOption.value ? "red" : "white",}}>
                                {languageOption.name}
                            </span>
                        </Text>

                    ))}

                </Stack>
            </Flex>

        </Box>
    );
}


export default Navbar;

function useState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}
