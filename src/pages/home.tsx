import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

import Footer from '../components/Footer/Footer';
import ProdCard from '../components/Home/FdCard';
import FdCarousel from '../components/Home/FdCarousel';
import Marque from '../components/Home/FdMarque';
import Suport from '../components/Home/FdSuport';
import Testimo from '../components/Home/FdTestimo';
import SwiperCard from '../components/Home/SwiperCard';
import NavBar from '../components/NavBar/Navbar';
import SimpleLayout from '../layout/SimpleLayout';






export default function Home() {
  return (
    <Box as="main" margin="0" padding="0" bg={"gray.100"} overflowX={'hidden'} >
      <NavBar />
      <FdCarousel />
      <SimpleLayout>
        <Suport />
        <ProdCard />
        <SwiperCard />
        <Testimo />
      </SimpleLayout>
      <Marque />
      <Footer />
    </Box>
  );
}
