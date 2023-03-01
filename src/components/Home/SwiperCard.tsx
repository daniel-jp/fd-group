import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Box, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';
import SwiperCore, { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SimpleLayout from '../../layout/SimpleLayout';
import SwiperProduct from '../../swiper/SwiperProduct';
import FdgLogo from '../fdgLogo';


const sr = ScrollReveal();
export default function SwiperCard() {

 



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  const onAutoplayTimeLeft = ({s, time}: any) => {
    `${Math.ceil(time / 1000)}s`;
  };
  const Swipers = SwiperProduct();
  const {t} = useTranslation();

  useEffect(() => {
    sr.reveal('.swp1', {
      origin: 'bottom',
      distance: '100px',
      duration: 1200,
      opacity: 0,
    });

    sr.reveal('.swp2', {
      origin: 'bottom',
      distance: '200px',
      duration: 1200,
      opacity: 0,
    });

  }, []);


  const myStyle = {
    breakpoints: {
       1280: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 4,
      },
      667: {
        slidesPerView: 1,
      },
        380: {
        slidesPerView: 1,
      },
    },
 
  }

  return (
    <Box p={3}>

      <Stack className='swp1' visibility={'hidden'} mb={6} align={"center"}>
        <Heading>{t("swip1")}</Heading>
        <Text> {t("swip2")} </Text>
      </Stack>

      <SimpleLayout>

 <Box className='swp2' visibility={'hidden'} overflowY={"hidden"} overflowX={"hidden"}>
    <Swiper 
    
         {...myStyle}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={5}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}

          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true, 
          }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>

  {Swipers.map((item) => (
    <SwiperSlide key={item.id}>
      <Box  shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden" 
            overflowY={"hidden"} 
            overflowX={"hidden"} bg={'gray.800'}>
      <Flex p={2} 
            overflowY={"hidden"} 
            overflowX={"hidden"} justifyContent={'center'} bg={'red.800'}  h={200}
               
                  mx={-2}
                  my={-2}
                  mb={-1}
                  textAlign={'center'}>
        <Image 
        
        maxH={'full'}  src={item.image} alt={item.title} />
        </Flex>
        
        <Box p="4">
          <Box textAlign={'center'}>
            <Text fontSize="24px" fontWeight={'bord'} color={'gray.500'} >
              {item.title}
            </Text>
          </Box>

          <Box textAlign={'center'} mt="4">
            <Text fontSize="16px" color={'gray.500'}>
              {item.description}
            </Text>
          </Box>

          <Flex justify={'end'}>
            <FdgLogo />
          </Flex> 
        </Box>
      </Box>
    </SwiperSlide>
  ))}

</Swiper>
  </Box>
</SimpleLayout>

    </Box>
  );
}
