import '@fontsource/inter/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/rubik-moonrocks/400.css';

import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { LineSegments } from 'phosphor-react';
import React, { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/NavBar/NavBar';
import Layout from '../layout/Layout';
import SimpleLayout from '../layout/SimpleLayout';


const sr = ScrollReveal();

function Services() {

  useEffect(() => {

    sr.reveal('.service1', {
      rotate: {x: 0, y: 20, z: 0},
      duration: 800,

    },);

    sr.reveal('.service2', {
      rotate: {x: 0, y: 40, z: 0},
      duration: 900
    });

    sr.reveal('.service3', {
      origin: 'bottom',
      distance: '100px',
      duration: 900,
      opacity: 0,
    });
    sr.reveal('.service4', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      opacity: 0,

    });

    sr.reveal('.service5', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.service6', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.service7', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal('.service8', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.service9', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.service10', {
      origin: 'bottom',
      distance: '500px',
      duration: 2000,
      opacity: 0,
    });
  }, []);

  const {t} = useTranslation()
  return (
    <>
      <Navbar/>



      <Box pb={ 100 } pt={10} bg={"gray.200"} fontFamily={"'Inter', sans-serif"} color={"gray.600"}>

      <SimpleLayout>
      
        <Box textAlign="center"  bg={ useColorModeValue('white', 'gray.900') }>
          <Flex boxShadow={ "8px 0px 0px" }
            mt={ 32 }
            p={ 2 }
            h={ "70px" }
            w={260}
              maxW={ "full" }
            py={ 4 } bg={"red.800"}
            gap={ 4 }  justify={'end'}
            alignItems={ "center" }
            fontSize={ "2xl" }
            textAlign={ "end" }
            color={ "gray.800" }
            fontWeight={"bold"} className='service1' visibility={'hidden'}>
            <Text color={"white"} textTransform={'uppercase'}>  {t("ServiceH1")}</Text>
            <LineSegments size={ 40 } color='#1A202C' />
          </Flex>

          <Stack py={6} className='service2' visibility={'hidden'} align={'center'} mt={20}>
            <Text  fontWeight={'bold'}>
            {t("ServiceH0")} 
          </Text>
            <Text color={'gray.800'} textAlign={'center'}
              fontWeight={500} w={{base: 350, sm: 300, md: 400, lg: 900}} >
              {t("ServiText0")}
            </Text>
          </Stack>
        </Box>


          <SimpleGrid  overflowY={'hidden'} overflowX={'hidden'} spacing={ 16 } columns={ { base: 1, sm: 2 } } mt={12}>


            {/* FUTURE 1 */ }
            <Stack className='service3' visibility={'hidden'} 
              w={ 'full' }
              bg={ useColorModeValue('white', 'gray.900') }
              boxShadow={ '2xl' }
              rounded={ 'md' }
              p={ 6 } 
              overflow={ 'hidden' }>
              <Stack direction={ 'row' } spacing={ 4 } align={ 'start'}>
                <Avatar
                  src={ '../../assets/services/Imagem1.png' }
                />
                <Stack direction={ 'column' } spacing={ 0 } fontSize={ 'sm' }>
                  <Text fontWeight={600}> {t("name1")} </Text>
                  <Text color={ 'gray.600' }>Feb 08, 2023 · 6min read</Text>
                </Stack>
              </Stack>
              <Stack>

                <Heading pt={ 3 }
                  color={ useColorModeValue('gray.600', 'white') }
                  fontSize={ '2xl' } 
                  fontFamily={ 'body' }>
                  {t("ServiceSubH0")}
                </Heading>
                <Text color={ 'gray.600' } textAlign={ 'justify' }>
                  {t("ServiText1")}
                </Text>
              </Stack>


              <Box
                bg={'gray.100'}
                h={'full'}
                mt={ 6 }
                mx={ -6 }
                pos={ 'relative' }>
                <Image w={ 'full' } h={ 'full' }
                    src={'../../assets/services/serv1.jpeg'}
                />
              </Box>
            </Stack>


            {/* FUTURE 2 */ }
            <Stack className='service4' visibility={'hidden'} 
              w={ 'full' }
              bg={ useColorModeValue('white', 'gray.900') }
              boxShadow={ '2xl' }
              rounded={ 'md' }
              p={ 6 }
              overflow={ 'hidden' }>

              <Box
                bg={'gray.100'}
                h={'full'}
              
               
                pos={ 'relative' }>
                <Image w={ 'full' } h={ 'full' }
                  src={ '../../assets/services/instal2.webp' } 
                />
              </Box>
              <Stack>

                <Heading pt={ 3 }
                  color={ useColorModeValue('gray.600', 'white') }
                  fontSize={ '2xl' }
                  fontFamily={ 'body' }>
                  {t("ServiceSubH1")}
                </Heading>
                <Text color={ 'gray.600' } textAlign={ 'justify' }>
                  {t("ServiText2")}                </Text>
              </Stack>

              <Stack pt={ 20 } direction={ 'row' } spacing={ 4 } align={ 'center' }>
                <Avatar
                  src={ '../../assets/services/Imagem2.png' }

                />
                <Stack direction={ 'column' } spacing={ 0 } fontSize={ 'sm' }>
                  <Text fontWeight={600}>{t("name2")}</Text>
                  <Text color={ 'gray.600' }>Feb 08, 2023 · 6min read</Text>
                </Stack>
              </Stack>
            </Stack>

            {/* FUTURE 3 */ }


            <Stack
              className='service5' visibility={'hidden'}
              w={ 'full' }
              bg={ useColorModeValue('white', 'gray.900') }
              boxShadow={ '2xl' }
              rounded={ 'md' }
              p={ 6 }
              overflow={ 'hidden' }>

              <Stack mt={ 2 } direction={ 'row' } spacing={ 4 } align={ 'center' }>
                <Avatar
                  src={ '../../assets/services/Imagem3.png' }
                />
                <Stack direction={ 'column' } spacing={ 0 } fontSize={ 'sm' }>
                  <Text fontWeight={600}>{t("name3")}</Text>
                  <Text color={ 'gray.600' }>Feb 08, 2023 · 6min read</Text>
                </Stack>
              </Stack>
              <Stack>

                <Heading pt={ 2 }
                  color={ useColorModeValue('gray.600', 'white') }
                  fontSize={ '2xl' }
                  fontFamily={ 'body' }>
                  {t("ServiceSubH2")}
                </Heading>
                <Text color={ 'gray.600' } pb={ 8 } textAlign={ 'justify' }>
                  {t("ServiText3")}
                </Text>
              </Stack>


              <Box

                bg={ 'gray.100' }
                mt={ 6 }
                h={ 'full' }
                mx={ -6 }
                pos={ 'relative' }>
                <Image h={ 'full' } w={ 'full' }
                  src={
                    '../../assets/services/main.webp' }
                />
              </Box>
            </Stack>

            {/* FUTURE 4 */ }

            <Stack
              className='service6' visibility={'hidden'}
              w={ 'full' }
              bg={ useColorModeValue('white', 'gray.900') }
              boxShadow={ '2xl' }
              rounded={ 'md' }
              p={ 6 }
              overflow={ 'hidden' }>

              <Box
                bg={ 'gray.100' }
             
                pos={ 'relative' }>
                <Image w={ 'full' } h={ 'full' }
                  src={
                    '../../assets/services/call.jpeg' }

                />
              </Box>
              <Stack>

                <Heading pt={ 3 }
                  color={ useColorModeValue('gray.700', 'white') }
                  fontSize={ '2xl' }
                  fontFamily={ 'body' } >
                  {t("ServiceSubH3")}
                </Heading>
                <Text color={'gray.600'} textAlign={ 'justify' }>
                  {t("ServiText4")}
                </Text>
              </Stack>
              <Stack mt={ 6 }
                direction={ 'row' } spacing={ 4 } align={ 'center' }>
                <Avatar
                  src={ '../../assets/services/Imagem4.png' }/>
                <Stack direction={ 'column' } spacing={ 0 } fontSize={ 'sm' }>
                  <Text fontWeight={600}>{t("name4")}</Text>
                  <Text color={ 'gray.600' }>Feb 08, 2023 · 6min read</Text>
                </Stack>
              </Stack>
            </Stack>
          </SimpleGrid>
        </SimpleLayout>
      </Box>


      <Box bg={ 'red.800' } position={ 'relative' } pb={ -500 }>
        <Flex className='service7' visibility={'hidden'}
          flex={ 1 }
          zIndex={ 0 }
          display={ { base: 'none', lg: 'flex' } }
          backgroundImage={ "url(../../assets/services/s1.jpg)" }
          backgroundSize={ 'cover' }
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={ 'absolute' }
          width={ '50%' }
          insetY={ 0 }
          right={ 0 }>

          <Flex
            bgGradient={ 'linear(to-r, gray.800 10%, transparent)' }
            w={ 'full' }
            h={ 'full' }
          />
        </Flex>






        <Container className='service8' visibility={'hidden'} maxW={'6xl'} zIndex={10} position={'relative'}>
          <Stack direction={ { base: 'column', lg: 'row' } }>
            <Stack
              flex={ 1 }
              color={ 'gray.400' }
              justify={ { lg: 'center' } }
              py={ { base: 4, md: 20, xl: 60 } }>
              <Box mb={ { base: 8, md: 20 } }>
                <Text
                  fontFamily={ 'heading' }
                  fontWeight={ 700 }
                  textTransform={ 'uppercase' }
                  mb={ 3 }
                  fontSize={ 'xl' }
                  color={ 'gray.800' }>
                  {t("ServiceH2")}
                </Text>
                <Heading
                  color={ 'white' }
                  mb={ 5 }
                  fontSize={ { base: '3xl', md: '5xl' } }>
                  {t("ServiceH3")}
                </Heading>
                <Text className='service9' textAlign={'justify'} visibility={'hidden'} mr={2} fontSize={'xl'} color={'gray.400'}>
                  {t("ServiText5")}
                </Text>
              </Box>

              <SimpleGrid className='service10' visibility={'hidden'} columns={{base: 1, md: 2}} spacing={10}>
                { stats.map((stat) => (
                  <Box key={ stat.id }>
                    <Text
                      fontFamily={ 'heading' }
                      fontSize={ '3xl' }
                      color={ 'white' }
                      mb={ 3 }>
                      { stat.title }
                    </Text>
                    <Text fontSize={ 'xl' } color={ 'gray.400' }>
                      { t(stat.subtitle)}
                    </Text>
                  </Box>

                  
                )) }
              </SimpleGrid>
            </Stack>
            <Flex flex={ 1 } />
          </Stack>
        </Container>
      </Box>
      <Footer/>
    </>
  );
}
export default Services

const StatsText = ({ children }: { children: ReactNode }) => (
  
  <Text as={ 'span' } fontWeight={ 700 } color={ 'white' }>
    { children }
  </Text>
);

const stats = [
  {
    id:1,
    title: 'Preços $', 
    subtitle:'ServiTextCaerd1'
  },
  {
    id:2,
    title: '24/24 & 7/7',
    subtitle:"ServiTextCaerd2"
  },
  {
    id:3,
    title: 'Prazos',
    subtitle:'ServiTextCaerd3'
  },
  {
    id:4,
    title: 'Serviços',
    subtitle:'ServiTextCaerd4'
  },
];