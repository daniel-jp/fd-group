import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CaretCircleDoubleRight } from 'phosphor-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DesktopSubNav = () => {
  const {isOpen,onOpen} = useDisclosure();
  const {t} = useTranslation()

  return (
    <>
    
      <Popover>

        <PopoverTrigger>
          <Text _hover={{cursor: "pointer",color: "gray.400",transform: "scale(1.1)",}} onClick={onOpen}>
            {t( "home3",)}
          </Text>
        </PopoverTrigger>
        <PopoverContent w={{base: 280, sm: 400, md: 500}} maxW={'full'}  >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader><Text fontFamily={"'Rubik Moonrocks', sans-serif"}>{t("home0")}</Text></PopoverHeader>
          <Box overflowY={'scroll'}>

          <PopoverBody>
         
            <Link to="/products/server" role={"group"}>
              <Stack direction={"row"} align={'flex-start'} >
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}> Servers & Storage Array </Text>
                  <Text>Rackmount servers | Tower servers | Power Edge Servers | Stocking Harbor</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>


            <Link to="/products/devices" role={"group"}>
              <Stack direction={"row"} align={'flex-start'} >
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}> Network Devices </Text>
                  <Text>Rackmount servers | Tower servers | Power Edge Servers | Stocking Harbor</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link> 

            <Link to="/products/server" role={"group"}>

              <Stack direction={"row"} align={'flex-start'} >
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>Parts</Text>
                  <Text>Rackmount servers | Tower servers | Power Edge Servers | Stocking Harbor</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>

            </Link>

            <Link to="/products/devices"
              role={"group"}>

              <Stack direction={"row"} align={'flex-start'} >
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>Audiovisuel & Conferencing</Text>
                  <Text>Rackmount servers | Tower servers | Power Edge Servers | Stocking Harbor</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
         
          </PopoverBody>
          <PopoverFooter>
            <Link to="/products/devices"
              role={"group"}>

              <Stack direction={"row"} align={'flex-start'} >
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>Others</Text>
                  <Text>Rackmount servers | Tower servers | Power Edge Servers | Stocking Harbor</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
          </PopoverFooter>   </Box>
        </PopoverContent>
      </Popover>
    </>
  );
}
export default DesktopSubNav;