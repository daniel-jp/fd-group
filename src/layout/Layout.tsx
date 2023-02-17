import {Box, Container, Stack} from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/NavBar/Navbar';

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <Container as={Stack} maxW={"7xl"} mt={"110px"} py={10} pb={-10} p={2} overflowX={'hidden'} textAlign={"justify"}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
