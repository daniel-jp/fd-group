import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const DesktopSubNav = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Text ml={8} {...btnRef} onClick={onOpen}>
        Categorias
      </Text>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} {...btnRef} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Categorias</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Text>
                <Link to="/produtos/server">Servers</Link>
              </Text>
              <Text>
                <Link to="/produtos/devices">Devices</Link>
              </Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DesktopSubNav;