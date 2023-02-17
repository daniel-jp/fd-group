import { Box, Container, Stack } from '@chakra-ui/react';

import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

export default function Layout({children}: any) {
  return (
    <Box>
      <NavBar />
      <Container as={Stack} maxW={"6xl"} mt={"110px"} py={10} pb={-10} p={2} overflowX={'hidden'} textAlign={"justify"}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
