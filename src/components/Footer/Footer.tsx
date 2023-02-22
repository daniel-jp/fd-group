import {
  Box,
  chakra,
  Container,
  Flex,
  IconButton,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { EnvelopeSimple, Globe, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import { Check } from 'phosphor-react';
import React, { ReactNode, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={ useColorModeValue("blackAlpha.100", "whiteAlpha.100") }
      rounded={ "full" }
      w={ 8 }
      h={ 8 }
      cursor={ "pointer" }
      as={ "a" }
      href={ href }
      display={ "inline-flex" }
      alignItems={ "center" }
      justifyContent={ "center" }
      transition={ "background 0.3s ease" }
      _hover={ {
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}>
      <VisuallyHidden>{ label }</VisuallyHidden>
      { children }
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={ "500" } fontSize={ "lg" } mb={ 2 }>
      { children }
    </Text>
  );
};

function Footer() {

  useEffect(() => {

    sr.reveal('.foots1', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    },);

    sr.reveal('.foots2', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.foots3', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.foots4', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.foots5', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.foots6', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.foots7', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });
  }, []);


  const {t} = useTranslation();
  return (
    <>
      <Box bg={ useColorModeValue("gray.800", "white") } color={ useColorModeValue("gray.300", "gray.200") }>
        <Container overflowY={"hidden"} overflowX={"hidden"} justifyContent={"center"} as={Stack} maxW={"6xl"} py={10} pb={-10} textAlign={"justify"}>

          <SimpleGrid templateColumns={{sm: "1fr 1fr", md: "3fr 2fr 2fr 2fr"}} spacing={{base: 5, lg: 6}}>
            <Stack spacing={ 2 }>
              <Box>
                <Image
                  border="1px solid gray.700"
                  borderRadius="6px"
                  bg={ "gray.700" }
                  h={ "60px" }
                  src={ "../../assets/logo/lo-test.png" }
                />
              </Box>

              <Box className={'foots1'} visibility={'hidden'} textAlign={"start"} pb={"2px"}>

                <ListHeader>{t("fOff")}</ListHeader>
                <Text fontSize={ 20 } color={ "red.400" }>
                  Angola
                </Text>
                <Text textAlign={ "justify" } fontSize={ "sm" }>
                  Distrito Ingombota Rua Bartolomeu Dias Zona 4 Casa N 1 Luanda / Angola
                </Text>
                <Text fontSize={ 20 } color={ "red.400" }>
                  {t("fContactUs")}
                </Text>
                <Text pb={ "3px" } textAlign={ "justify" } fontSize={ "sm" }>
                  info@fdgroup.company
                </Text>
                <Text pb={ "2px" } textAlign={ "justify" } fontSize={ "sm" }>
                  +244 927 538 808 / +244 931901243
                </Text>
              </Box>


              <Stack className={'foots2'} visibility={'hidden'} direction={"row"} spacing={4}>
                <SocialButton label={ "Twitter" } href={ "https://twitter.com/FDGROUP2" }>
                  <Text
                    _hover={ {
                      cursor: "pointer",
                      color: "gray.400",
                      transform: "scale(1.3)",
                    }}>
                    <TwitterLogo color="#822727" size={ 32 } />
                  </Text>
                </SocialButton>
                <SocialButton label={ "Linkedin" } href={ "https://www.linkedin.com/company/fdgroupe" }>
                  <Text
                    _hover={ {
                      cursor: "pointer",
                      color: "gray.400",
                      transform: "scale(1.3)",
                    }}>
                    <LinkedinLogo color="#822727" size={ 32 } />
                  </Text>
                </SocialButton>
                <SocialButton label={ "Globe" } href={ "www.fdgroup.company" }>
                  <Text
                    _hover={ {
                      cursor: "pointer",
                      color: "gray.400",
                      transform: "scale(1.3)",
                    }}>
                    <Globe size={ 32 } color="#822727" />
                  </Text>
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>{t("fCompany")}</ListHeader>
              <Link className={'foots3'} visibility={'hidden'} href={"/about"}>
                {t("home3")}
              </Link>
              <Link className={'foots4'} visibility={'hidden'} href={"/products"}>
                {t("home1")}
              </Link>
              <Link className={'foots5'} visibility={'hidden'} href={"/services"}>
                {t("home2")}
              </Link>
              <Link className={'foots6'} visibility={'hidden'} href={"#"}>
                {t("fTermService")}
              </Link>
              <Link className={'foots7'} visibility={'hidden'} href={"/contact"}>
                {t("home4")}
              </Link>

            </Stack>
            <Stack align={ "flex-start" }>

              <ListHeader>{t("fSupport")}</ListHeader>

              <Link className={'foots3'} visibility={'hidden'} href={"/services"}>
                {t("fHelpCenter")}
              </Link>
              <Link className={'foots4'} visibility={'hidden'} href={"/services"}>
                {t("name2")}

              </Link>
              <Link className={'foots5'} visibility={'hidden'} href={"/services"}>
                {t("fPrivPolicy")}
              </Link>
              <Link className={'foots6'} visibility={'hidden'} href={"/services"}>
                {t("name3")}
              </Link>
              <Link className={'foots7'} visibility={'hidden'} href={"/products"}>
                {t("fSale")}
              </Link>

            </Stack>
            <Stack align={ "flex-start" }>
              <ListHeader>{t("fStay")}</ListHeader>
              <Stack direction={ "row" }>
                <Input
                  placeholder={ "Your email address" }
                  bg={ useColorModeValue("whiteAlpha.100", "blackAlpha.100") }
                  border={ 0 }
                  _focus={ {
                    bg: "whiteAlpha.300",
                  }} />
                <IconButton
                  bg={ useColorModeValue("green.400", "green.800") }
                  color={ useColorModeValue("red.800", "gray.800") }
                  _hover={ {
                    bg: "green.600",
                  } }
                  aria-label="Subscribe"
                  icon={ <EnvelopeSimple size={ 32 } /> }
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={ 8 }>
          <Box borderTop={ "1px solid" } borderColor={ "gray.700" }>
            <Text pt={ 6 } color={ "gray.600" } fontSize={ "sm" } textAlign={ "center" }>
              {t("fReserved")}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Footer;
