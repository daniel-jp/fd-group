import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { NavLink as RouteLink } from 'react-router-dom';

import FdgLogo from '../fdgLogo';
import MobileNavItem from '../NavBar/MobileNavItem';
import DesktopSubNav from './DesktopSubNav';


const MobileNav = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex display={{base: "flex", md: "none"}} justifyContent="space-between" alignItems="center" px={4}>
      <IconButton icon={<HamburgerIcon />} variant="ghost" onClick={onOpen} aria-label={''} />
      <RouteLink to="/">
           <FdgLogo/>
       </RouteLink>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> <Text fontFamily={"'Rubik Moonrocks', sans-serif"}>Menu</Text> </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <MobileNavItem to="/">Home</MobileNavItem>
              <MobileNavItem to="/about">About</MobileNavItem>
              <MobileNavItem to="/products">Produtos</MobileNavItem>
              <MobileNavItem> <DesktopSubNav /></MobileNavItem>
              <MobileNavItem to="/services">Services</MobileNavItem>
              <MobileNavItem to="/contact">Contact</MobileNavItem>

            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
export default MobileNav;