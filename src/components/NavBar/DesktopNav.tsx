import '@fontsource/raleway/700.css';

import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink as RouteLink } from 'react-router-dom';

import FdgLogo from '../fdgLogo';
import DesktopSubNav from '../NavBar/DesktopSubNav';

const DesktopNav = () => {
  const {t} = useTranslation();

  const [activeLink, setActiveLink] = useState<string | null>(null);
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  
  return (
    <Flex fontFamily={"'Inter', sans-serif"} display={{base: "none", md: "flex"}} align={'center'}>
      <Text ml={6}>
        <RouteLink to="/">
          <FdgLogo />
        </RouteLink>
      </Text>

      <Stack ml={8} fontWeight={'bold'} direction={'row'}
        spacing={{sm: '12px', md: '14px', lg: 8}} p={2}>

        <Text> 
          <Link to={"/"}  _activeLink={{color: "red.600"}} as={RouteLink}  
           onClick={() => setActiveLink("/")} _hover={{  textDecoration: "none",color:"red.600"}}
           color={"gray.400"}>  
               {t("home0")} 
            </Link>
        </Text>
        
        <Text>
          <Link to={'/about'}  _activeLink={{color: "red.600"}} as={RouteLink} 
          onClick={() => setActiveLink("/about")} color={"gray.400"}
          _hover={{ textDecoration: "none", color:"red.600"}}>{t("home1")}</Link>
        </Text>
        <Text>
          <Link to={'/products'} _activeLink={{color: "red.600"}} as={RouteLink} 
          onClick={() => setActiveLink("/products")} color={"gray.400"}
          _hover={{ textDecoration: "none", color:"red.600"}}> {t("home2")}</Link>
        </Text>
        <Text as={RouteLink}
        onClick={() => setActiveLink("#")} color={"gray.400"}
        _hover={{textDecoration: "none", color: "red.600"}} to={'#'} > 
          <DesktopSubNav />
        </Text>
        <Text> 
          <Link to="/services"   _activeLink={{color: "red.600"}} as={RouteLink} 
          onClick={() => setActiveLink("/services")} color={"gray.400"}
          _hover={{ textDecoration: "none", color:"red.600"}}>{t("home4")}</Link>
        </Text>
        <Text>
          <Link to="/contact"   _activeLink={{color: "red.600"}} as={RouteLink} 
          onClick={() => setActiveLink("/contact")} color={"gray.400"}
          _hover={{ textDecoration: "none", color:"red.600"}}>{t("home5")}</Link>
        </Text>
      </Stack>
    </Flex>
  );
}
export default DesktopNav;

