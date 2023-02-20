import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink as RouteLink } from 'react-router-dom';

import FdgLogo from '../fdgLogo';
import DesktopSubNav from '../NavBar/DesktopSubNav';

// import { Link } from 'react-router-dom';

// Componente DesktopNav
const DesktopNav = () => {
  const {t} = useTranslation()

  return (
    <Flex  display={{base: "none", md: "flex"}}   align={'center'}>


      <Text ml={6}>
       <RouteLink to="/">
           <FdgLogo />
       </RouteLink>
    </Text>

  <Stack  ml={8} direction={'row'}
   spacing={{sm: '12px',md: '14px', lg:12}} p={2}>
      <Text fontWeight={'bold'}>
        <Link 
       to="/"> {t("home0")}
        </Link>
      </Text>
      <Text fontWeight={'bold'}>
        <Link to="/about">{t("home1")}</Link>
      </Text>
      <Text fontWeight={'bold'}>
        <Link to={'/products'}> {t("home2")}</Link>
      </Text>
      <Text>
      <DesktopSubNav />
      </Text>
      <Text fontWeight={'bold'}>
        <Link  to="/services">{t("home4")}</Link>
      </Text>
      
      
      <Text fontWeight={'bold'}>
        <Link  to="/contact">{t("home5")}</Link>
      </Text>
      </Stack>
    </Flex>
  );
}
export default DesktopNav;