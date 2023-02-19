import { Flex, HStack, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink as RouteLink } from 'react-router-dom';

import FdgLogo from '../fdgLogo';
import DesktopSubNav from '../NavBar/DesktopSubNav';

// import { Link } from 'react-router-dom';

// Componente DesktopNav
const DesktopNav = () => {
  return (
    <Flex display={{base: "none", md: "flex"}}   align={'center'}>


      <Text ml={8}>
       <RouteLink to="/">
           <FdgLogo />
       </RouteLink>
      </Text>

  <Flex>
      <Text ml={8}>
        <Link href="/">Home</Link>
      </Text>
      <Text  ml={8}>
        <Link href="/about">About Us</Link>
      </Text>
      <Text ml={8}>
        <Link href={'/products'}>Products</Link>
      </Text>
      <Text ml={8}>
      <DesktopSubNav />
      </Text>
      <Text ml={8}>
        <Link href="/services">Services</Link>
      </Text>
      <Text ml={8}>
        <Link href="/contact">Contact</Link>
      </Text>
      </Flex>
    </Flex>
  );
}
export default DesktopNav;