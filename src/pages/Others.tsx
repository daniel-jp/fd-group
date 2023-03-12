import { CheckCircleIcon } from '@chakra-ui/icons';
import { Flex, Link, SimpleGrid, Stack } from '@chakra-ui/react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { CameraSlash, QrCode } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import FdgLogo from '../components/fdgLogo';
import OtherProductCard from '../components/OtherProductCard/OtherProductCard';
import Layout from '../layout/Layout';
import OtherProduct1 from '../Others/OtherProduct1';
import OtherProduct2 from '../Others/OtherProduct2';
import OtherProduct3 from '../Others/OtherProduct3';





const sr = ScrollReveal();

function Others() {
  useEffect(() => {

    sr.reveal('.other1', {
      rotate: {x: 0, y: 20, z: 0},
      duration: 1000,

    },);

    sr.reveal('.other2', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.other3', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.other4', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,

    });

    sr.reveal('.other5', {
      origin: 'bottom',
      distance: '500px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.other6', {
      origin: 'bottom',
      distance: '600px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.other7', {
      origin: 'bottom',
      distance: '700px',
      duration: 2000,
      opacity: 0,
    });
  }, []);


  const otherProduct1 = OtherProduct1();
  const otherProduct2 = OtherProduct2();
  const otherProduct3 = OtherProduct3();
  const {t} = useTranslation();


  return (
         <Box bg={"gray.200"} pt={10}>

      <Layout>
        <Box pb={20} overflowY={'hidden'} overflowX={'hidden'}>


          <Flex className='other1' visibility={'hidden'} justify={'flex-end'} align={'center'} px={6}>
        <Heading mt={ 6 } mb={ 2 } fontSize={ { base: 18, sm: 20, md: 22, lg: 32 } }>
            {t("headOther")}
        </Heading>
        <QrCode size={ 28 } color='#C53030' />

      </Flex>


          <Stack align={'center'} className='other2' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}>{t("pOther0")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='other3' visibility={'hidden'}>
        <SimpleGrid columns={ { base: 1, md: 3 } } spacing={ 5 }>
          { otherProduct1.map((server, key) => (
            <OtherProductCard title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>
      </Box>

          <Stack align={'center'} className='other4' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}> {t("pOther1")} </Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='other5' visibility={'hidden'}>

            <SimpleGrid columns={{base: 1, md: 3}} spacing={5} className='other1' visibility={'hidden'}>
          { otherProduct2.map((server, key) => (
            <OtherProductCard title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>

      </Box>

          <Stack align={'center'} className='other6' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}> {t("pOther2")} </Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='other7' visibility={'hidden'} >

        <SimpleGrid columns={ { base: 1, md: 3 } } spacing={ 5 }>
          { otherProduct3.map((server, key) => (
            <OtherProductCard title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>

          </Box>    </Box>
      </Layout>

       </Box>
  );
}

export default Others;
