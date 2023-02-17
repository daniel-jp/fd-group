import { Box, Flex, Image, Text } from "@chakra-ui/react";

function Error() {
  return (
    <div>
      <Flex hidden justify={"center"} pb={10}>
        <Box>
          <Image w={"full"} src="/src/pages/Error/error1.gif" />
          <Text>ERROR</Text>
        </Box>
      </Flex>
    </div>
  );
}
export default Error;
