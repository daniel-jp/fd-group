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

import MobileNavItem from '../NavBar/MobileNavItem';


const MobileNav = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex display={{base: "flex", md: "none"}} justifyContent="space-between" alignItems="center" px={4}>
      <IconButton icon={<HamburgerIcon />} variant="ghost" onClick={onOpen} aria-label={''} />
      <Link to="/">Logo</Link>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <MobileNavItem href="/">Home</MobileNavItem>
              <MobileNavItem href="/produtos">Produtos</MobileNavItem>
              <MobileNavItem href="/produtos/server">Server</MobileNavItem>
              <MobileNavItem href="/produtos/devices">Devices</MobileNavItem>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
export default MobileNav;