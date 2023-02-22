import '@fontsource/raleway/700.css';

import { Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink as RouteLink } from 'react-router-dom';

import FdgLogo from '../fdgLogo';
import DesktopSubNav from '../NavBar/DesktopSubNav';

// import { Link } from 'react-router-dom';

// Componente DesktopNav
const DesktopNav = () => {
  const {t} = useTranslation();
  const {onOpen} = useDisclosure();


  return (
    <Flex fontFamily={"'Inter', sans-serif"} display={{base: "none", md: "flex"}}

      align={'center'}>


      <Text ml={6}>
        <RouteLink to="/">
          <FdgLogo />
        </RouteLink>
      </Text>

      <Stack ml={8} fontWeight={'bold'} direction={'row'}
        spacing={{sm: '12px', md: '14px', lg: 8}} p={2}>
        <Text _hover={{color: "red"}} >
          <Link to="/"> {t("home0")}</Link>
        </Text>
        <Text _hover={{color: "red.600", }} >
          <Link to="/about">{t("home1")}</Link>
        </Text>
        <Text _hover={{color: "red.600", }} >
          <Link to={'/products'}> {t("home2")}</Link>
        </Text>
        <Text _hover={{color: "red.600", }} >
          <DesktopSubNav />
        </Text>
        <Text _hover={{color: "red.600", }} >
          <Link to="/services">{t("home4")}</Link>
        </Text>
        <Text _hover={{color: "red.600", }} >
          <Link to="/contact">{t("home5")}</Link>
        </Text>
      </Stack>
    </Flex>
  );
}
export default DesktopNav;