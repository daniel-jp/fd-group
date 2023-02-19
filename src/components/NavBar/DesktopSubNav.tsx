import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

// import { Link } from 'react-router-dom';

const DesktopSubNav = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Text  _hover={{
                    cursor: "pointer",
                    color: "gray.400",
                    transform: "scale(1.1)",
                  }} onClick={onOpen}>
      Categorias
      </Text>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          
          <DrawerHeader>Products</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Text>
                <Link href="/products/server">Servers</Link>
              </Text>
              <Text>
                <Link href="/products/devices">Devices</Link>
              </Text> 
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DesktopSubNav;