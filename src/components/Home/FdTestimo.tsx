import { Avatar, Box, Container, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ReactNode, useEffect, useRef } from 'react';
import React, { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();

const Testimonial = ({children}: {children: ReactNode}) => {
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
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading  w={"full"} textAlign={"center"} fontSize={"xl"}>
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
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};






function FdTestimo() {


  useEffect(() => {
    sr.reveal('.testm1', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      opacity: 0,
    },);

    sr.reveal('.testm2', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      opacity: 0,
    });

  }, []);

  const {t} = useTranslation();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} overflowY={"hidden"} overflowX={"hidden"}>
      <Container overflowY={"hidden"} overflowX={"hidden"} maxW={"6xl"}  as={Stack} spacing={12}>
        <Stack className={"testm1"} visibility={'hidden'} spacing={0} align={"center"}>
          <Heading>{t("Head0")}</Heading>
          <Text>{t("Testm0")}</Text>
        </Stack>
        <Stack className={"testm2"} visibility={'hidden'} overflowX={"hidden"} overflowY={"hidden"} direction={{base: "column", md: "row"}}
         spacing={{base: 10, md: 4, lg: 10}}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>{t("Head1")}</TestimonialHeading>
              <TestimonialText>
                {t("Testm1")}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://media.licdn.com/dms/image/D4E03AQGvBkytqkkSPw/profile-displayphoto-shrink_100_100/0/1664478662979?e=1682553600&v=beta&t=sRF5-sZH2SAN16-4ttH3EhWxM0Yqii5crOCW7qkXGkw"}
              name={"Daniel Paulino"}
              title={t("Title1")} />
          </Testimonial>


          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>{t("Head1")}</TestimonialHeading>
              <TestimonialText>
                {t("Testm2")} 
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://randomuser.me/api/portraits/men/86.jpg" }
              name={"Jane Cooper"}
              title={"CEO at ABC Corporation"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>{t("Head1")}</TestimonialHeading>
              <TestimonialText>
                {t("Testm3")} 
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://randomuser.me/api/portraits/men/86.jpg"
              }
              name={"Jane Cooper"}
              title={"CEO at ABC Corporation"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
export default FdTestimo;
