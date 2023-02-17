import { Box, Container } from '@chakra-ui/react';

export default function SimpleLayout({ children, ...rest }:any) {
  return (
    <Box overflowX={'hidden'} >
      <Container maxW={"6xl"} p={-4} w={"full"} {...rest}>
        {children}
      </Container>
    </Box>
  );
}
