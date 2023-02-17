import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/rubik-moonrocks/400.css';

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SpaceProps,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Tag } from '@chakra-ui/tag';
import { CircleWavyQuestion, Eye } from 'phosphor-react';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import Logo from '../components/fdgLogo';
import Layout from '../layout/Layout';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}
const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={ 2 } marginTop={ props.marginTop }>
      { props.tags.map((tag) => {
        return (
          <Tag size={ "md" } pl={ "4" } variant="solid" bg={ "orange.600" } key={ tag }>
            { tag }
          </Tag>
        );
      }) }
    </HStack>
  );
};
interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={ `Avatar of ${props.name}` }
      />
      <Text fontWeight="medium">{ props.name }</Text>
      <Text>—</Text>
      <Text>{ props.date.toLocaleDateString() }</Text>
    </HStack>
  );
};


let sr = ScrollReveal();
function About() {



  useEffect(() => {

    sr.reveal(".about1", {
      rotate: {x: 0, y: 20, z: 0},
      duration: 800,

    },);

    sr.reveal(".about2", {
      rotate: {x: 0, y: 50, z: 0},
      duration: 900
    });

    sr.reveal(".about3", {
      rotate: {x: 0, y: 50, z: 0},
      duration: 1000
    });
    sr.reveal(".about4", {
      origin: 'bottom',
      distance: '100px',
      duration: 2000,
      opacity: 0,

    });

    sr.reveal(".about5", {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal(".about6", {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal(".about7", {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal(".about8", {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal(".about9", {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });

  }, []);


  const {t} = useTranslation();

  return (
    <Box bg={"gray.200"}>
      <Layout>
        <Box overflowY={"hidden"} overflowX={"hidden"}>
          <Flex 
        mt={ 20 }
        h={ "70px" }
        maxW={ 250 }
        py={ 4 }
        gap={ 4 }
        alignItems={ "center" }
        fontSize={ "3xl" }
            textAlign={"end"}
            color={"red.700"} 
        fontWeight={ "bold" }
            boxShadow={"4px 0px 0px"}
            className="about1" visibility={"hidden"} fontFamily={"'Rubik Moonrocks', sans-serif"} >
        {t("WhoWe")} 
        <CircleWavyQuestion size={ 40 } />
      </Flex>
      <Box as={ "section" }>
            <Stack className={"about2"} align={'center'}   visibility={"hidden"} py={10}>
              <Heading  fontFamily={"'Rubik Moonrocks', sans-serif"}>
                {t("heaAboutUs")}
              </Heading>
              <Text color={'gray.600'} textAlign={'center'} fontWeight={500} w={{base: 350, sm: 300, md: 400, lg: 900}}>{t("QualityText")}</Text>
            </Stack>


        <Box py="12">
          <Box
            marginTop={ { base: "1", sm: "5" } }
            display="flex"
            flexDirection={ { base: "column", sm: "row" } }
            justifyContent="space-between">

                <Box className={"about3"} visibility={"hidden"}
              display="flex" 
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={ { base: "3", sm: "0" } }>
              <Flex alignItems={ "center" } gap={ 4 }>
                <BlogTags tags={ ["Our vision"] } />
                <Eye color={ "#C05621" } size={ 32 } />
              </Flex>

              <Heading marginTop="1">

                <Link fontSize={ "2xl" } textDecoration="none" _hover={ { textDecoration: "none" } }>
                  {t("Founded1")}
                </Link>
              </Heading>
              <Text
                textAlign={ "justify" }
             
                marginTop="2"
                color={ useColorModeValue("gray.700", "gray.200") }
                fontSize="lg">
                {t("Abaut1")}
              </Text>
              <Button
                top={ 2 }
                bg="white"
                fontSize="md"
                border={ "2px solid orange" }
                textAlign={ "justify" }
              
                maxW={ "300px" }
                _hover={ {
                  bg: "red.800",
                  color: "white",
                }}>
                {t("Learn")}
              </Button>
            </Box>

                <Box className="about4" visibility={"hidden"} display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
                  <Box width={{base: "100%", sm: "85%", md: "100%", lg: "100%"}} zIndex="2" marginLeft={{base: "0", sm: "5%"}} marginTop="5%">
                <Link textDecoration="none" _hover={ { textDecoration: "none" } }>
                  <Image

                    maxW={ "full" }
                    src={ "/publ../../assets/about/Imagem1.png" }
                    alt="some good alt text"
                    objectFit="contain"
                  />

                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={ useColorModeValue(
                    "radial(orange.600 1px, transparent 1px)",
                    "radial(orange.300 1px, transparent 1px)"
                  ) }
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
          </Box>


          {/* // Futer 2 */ }
              <Box 
            marginTop={ { base: "1", sm: "5" } }
            display="flex"
            flexDirection={ { base: "column", sm: "row" } }
                justifyContent="space-between"
                className="about5" visibility={"hidden"}>
            <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
                  <Box width={{base: "100%", sm: "85%", md: "100%", lg: "100%"}} zIndex="2" marginLeft={{base: "0", sm: "5%"}} marginTop="5%">
                <Link textDecoration="none" _hover={ { textDecoration: "none" } }>
                  <Image
                    maxW={ "full" }
                    src={ `${"/publ../../assets/about/Imagem2.png"}` }
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={ useColorModeValue(
                    "radial(orange.600 1px, transparent 1px)",
                    "radial(orange.300 1px, transparent 1px)"
                  ) }
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>


            <Box
                  className="about6" visibility={"hidden"}
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={ { base: "3", sm: "0" } }>
              <Flex alignItems={ "center" } gap={ 4 }>
                <BlogTags tags={ ["Our operates"] } />
                <Eye color={ "#C05621" } size={ 32 } />
              </Flex>
              <Heading marginTop="1">
                <Link fontSize={ "2xl" } textDecoration="none" _hover={ { textDecoration: "none" } }>

                  {t("FDGroup1")}
                </Link>
              </Heading>
              <Text
              
                marginTop="2"
                textAlign={ "justify" }
                color={ useColorModeValue("gray.700", "gray.200") }
                fontSize="lg">
                {t("About2")}
              </Text>
            </Box>
          </Box>

          {/* // Futer 3 */ }

          <Box
            marginTop={ { base: "1", sm: "5" } }
            display="flex"
            flexDirection={ { base: "column", sm: "row" } }>
                <Box className="about7" visibility={"hidden"}
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={ { base: "3", sm: "0" } }>
              <Flex alignItems={ "center" } gap={ 4 }>
                <BlogTags tags={ ["Our Solutions"] } />
                <Eye color={ "#C05621" } size={ 32 } />
              </Flex>
              <Heading marginTop="1">
                <Link fontSize={ "2xl" } textDecoration="none" _hover={ { textDecoration: "none" } }>
                  {t("Mission")}
                </Link>
              </Heading>
              <Text
              
                marginTop="2"
                color={ useColorModeValue("gray.700", "gray.200") }
                textAlign={ "justify" }
                fontSize="lg">
                {t("About3")} 

              </Text>
            </Box>
                <Box
                  className="about8" visibility={"hidden"}
                  display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
                  <Box width={{base: "100%", sm: "85%", md: "100%", lg: "100%"}} zIndex="2" marginLeft={{base: "0", sm: "5%"}} marginTop="5%">
                <Link textDecoration="none" _hover={ { textDecoration: "none" } }>
                  <Image
                    maxW={ "full" }
                    borderRadius="lg"
                    src={ "../../assets/about/Imagem4.png" }
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={ useColorModeValue(
                    "radial(orange.600 1px, transparent 1px)",
                    "radial(orange.300 1px, transparent 1px)"
                  ) }
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
          </Box>

              <VStack mt={10} spacing="2" alignItems="flex-start" className="about9" visibility={"hidden"}> 
            <Flex gap={ 4 } alignItems={ "center" }>
              <Heading> {t("Text0")} </Heading>
              <Logo />
            </Flex>

            <Box fontSize="lg">
              {t("Text1")}
              <Text fontWeight={"bold"} color="red.800">
                    {t("Text2")}
              </Text>
            </Box>

            <Text fontSize="lg">
              {t("Text3")}
            </Text>
            <Text fontSize="lg">
              {t("Text4")}
            </Text>
          </VStack>
        </Box>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
}

export default About;
