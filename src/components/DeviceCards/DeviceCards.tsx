import { Box, Flex, Heading, Image, Stack, useColorModeValue } from '@chakra-ui/react';

function DeviceCards({title, img}: any) {
  return (
    <Box
      w={ "full" }
      bg={ useColorModeValue("white", "gray.800") }
      rounded={ "md" }
      p={ 6 }
      overflow={"hidden"}>  <Box _hover={{
        transform: 'scale(1.2)',
      }}>
      <Flex
        justifyContent={ 'center' }
          h={{base: 50, sm: 70, md: 50, lg: 90}} maxH={'full'}

          mt={4}
        mx={ -6 }
        mb={ 2 }>
        <Image src={ `../../assets/equip-reseau/${img}` } />
      </Flex>
        <Stack px={4}>

        <Heading
          textAlign={ "center" } 
          color={ useColorModeValue("gray.600", "white") }
          fontSize={ "md" }
          fontFamily={ "body" }>
          { title }
        </Heading>
        </Stack> </Box>
    </Box>
  );
}

export default DeviceCards;
