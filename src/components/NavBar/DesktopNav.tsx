import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import DesktopSubNav from '../NavBar/DesktopSubNav';

// Componente DesktopNav
const DesktopNav = () => {
  return (
    <Flex display={{base: "none", md: "flex"}} ml={10}>
      <Text>
        <Link to="/">Home</Link>
      </Text>
      <Text ml={8}>
        <Link to="/about">About Us</Link>
      </Text>
      <Text ml={8}>
        <Link to="/produtos">Produtos</Link>
      </Text>
      <Text ml={8}>
        <Link to="/services">Services</Link>
      </Text>
      <Text ml={8}>
        <Link to="/contact">Contact</Link>
      </Text>
      <DesktopSubNav />
    </Flex>
  );
}
export default DesktopNav;