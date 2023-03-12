import { Box, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { CameraSlash, QrCode } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import DeviceCards from '../components/DeviceCards/DeviceCards';
import DeviceProduct1 from '../devices/DeviceProduct1';
import DeviceProduct2 from '../devices/DeviceProduct2';
import DeviceProduct3 from '../devices/DeviceProduct3';
import DeviceProduct4 from '../devices/DeviceProduct4';
import Layout from '../layout/Layout';

const sr = ScrollReveal();

function Devices() {


  useEffect(() => {

    sr.reveal('.device1', {
      rotate: {x: 0, y: 20, z: 0},
      duration: 1000,

    },);

    sr.reveal('.device2', {
      origin: 'bottom',
      distance: '100px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.device3', {
      origin: 'bottom',
      distance: '100px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.device4', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,

    });

    sr.reveal('.device5', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.device6', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.device7', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal('.device8', {
      origin: 'bottom',
      distance: '500px',
      duration: 2000,
      opacity: 0,
    });

  }, []);


  const {t} = useTranslation();

  const deviceProduct1 = DeviceProduct1();
  const deviceProduct2 = DeviceProduct2();
  const deviceProduct3 = DeviceProduct3();
  const deviceProduct4 = DeviceProduct4();


  return (
      <Box bg={"gray.200"} pt={10}>
      <Layout>

        <Box pb={20}  overflowY={'hidden'} overflowX={'hidden'}>
          <Flex className='device1' visibility={'hidden'} justify={'flex-end'} align={'center'} px={6}>
        <Heading mt={ 6 } mb={ 2 } fontSize={ { base: 18, sm: 20, md: 22, lg: 32 } }>
            {t("headDivic")}
        </Heading>
        <QrCode size={ 28 } color='#C53030' />
      </Flex>


          <Stack align={"center"} className='device2' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}>{t("Divice0")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='device3' visibility={'hidden'}>

        <SimpleGrid columns={ { base: 1, md: 3 } } spacing={ 5 }>
          { deviceProduct1.map((server, key) => (
            <DeviceCards title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>
      </Box>

          <Stack align={"center"} className='device4' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}>{t("Divice1")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='device5' visibility={'hidden'}>

        <SimpleGrid columns={ { base: 1, md: 3 } } spacing={ 5 }>
          { deviceProduct2.map((server, key) => (
            <DeviceCards title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>

      </Box>


          <Stack align={"center"} className='device6' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}>{t("Divice2")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>


          <Box pt={10} pb={10} className='device7' visibility={'hidden'}>
        <SimpleGrid columns={ { base: 1, md: 3 } } spacing={ 5 }>
          { deviceProduct3.map((server, key) => (
            <DeviceCards title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>
      </Box>


          <Stack align={"center"} className='device8' visibility={'hidden'}>
          <Heading color={'gray.700'} fontSize={"2xl"}>{t("Divice3")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={10} pb={10} className='device8' visibility={'hidden'}>
        <SimpleGrid columns={ { base: 1, md: 2 } } spacing={ 5 }>
          { deviceProduct4.map((server, key) => (
            <DeviceCards title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>
      </Box>
        </Box>

    </Layout>
    </Box>
  );
}

export default Devices;
