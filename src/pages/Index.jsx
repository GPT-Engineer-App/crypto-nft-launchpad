import { Container, VStack, HStack, Box, Text, Button, Image, IconButton, Input, InputGroup, InputRightElement, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaRocket, FaEthereum, FaSearch, FaShoppingCart, FaWallet } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" mb={8}>
        <Heading as="h1" size="lg">
          Crypto Launchpad & NFT Marketplace
        </Heading>
        <HStack spacing={4}>
          <IconButton aria-label="Wallet" icon={<FaWallet />} size="lg" />
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
        </HStack>
      </HStack>

      {/* Hero Section */}
      <VStack spacing={6} mb={16} textAlign="center">
        <Heading as="h2" size="2xl">
          Launch Your Crypto Project
        </Heading>
        <Text fontSize="lg">Join the future of decentralized finance and digital art.</Text>
        <Button colorScheme="teal" size="lg" leftIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>

      {/* Search Bar */}
      <InputGroup mb={8}>
        <Input placeholder="Search NFTs or Projects" />
        <InputRightElement children={<FaSearch />} />
      </InputGroup>

      {/* Featured NFTs */}
      <Heading as="h3" size="lg" mb={4}>
        Featured NFTs
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={16}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZnQlMjBhcnQlMjAxfGVufDB8fHx8MTcxNzMxNTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="NFT Art 1" />
          <Box p={4}>
            <Text fontWeight="bold">NFT Art 1</Text>
            <HStack justifyContent="space-between">
              <Text>1.5 ETH</Text>
              <Button colorScheme="teal" size="sm">
                Buy Now
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZnQlMjBhcnQlMjAyfGVufDB8fHx8MTcxNzMxNTk5N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="NFT Art 2" />
          <Box p={4}>
            <Text fontWeight="bold">NFT Art 2</Text>
            <HStack justifyContent="space-between">
              <Text>2.0 ETH</Text>
              <Button colorScheme="teal" size="sm">
                Buy Now
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZnQlMjBhcnQlMjAzfGVufDB8fHx8MTcxNzMxNTk5N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="NFT Art 3" />
          <Box p={4}>
            <Text fontWeight="bold">NFT Art 3</Text>
            <HStack justifyContent="space-between">
              <Text>3.0 ETH</Text>
              <Button colorScheme="teal" size="sm">
                Buy Now
              </Button>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>

      {/* Launchpad Section */}
      <Heading as="h3" size="lg" mb={4}>
        Upcoming Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1644361566696-3d442b5b482a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjBwcm9qZWN0JTIwMXxlbnwwfHx8fDE3MTczMTU5OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Crypto Project 1" />
          <Box p={4}>
            <Text fontWeight="bold">Crypto Project 1</Text>
            <HStack justifyContent="space-between">
              <Text>Launching Soon</Text>
              <Button colorScheme="teal" size="sm">
                Learn More
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1644361566696-3d442b5b482a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjBwcm9qZWN0JTIwMnxlbnwwfHx8fDE3MTczMTU5OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Crypto Project 2" />
          <Box p={4}>
            <Text fontWeight="bold">Crypto Project 2</Text>
            <HStack justifyContent="space-between">
              <Text>Launching Soon</Text>
              <Button colorScheme="teal" size="sm">
                Learn More
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1644361566696-3d442b5b482a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjBwcm9qZWN0JTIwM3xlbnwwfHx8fDE3MTczMTU5OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Crypto Project 3" />
          <Box p={4}>
            <Text fontWeight="bold">Crypto Project 3</Text>
            <HStack justifyContent="space-between">
              <Text>Launching Soon</Text>
              <Button colorScheme="teal" size="sm">
                Learn More
              </Button>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>

      {}
      <Heading as="h3" size="lg" mb={4}>
        Hottest Most Transacted Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={16}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmFuc2FjdGVkfGVufDB8fHx8MTcxNzMxNTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Transacted Project 1" />
          <Box p={4}>
            <Text fontWeight="bold">Transacted Project 1</Text>
            <HStack justifyContent="space-between">
              <Text>5000 ETH</Text>
              <Button colorScheme="teal" size="sm">
                View Details
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmFuc2FjdGVkfGVufDB8fHx8MTcxNzMxNTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Transacted Project 2" />
          <Box p={4}>
            <Text fontWeight="bold">Transacted Project 2</Text>
            <HStack justifyContent="space-between">
              <Text>4500 ETH</Text>
              <Button colorScheme="teal" size="sm">
                View Details
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmFuc2FjdGVkfGVufDB8fHx8MTcxNzMxNTk5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Transacted Project 3" />
          <Box p={4}>
            <Text fontWeight="bold">Transacted Project 3</Text>
            <HStack justifyContent="space-between">
              <Text>4000 ETH</Text>
              <Button colorScheme="teal" size="sm">
                View Details
              </Button>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>

      {}
      <Heading as="h3" size="lg" mb={4}>
        Most Active on Social Media
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1517260911058-0fcfd733702f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3MTczMTU5OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Social Media Project 1" />
          <Box p={4}>
            <Text fontWeight="bold">Social Media Project 1</Text>
            <HStack justifyContent="space-between">
              <Text>100K Followers</Text>
              <Button colorScheme="teal" size="sm">
                View Details
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1517260911058-0fcfd733702f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3MTczMTU5OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Social Media Project 2" />
          <Box p={4}>
            <Text fontWeight="bold">Social Media Project 2</Text>
            <HStack justifyContent="space-between">
              <Text>90K Followers</Text>
              <Button colorScheme="teal" size="sm">
                View Details
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1517260911058-0fcfd733702f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3MTczMTU5OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Social Media Project 3" />
          <Box p={4}>
            <Text fontWeight="bold">Social Media Project 3</Text>
            <HStack justifyContent="space-between">
              <Text>85K Followers</Text>
              <Button colorScheme="teal" size="sm">
                View Details
              </Button>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
