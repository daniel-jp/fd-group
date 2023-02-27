import '@fontsource/inter/';
import '@fontsource/inter/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';

import { Box, Button, Container, Heading, IconButton, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { ArrowRight, CaretCircleLeft, CaretCircleRight } from 'phosphor-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

const settings = { 
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


function FdCarousel() {


  const {t} = useTranslation();


  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      id: 1,
      title: "CarousTitle0",
      subTitle: "CarousSubTitle0",
      text: "CarousText0",
      image: "../../assets/Carousel/cs012.png", 
      href: "/about", 
      buttom: "CarousBtn0",
    },
    {
      id: 2,
      title: "CarousTitle1",
      subTitle: "CarousSubTitle1",
      text: "CarousText1",
      image: "../../assets/Carousel/css23.jpg",
      href: "/services",
      buttom: "CarousBtn1",
    },
    {
      id: 3,
      title: "CarousTitle2",
      subTitle: "CarousSubTitle2",
      text: "CarousText2",
      image: "../../assets/Carousel/cs3.jpg",
      href: "/about",
      buttom: "CarousBtn1",
    },
  ];


  const innerBoxStyles = {
    display: 'block', 
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: 'full', 
    color: 'white',
    textShadow: '0 0 20px 0',
    fontWeight: 'bold',
    fontSize: '20px',
    px:"4px",
    py:"4px"
  }







  return (
    <Box overflowY={"hidden"} overflowX={"hidden"} position={"relative"} height={"full"} width={"full"} mt={"70px"} overflow={"hidden"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      <IconButton bg={"gray.400"} aria-label="left-arrow" variant="ghost" borderRadius="full" position="absolute"
        left={side}top={top} transform={"translate(0%, -50%)"} zIndex={2} onClick={ () => slider?.slickPrev() }>
        <CaretCircleLeft color="#822727" size={32} />
      </IconButton>

      <IconButton
        bg={"gray.400"}
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        borderRadius="full"
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={ () => slider?.slickNext() }>
        <CaretCircleRight color="#822727" size={32} />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card) => (
          <Box
            key={card.id}
            height={"1xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width={"full"}
            backgroundImage={`url(${card.image})`}> 
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" h={600} position="relative">
              <Stack
                spacing={2}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                textAlign={"center"}
                align={"center"}
                p={"10"}>
                  
       <Box sx={innerBoxStyles} backdropFilter='auto' backdropContrast='60%'>
                <Heading bg={'transparent'}  textTransform={'uppercase'} fontFamily={"'Inter', sans-serif"} fontSize={{base: "3xl", md: "4xl", lg: "5xl"}} color="white">
                  {t(card.title)}
                </Heading>

                <Heading fontFamily={"'Inter', sans-serif"}  fontSize={{base: "1xl", sm: "2xl", md: "3xl"}} 
                color={"red.500"}>
                  {t(card.subTitle)}
                </Heading>

                <Text py={2} fontFamily={"'Inter', sans-serif"} fontSize={{base: "md", lg: "lg"}} color="white">
                  {t(card.text)}
                </Text>
         </Box>
 
                <Button
                  as={"a"}
                  href={`${card.href}`}
                  borderRadius={30} 
                  fontFamily="roboto"
                
                  maxW={'full'}
                  fontSize={18}  
                  color="white"
                  p="10px"
                  fontWeight="bold"
                  bgImage="linear-gradient(90deg, #822727 0%, #1A202C 100%);"
                  _hover={{
                    cursor: "pointer",
                    color: "gray.400",
                    transform: "scale(1.1)",
                  }}>
                  <Text display={'flex'}> {t("CarousBtn1")}  <ArrowRight size={22} /></Text>
                 
                </Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
export default FdCarousel;
