import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/rubik-moonrocks/400.css';

import { Avatar, Box, Container, Flex, Heading, keyframes, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowSquareOut, X } from 'phosphor-react';
import React, { ReactNode, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};



const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading  fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign={"center"} color={useColorModeValue("gray.600", "gray.400")} fontSize={"sm"}>
      {children}
    </Text>
  );
};
const TestimonialAvatar = ({ src, name, title }: { src: string; name: string; title: string }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar w={150} h={150} src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>
          <Link display={"flex"} color="red.800" href="#">
            {name} <ArrowSquareOut size={18} />
          </Link>
        </Text>
        <Text fontSize={"sm"}  color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

function FdSuport() {

  useEffect(() => {

    sr.reveal('.stack', {
      origin: 'bottom',
      distance: '20px',
      duration: 800,
      opacity: 0,
    },);

    sr.reveal('.stack2', {
      origin: 'bottom',
      distance: '100px',
      duration: 900,
      opacity: 0,
    });

  }, []);



  const {t} = useTranslation();

  return (

    <Box  bg={useColorModeValue("gray.100", "gray.700")}>
      <Container overflowY={"hidden"} overflowX={"hidden"} alignItems={'center'} as={Stack} maxW={"6xl"} py={22} spacing={12}>
        <Stack className='stack' visibility={'hidden'} textAlign={'center'} spacing={0} align={"center"}>
          <Heading color={"gray.700"}>{t("suport1")}</Heading>
          <Text>{t("suport2")}</Text>
        </Stack>

        <Stack className='stack2' visibility={'hidden'} direction={{base: "column", md: "row"}} spacing={{base: 10, md: 4, lg: 10}}>
          <Testimonial>
            <Text
              _hover={{
                cursor: "pointer",
                color: "gray.400",
                transform: "scale(1.1)",
              }}
              w={"full"} >
              <TestimonialAvatar
                src={ "../../assets/Suport/Imagem1.png" }
                name={t("name1")}
                 title={t("Corporation")}
              />
            </Text>
          </Testimonial>
          <Testimonial>
            <Text 
              _hover={{
                cursor: "pointer",
                color: "gray.400",
                transform: "scale(1.1)",
              }}>
              <TestimonialAvatar
                src={ "../../assets/Suport/sp-2.webp" }
                name={t("name2")}
                title={t("Corporation")}/>
            </Text>
          </Testimonial>

          <Testimonial>
            <Text
              _hover={{
                cursor: "pointer",
                color: "gray.400",
                transform: "scale(1.1)",
              }} >
              <TestimonialAvatar
                src={ "../../assets/Suport/sp-3.webp" }
                name={t("name3")}
                 title={t("Corporation")}/>
            </Text>
          </Testimonial>
          <Testimonial>
            <Text
              _hover={{
                cursor: "pointer",
                color: "gray.400",
                transform: "scale(1.1)",
              }}>
              <TestimonialAvatar
                src={ "../../assets/Suport/sp-4.webp" }
                name={t("name4")}
                 title={t("Corporation")}
              />
            </Text>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
export default FdSuport;
