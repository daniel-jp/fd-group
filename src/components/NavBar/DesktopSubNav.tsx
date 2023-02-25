import '@fontsource/raleway/700.css';

import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CaretCircleDoubleRight } from 'phosphor-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DesktopSubNav = () => {
  const {t} = useTranslation()
  const {isOpen, onOpen} = useDisclosure();

  return (
    <>


      <Menu>
       
        <MenuButton>
          <Text fontWeight={"bold"}> {t("home3")}<ChevronDownIcon /></Text>
        </MenuButton>
   
        <MenuList mb={4} w={{base: 280, sm:  375, md: 500}}  color={"gray.600"}  maxW={'full'}>
          <Text p={3} fontSize={'1xl'} fontWeight={'bold'} color={'red.800'} >{t("home2")} 
          </Text>
          <MenuItem _hover={{bg: "pink.50"}} fontSize={"sm"}>
            <Link to="/products/server" role={"group"}>
              <Stack direction={"row"} align={"center"}>
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab0")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab0")}</Text>
                </Box>

                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} 
                  justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
          </MenuItem>
          <MenuItem _hover={{bg: "pink.50"}}>
            <Link to="/products/devices" role={"group"}>
              <Stack direction={"row"} align={"center"}>
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab1")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab1")}</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>

          </MenuItem>
          <MenuItem _hover={{bg: "pink.50"}}>
            <Link to="/products/parts" role={"group"}>
              <Stack direction={"row"} align={"center"}>
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab2")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab2")}</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
          </MenuItem>


          <MenuItem _hover={{bg: "pink.50"}}>
            <Link to="/products/audiovisuel" role={"group"}>

              <Stack direction={"row"} align={"center"}>
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab3")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab3")}</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
          </MenuItem>
          <MenuItem _hover={{bg: "pink.50"}}>
            <Link to="/products/other"
              role={"group"}>

              <Stack direction={"row"} align={"center"} >
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab4")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab4")}</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"end"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
          </MenuItem>
        </MenuList>
     
      </Menu>

    </>
  );
}
export default DesktopSubNav;