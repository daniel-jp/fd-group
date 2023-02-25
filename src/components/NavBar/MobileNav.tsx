import '@fontsource/inter/';

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
import { useTranslation } from 'react-i18next';
import { NavLink as RouteLink } from 'react-router-dom';

import FdgLogo from '../fdgLogo';
import DesktopSubNav from '../NavBar/DesktopSubNav';
import MobileNavItem from '../NavBar/MobileNavItem';

const MobileNav = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();


  const {t} = useTranslation();
  return (
    <Flex  display={{base: "flex", md: "none"}} justifyContent="space-between" alignItems="center" px={4}>
      <IconButton color={"gray.400"} icon={<HamburgerIcon boxSize={6} />} variant="ghost" onClick={onOpen} aria-label={''} />
      <RouteLink to="/">
           <FdgLogo/>
       </RouteLink>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"gray.800"} color={"gray.400"}>
          <DrawerCloseButton />
          <DrawerHeader> <Text fontFamily={"'Intel', sans-serif"} mt={-4}><FdgLogo/></Text> </DrawerHeader>
          <DrawerBody>   
             <Stack fontFamily={"'Inter', sans-serif"} fontWeight={'bold'} spacing={4}>
              <MobileNavItem  href={"/"}> 
              {t("home0")}
              </MobileNavItem>
              <MobileNavItem  href={"/about"}> 
              {t("home1")}
              </MobileNavItem>
              <MobileNavItem  href={"/products"}> 
              {t("home2")}
              </MobileNavItem>
              <MobileNavItem>  
                <DesktopSubNav/>
              </MobileNavItem>

              <MobileNavItem  href={"/services"}> 
              {t("home4")}
              </MobileNavItem>
              <MobileNavItem  href={"/contact"}> 
              {t("home5")}
              </MobileNavItem>
           
             
             
             </Stack> 
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
export default MobileNav;


// const Nav_Prps = [
//   {
   
//     title: "home0",
//     href: "/"
//   },

//   {
//     title: "home1",
//     href:"/about"
//   },
//   {
  
//     title: "home2",
//     href:"/products"
//   },
//   {
  
//     title: "home3",
    
//   },
//   {

//     title: "home4",
//     href:"/services"
//   },
//   {
  
//     title:"home5",
//     href:"/contact"
//   }
// ]