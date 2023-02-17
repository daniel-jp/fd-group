import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/rubik-moonrocks/400.css';

import {
  Box,
  Button,
  Container,
  createIcon,
  Flex,
  Heading,
  Icon,
  IconButton,
  IconProps,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Eye } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import Layout from '../layout/Layout';

const sr = ScrollReveal();
function Products() {

  useEffect(() => {

    sr.reveal('.product1', {
      rotate: {X: 0, y: 20, z: 0},
      duration: 800,

    },);

    sr.reveal('.product2', {
      origin: 'bottom',
      distance: '100px',
      duration: 900,
      opacity: 0,
    });

    sr.reveal('.product3', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      opacity: 0,
    });
    sr.reveal('.product4', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,

    });

    sr.reveal('.product5', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.product6', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.product7', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal('.product8', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal('.product9', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });

  }, []);

  const {t} = useTranslation()

  return (
    <>
    <Layout>

        <Box p={2}
          h="full" w="full" 
          overflowY={'hidden'} overflowX={'hidden'} justifyContent={'center'}>
          <Stack overflowX={'hidden'}
            p={5}
            alignItems={"center"}
            justifyContent={{
              base: "flex-start",
              md: "space-around",
        } }
        direction={ {
          base: "column",
          md: "row",
            }}>
            <Stack className='product1' visibility={'hidden'}
          width={ {
            base: "100%",
            md: "40%",
          } }
              textAlign={"center"} >

              <Heading size={"lg"} fontFamily={"'Rubik Moonrocks', sans-serif"}>
                {t("HeadProd0")}
                <Text color="purple.400">{t("TextHeadProd0")}</Text>
          </Heading>
            </Stack>

            <Stack maxW={"300px"} className='product2' visibility={'hidden'}
          w={ "full" }>
              <Image  src="../../assets/logo/log-4.png" />
        </Stack>
      </Stack>
      <Divider />




      {/*   PROD 1 */ }

      <Stack
        align={ "center" }
        spacing={ { base: 8, md: 10 } }
        py={ { base: 20, md: 28 } }
            direction={{base: "column", md: "row"}}>
            <Stack flex={1} spacing={{base: 2, md: 5}} className='product2' visibility={'hidden'}>
              <Heading lineHeight={1.1} fontWeight={"800"} fontSize={{base: "sm", sm: "xl", lg: "3xl"}}>
                <Text 
                  as={"span"}
                  align={'justify'}
              position={ "relative" }
              _after={ {
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
                  }}>
                  {t("HeadProd1")}
            </Text>
            <br />
                <Text as={"span"} color={"red.600"}>
                  {t("SubHead0")}
            </Text>
          </Heading>
              <Text color={"gray.600"} fontFamily={'roboto'}>
                {t("TextProd0")}
          </Text>
          <Stack spacing={ { base: 4, sm: 6 } } direction={ { base: "column", sm: "row" } }>


            <Button
              as={ 'a' }
              href={ `/products/servers` }
              rounded={ "full" }
              size={ "lg" }
                  fontWeight={600}
              px={ 6 }
              colorScheme={ "red" }
              bg={ "red.400" }
                  _hover={{bg: "red.500"}}>
              <Eye size={ 32 } />
                  <span style={{marginLeft: "4px"}}>{t("btnProduct")}</span>
            </Button>

          </Stack>
        </Stack>

        <Flex flex={ 1 } justify={ "center" } align={ "center" } position={ "relative" } w={ "full" }>
          <Blob
                w={"140%"}
                h={"140%"}
            position={ "absolute" }
            top={ "-20%" }

                zIndex={-1}
                color={useColorModeValue("purple.300", "red.400")} />
              <Box className='product3' visibility={'hidden'}
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}>
                <IconButton
                  aria-label={"Play Button"}
                  variant={"ghost"}
                  _hover={{bg: "transparent"}}
                  size={"lg"}
                  color={"white"}
                  position={"absolute"}
                  left={"50%"}
                  top={"50%"}
                  transform={"translateX(-50%) translateY(-50%)"}
                />
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={"../../assets/prod/im1.webp"}
                />
          </Box>
        </Flex>
      </Stack>

      {/* PROD 2 */ }

      <Stack
        align={ "center" }
        spacing={ { base: 8, md: 10 } }
        py={ { base: 20, md: 28 } }
            direction={{base: "column", md: "row"}}>
        <Flex flex={ 1 } justify={ "center" } align={ "center" } position={ "relative" } w={ "full" }>
          <Blob
            w={ "150%" }
            h={ "150%" }
            position={ "absolute" }
            top={ "-20%" }

            zIndex={ -1 }
                color={useColorModeValue("purple.300", "red.400")} />
              <Box className='product4' visibility={'hidden'}
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}>
                <IconButton
                  aria-label={"Play Button"}
                  variant={"ghost"}
                  _hover={{bg: "transparent"}}
                  size={"lg"}
                  color={"white"}
                  position={"absolute"}
                  left={"50%"}
                  top={"50%"}
                  transform={"translateX(-50%) translateY(-50%)"} />
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={"../../assets/prod/im2.jpeg"} />
              </Box>


        </Flex>
            <Stack className='product5' visibility={'hidden'} flex={1} spacing={{base: 2, md: 5}}>
              <Heading lineHeight={1.1} fontWeight={"800"} fontSize={{base: "sm", sm: "xl", lg: "3xl"}}>
            <Text
              as={ "span" }
              position={ "relative" }
              _after={ {
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
                  }}>
                  {t("HeadProd2")}

            </Text>
            <br />
                <Text as={"span"} color={"red.600"}>
                  {t("SubHead0")}
            </Text>
          </Heading>
              <Text color={"gray.600"} fontFamily={'roboto'}>
                {t("TextProd1")}
          </Text>
          <Stack spacing={ { base: 4, sm: 6 } } direction={ { base: "column", sm: "row" } }>
            <Button

              as={ 'a' }
              href={ `/products/devices` }
              rounded={ "full" }
              size={ "lg" }
                  fontWeight={600}
              px={ 6 }
              colorScheme={ "red" }
              bg={ "red.400" }
              _hover={ { bg: "red.500" } }>
                  <Eye size={32} />  <span style={{marginLeft: "4px"}}>{t("btnProduct")}</span>
            </Button>
          </Stack>
        </Stack>
      </Stack>

      {/* PROD 3  */ }

          <Stack className='product6' visibility={'hidden'}
        align={ "center" }
        spacing={ { base: 8, md: 10 } }
        py={ { base: 20, md: 28 } }
            direction={{base: "column", md: "row"}}>
            <Stack flex={1} spacing={{base: 2, md: 5}}>
              <Heading lineHeight={1.1} fontWeight={"800"} fontSize={{base: "sm", sm: "xl", lg: "3xl"}}>
            <Text
              as={ "span" }
              position={ "relative" }
              _after={ {
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
                  }}>
                  {t("HeadProd3")}

            </Text>
            <br />
                <Text as={"span"} color={"red.600"}>
                  {t("SubHead0")}
            </Text>
          </Heading>
              <Text color={"gray.600"} fontFamily={'roboto'}>
                {t("TextProd2")}
          </Text>
          <Stack spacing={ { base: 4, sm: 6 } } direction={ { base: "column", sm: "row" } }>
            <Button

              as={ 'a' }
              href={ `/products/parts` }
              rounded={ "full" }
              size={ "lg" }
                  fontWeight={600}
              px={ 6 }
              colorScheme={ "red" }
              bg={ "red.400" }
                  _hover={{bg: "red.500"}}>
                  <Eye size={32} />  <span style={{marginLeft: "4px"}}>{t("btnProduct")}</span>
            </Button>
          </Stack>
        </Stack>

        <Flex flex={ 1 } justify={ "center" } align={ "center" } position={ "relative" } w={ "full" }>
          <Blob
            w={ "150%" }
            h={ "150%" }
            position={ "absolute" }
            top={ "-20%" }

            zIndex={ -1 }
                color={useColorModeValue("purple.300", "red.400")} />
              <Box className='product7' visibility={'hidden'}
            position={ "relative" }
            height={ "300px" }
            rounded={ "2xl" }
            boxShadow={ "2xl" }
            width={ "full" }
                overflow={"hidden"}>
            <IconButton
              aria-label={ "Play Button" }
              variant={ "ghost" }
              _hover={ { bg: "transparent" } }
              size={ "lg" }
              color={ "white" }
              position={ "absolute" }
              left={ "50%" }
              top={ "50%" }
                  transform={"translateX(-50%) translateY(-50%)"} />
            <Image
              alt={ "Hero Image" }
              fit={ "cover" }
              align={ "center" }
              w={ "100%" }
              h={ "100%" }
                  src={"../../assets/prod/im3.webp"} />
          </Box>
        </Flex>
      </Stack>


      {/* PROD 4 */ }

          <Stack
            align={"center"}
            spacing={{base: 8, md: 10}}
            py={{base: 20, md: 28}}
            direction={{base: "column", md: "row"}}>
            <Flex className='product8' visibility={'hidden'} flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <Blob
            w={ "150%" }
            h={ "150%" }
            position={ "absolute" }
            top={ "-20%" }

            zIndex={ -1 }
                color={useColorModeValue("purple.300", "red.400")} />
          <Box
            position={ "relative" }
            height={ "300px" }
            rounded={ "2xl" }
            boxShadow={ "2xl" }
            width={ "full" }
                overflow={"hidden"}>
            <IconButton
              aria-label={ "Play Button" }
              variant={ "ghost" }
              _hover={ { bg: "transparent" } }
              size={ "lg" }
              color={ "white" }
              position={ "absolute" }
              left={ "50%" }
              top={ "50%" }
                  transform={"translateX(-50%) translateY(-50%)"} />
            <Image
              alt={ "Hero Image" }
              fit={ "cover" }
              align={ "center" }
              w={ "100%" }
              h={ "100%" }
                  src={"../../assets/prod/im41.jpeg"} />
          </Box>
            </Flex>


            <Stack className='product9' visibility={'hidden'} flex={1} spacing={{base: 2, md: 5}}>
              <Heading lineHeight={1.1} fontWeight={"800"} fontSize={{base: "sm", sm: "xl", lg: "3xl"}}>
            <Text
              as={ "span" }
              position={ "relative" }
              _after={ {
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
                  }}>
                  {t("HeadProd4")}

            </Text>
            <br />
                <Text as={"span"} color={"red.600"}>
                  {t("SubHead0")}
            </Text>
          </Heading>
              <Text color={"gray.600"} fontFamily={'roboto'}>
                {t("TextProd3")}
          </Text>
          <Stack spacing={ { base: 4, sm: 6 } } direction={ { base: "column", sm: "row" } }>
            <Button

              as={ 'a' }
              href={ `/products/audiovisuel` }
              rounded={ "full" }
              size={ "lg" }
                  fontWeight={600}
                  px={6} 
              colorScheme={ "red" }
              bg={ "red.400" }
                  _hover={{bg: "red.500"}}>
                  <Eye size={32} />   <span style={{marginLeft: "4px"}}>{t("btnProduct")}</span>
            </Button>
          </Stack>
        </Stack>

          </Stack>
        </Box>

      </Layout> </>
  );
}
export default Products;

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

export const Blob = (props: IconProps) => {
  return (
    <Icon width={"100%"} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

