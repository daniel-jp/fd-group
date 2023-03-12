import '@fontsource/inter/600.css';

import { Box, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { CameraSlash, QrCode } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import CardServerProduct from '../components/Servers/CardServerProduct';
import Layout from '../layout/Layout';
import ServerProductsServer1 from '../servers/ServerProductsServer1';
import ServerProductsServer2 from '../servers/ServerProductsServer2';
import ServerProductsServer3 from '../servers/ServerProductsServer3';
import ServerProductsServer4 from '../servers/ServerProductsServer4';

const sr = ScrollReveal();

function Server() {

  useEffect(() => {

    sr.reveal('.server1', {
      rotate: {x: 0, y: 20, z: 0},
      duration: 1000,

    },);

    sr.reveal('.server2', {
      origin: 'bottom',
      distance: '100px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.server3', {
      origin: 'bottom',
      distance: '100px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.server4', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,

    });

    sr.reveal('.server5', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.server6', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.server7', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal('.server8', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal('.server9', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });

  }, []);



  const {t} = useTranslation();

  const serversProducts = ServerProductsServer1();
  const serversProducts2 = ServerProductsServer2();
  const serversProducts3 = ServerProductsServer3();
  const serversProducts4 = ServerProductsServer4();

  return (  
  <Box bg={"gray.200"} pt={10} >
    <Layout>

    <Box pb={20} overflowY={'hidden'} overflowX={'hidden'} fontFamily={"'Inter', sans-serif"}>
          <Flex className='server1' visibility={'hidden'} justify={'flex-end'} align={'center'}  px={6}>

        <Heading mt={ 6 } mb={ 2 } fontSize={ { base: 18, sm: 20, md: 22, lg: 32 } }>
            {t("childrenLab0")}
        </Heading>
        <QrCode size={ 28 } color='#C53030' />
      </Flex>

          <Stack align={"center"} className='server2' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}>{t("serverpag0")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='server3' visibility={'hidden'} >
        <SimpleGrid columns={ { base: 1, md: 3 } } spacing={ 5 }>
          { serversProducts.map((server, key) => (
            <CardServerProduct title={ server.title } img={ server.img } key={ key } />
          )) }
          </SimpleGrid>

      </Box>

          <Stack align={"center"} className='server4' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}>{t("serverpag1")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='server5' visibility={'hidden'}>

        <SimpleGrid columns={ { base: 1, md: 3 } } spacing={ 5 }>
          { serversProducts2.map((server, key) => (
            <CardServerProduct title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>

      </Box>



          <Stack align={"center"} className='server6' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}>{t("serverpag2")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='server7' visibility={'hidden'}>
        <SimpleGrid columns={ { base: 1, md: 3 } } spacing={ 5 }>
          { serversProducts3.map((server, key) => (
            <CardServerProduct title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>
      </Box>


          <Stack align={"center"} className='server8' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}>{t("serverpag3")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='server9' visibility={'hidden'}>
        <SimpleGrid columns={ { base: 1, md: 3 } } spacing={ 5 }>
          { serversProducts4.map((server, key) => (
            <CardServerProduct title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>
      </Box>
      </Box>

    </Layout>
    </Box>
  );
}

export default Server;
