import { Box, Container } from '@chakra-ui/react';

export default function SimpleLayout({ children, ...rest }:any) {
  return (
    <Box overflowX={'hidden'} >
      <Container maxW={"7xl"} p={-4} w={"full"} {...rest}>
        {children}
      </Container>
    </Box>
  );
}
