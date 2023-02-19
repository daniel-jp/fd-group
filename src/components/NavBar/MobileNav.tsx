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
  useDisclosure,
} from '@chakra-ui/react';
import { List } from 'phosphor-react';
import { Link } from 'react-router-dom';
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
           <FdgLogo />
       </RouteLink>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <MobileNavItem href="/">Home</MobileNavItem>
              <MobileNavItem href="/about">About</MobileNavItem>
              <MobileNavItem href="/products">Produtos</MobileNavItem>
              <MobileNavItem> <DesktopSubNav /></MobileNavItem>
              <MobileNavItem href="/services">Services</MobileNavItem>
              <MobileNavItem href="/contact">Contact</MobileNavItem>

            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
export default MobileNav;