import { Box, chakra, Flex, Image, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import SimpleLayout from '../../layout/SimpleLayout';
import GetAllMarques from '../../service/MarquesService';


const sr = ScrollReveal();
function FdMarque() {



  useEffect(() => {

    sr.reveal('.marq1', {
      origin: 'bottom',
      distance: '40px',
      duration: 1100,
      opacity: 0,
    },);

    sr.reveal('.marq2', {
      origin: 'bottom',
      distance: '200px',
      duration: 1100,
      opacity: 0,
    });

  }, []);


  const marques = GetAllMarques();

  const {t} = useTranslation();
  return (

    <Flex 
      overflowY={"hidden"} overflowX={"hidden"}
     
      flexDirection={"column"}
      w={"full"}
      justifyContent={"center"}
    py={32}
      px={{base: 2, sm: 12, md: 0}}
      bg={"white"}>

      <chakra.h1 className={'marq1'} visibility={'hidden'} textAlign={"center"} 
      fontSize={"4xl"} pt={10} pb={20}fontWeight={"bold"}  w={"full"}>
        {t("Maques")}
      </chakra.h1>
      <SimpleLayout>
        <SimpleGrid overflowY={"hidden"} overflowX={"hidden"} 
        className={'marq2'} visibility={'hidden'} 
        justifyItems={"center"} columns={{base: 1, md: 5}} spacing={{base: 5, lg: 6}}>
          {marques.map((img, key) => (
            <Box height="30px" key={key}>
              <Image height={"full"} src={img.url} />
            </Box>
          ))}
        </SimpleGrid>
      </SimpleLayout>
    </Flex>
  );
}
export default FdMarque;
