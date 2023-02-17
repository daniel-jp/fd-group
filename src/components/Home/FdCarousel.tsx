import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/rubik-moonrocks/400.css';

import { Box, Button, Container, Flex, Heading, IconButton, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { ArrowRight, CaretCircleLeft, CaretCircleRight } from 'phosphor-react';
import React, {useEffect} from 'react';
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
      image: "../../assets/cs1.jpg", 
      href: "/about", 
      buttom: "CarousBtn0",
    },
    {
      id: 2,
      title: "CarousTitle1",
      subTitle: "CarousSubTitle1",
      text: "CarousText1",
      image: "../../assets/cs2.jpg",
      href: "/services",
      buttom: "CarousBtn1",
    },
    {
      id: 3,
      title: "CarousTitle2",
      subTitle: "CarousSubTitle2",
      text: "CarousText2",
      image: "../../assets/cs3.jpg",
      href: "/about",
      buttom: "CarousBtn1",
    },
  ];










  return (
    <Box position={"relative"} height={"600px"} width={"full"} mt={"110px"} overflow={"hidden"}>
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
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={2}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                textAlign={"center"}
                align={"center"}
                p={"10"} >

                <Heading fontFamily={"'Rubik Moonrocks', sans-serif"} fontSize={{base: "3xl", md: "4xl", lg: "5xl"}} color="white">
                  {t(card.title)}
                </Heading>

                <Heading fontFamily={"'Rubik Moonrocks', sans-serif"} fontSize={{base: "2xl", sm: "3xl", md: "4xl"}} color="#822727">
                  {t(card.subTitle)}
                </Heading>

                <Text fontSize={{base: "md", lg: "lg"}} color="gray.200">
                  {t(card.text)}
                </Text>

                <Button
                  as={"a"}
                  href={`${card.href}`}
                  borderRadius={30} 
                  fontFamily="roboto"
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

                  <Flex justify={'flex-end'} align={'center'}> {t(card.buttom)} <ArrowRight size={22} /></Flex>
                 
                 
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
