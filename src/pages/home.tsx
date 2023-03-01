import '@fontsource/inter/600.css';

import { Box, Flex } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

import Footer from '../components/Footer/Footer';
import ProdCard from '../components/Home/FdCard';
import FdCarousel from '../components/Home/FdCarousel';
import Marque from '../components/Home/FdMarque';
import Suport from '../components/Home/FdSuport';
import Testimo from '../components/Home/FdTestimo';
import SwiperCard from '../components/Home/SwiperCard';
import NavBar from '../components/NavBar/NavBar';
import SimpleLayout from '../layout/SimpleLayout';



export default function Home() {
  return (
    <Box as="main" margin="0" padding="0" bg={"gray.100"} overflowY={"hidden"} overflowX={"hidden"} >
      <NavBar />
      <FdCarousel />
      <SimpleLayout>
      <Flex display={'block'} fontFamily={"'Inter', sans-serif"} color={"gray.600"} 
      overflowY={"hidden"} mb={20} overflowX={"hidden"}>
        <Box mt={8}><Suport /></Box>
        <Box mt={20}><ProdCard /></Box>
        <Box mt={10}><SwiperCard /></Box>
        <Box mt={10}><Testimo /></Box>
        </Flex>
      </SimpleLayout>
      <Marque />
      <Footer />
    </Box>
  );
}
