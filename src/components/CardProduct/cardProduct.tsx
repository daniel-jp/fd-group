import { Box, Button, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowCircleRight } from 'phosphor-react';
import { useTranslation } from 'react-i18next';


export default function CardProduct({title, subtitle, description, url, href}: any) {

  const {t} = useTranslation();
  return (
    <Box  
      role={ "group" }
      w={ "full" }
      bg={ useColorModeValue("white", "gray.800") }
      boxShadow={ "2xl" }
      pos={ "relative" }
      zIndex={ 1 }>
      <Box 
        rounded={ "sm" }
      
        pos={ "relative" }
        height={ "180px" }
        bg={"gray.800"} _hover={{
          cursor: "pointer",
          transform: 'scale(1.1)',
        }}
        _after={ {
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          filter: "blur(15px)",
          zIndex: -1,
        } }
        _groupHover={ {
          _after: {
            filter: "blur(20px)",
          },
        }}>


        <Image h={ "full" } w={ "full" } 
          objectFit={ "cover" }
          src={ `../../assets/cardpupblish/${url}` } />
      </Box>

      <Stack pt={ 4 } p={ 2 } textAlign={ "center" } align={ "center" } h={ "full" }>

        <Text fontWeight={ "500" } color={ "red.700" }
          fontSize={ "md" } textTransform={ "uppercase" }>
          {title.length > 25 ? title.slice(0, 25).concat("...") : title}
        </Text>

        <Heading color={ "gray.600" }
          pb={ 20 } fontSize={ "1xl" }
          fontFamily="body" fontWeight={ 700 } h={ 50 }>
          { description.length > 30 ? description.slice(0, 79) : description }
          {/* { subtitle.length > 30 ? subtitle.slice(0, 79).concat("...") : subtitle } */ }
        </Heading>

        <Button
          as={ "a" }
          href={`${href}`} 
          borderRadius={ 1 }
          pt={ 2 }
          fontFamily="raleway"
          fontSize={ 16 }
          color="white"
          p="10px"
          fontWeight="bold"
          bgImage="linear-gradient(90deg, #822727 0%, #1A202C 100%);"
          _hover={ {
            cursor: "pointer",
            color: "gray.400",
            transform: "scale(1.1)",
            bgImage: "linear-gradient(90deg, #822727 0%, #1A202C 100%);",
          } }>
          <Text p={2}>{t("btView")}</Text>
          <ArrowCircleRight size={ 18 } />
        </Button>


      </Stack>

    </Box>
  );
}
