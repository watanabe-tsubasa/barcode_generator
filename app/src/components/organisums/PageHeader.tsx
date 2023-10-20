import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

const PageHeader = () => {
  const handleScrollToTop = () => {
    window.scrollTo({top:0, behavior: 'smooth' });
  };
  return (
    <Box bg="darkcyan" py={1} position="sticky" top={0} left={0} right={0} zIndex="sticky">
      <Flex align="center" justifyContent="start" ml={4}>
        <Heading color="white">バーコード生成</Heading>
        <Spacer />
        <Button mr={4}  onClick={handleScrollToTop}>up</Button>
      </Flex>
    </Box>
  );
}

export { PageHeader };