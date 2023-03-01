import '@fontsource/raleway/700.css';

import { Box, Container, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import CardProduct from '../CardProduct/cardProduct';


const sr = ScrollReveal();
function FdCard() {
  const {t} = useTranslation();

  const cards = [
    {
      title: "Server1",
      subtitle: "P07203-S01 – HPE MicroServer Gen10 Server.",
      description: "description1",
      url: "serv1.webp",
      href: "/products/server"
    },
    {
      title: "Server2",
      subtitle: "CP-8841-K9 Cisco 8800 IP Phone.",
      description: "description2",
      url: "red.jpeg",
      href: "/products/devices"
    },
    {
      title: "Server3",
      subtitle: " CP-8841-K9 Cisco 8800 IP Phone.",
      description: "description3",
      url: "part.jpeg",
      href: "/products/parts"


    },
    {
      title: "Server4",
      subtitle: "Group Logitech",
      description: "description4",
      url: "im44.jpeg",
      href: "/products/audiovisuel"

    },

  ];

  useEffect(() => {

    sr.reveal('.stack3', {
      origin: 'bottom',
      distance: '20px',
      duration: 800,
      opacity: 0,
    },);

    sr.reveal('.stack4', {
      origin: 'bottom',
      distance: '100px',
      duration: 900,
      opacity: 0,
    });

  }, []);
 
  return (


    <Box bg={useColorModeValue("gray.100", "gray.700")}>

      <Container overflowY={"hidden"} overflowX={"hidden"} alignItems={"center"} maxW={"6xl"}>

        <Stack className={'stack3'} visibility={'hidden'} textAlign={'center'}  align={"center"}>
          <Heading> {t("prodCard0")}</Heading>
          <Text fontSize={'sm'}>
            {t("prodCard1")}
          </Text>
        </Stack> 

        <Stack mt={12} overflowY={"hidden"} overflowX={"hidden"}
          w={"full"} className={'stack4'} visibility={'hidden'}
          gap={4}
          direction={{base: "column", md: "row"}}
          spacing={{base: 10, md: 2, lg: 2}}>

          {cards.map((card) => (
            <CardProduct
              key={card.title}
              title={t(card?.title)}
              subtitle={card?.subtitle}
              description={t(card?.description)}
              url={card?.url} 
              href={card?.href}>
              </CardProduct>
          ))}

        </Stack>

      </Container>

    </Box>
  );
}
export default FdCard;
