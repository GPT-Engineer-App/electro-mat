import { Container, Text, VStack, Box, Heading, Button, IconButton, HStack, Image, Grid, GridItem } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaBox, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Electromat
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your one-stop shop for all electronic needs
        </Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem>
            <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <VStack spacing={4}>
                <IconButton aria-label="Products" icon={<FaBox />} size="lg" />
                <Heading as="h3" size="md">
                  Products
                </Heading>
                <Text>Manage your products</Text>
                <Button colorScheme="teal">Go to Products</Button>
              </VStack>
            </Box>
          </GridItem>

          <GridItem>
            <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <VStack spacing={4}>
                <IconButton aria-label="Customers" icon={<FaUser />} size="lg" />
                <Heading as="h3" size="md">
                  Customers
                </Heading>
                <Text>Manage your customers</Text>
                <Button colorScheme="teal">Go to Customers</Button>
              </VStack>
            </Box>
          </GridItem>

          <GridItem>
            <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <VStack spacing={4}>
                <IconButton aria-label="Orders" icon={<FaShoppingCart />} size="lg" />
                <Heading as="h3" size="md">
                  Orders
                </Heading>
                <Text>Manage your orders</Text>
                <Button colorScheme="teal">Go to Orders</Button>
              </VStack>
            </Box>
          </GridItem>

          <GridItem>
            <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <VStack spacing={4}>
                <IconButton aria-label="Payments" icon={<FaMoneyBillWave />} size="lg" />
                <Heading as="h3" size="md">
                  Payments
                </Heading>
                <Text>Manage your payments</Text>
                <Button colorScheme="teal">Go to Payments</Button>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
