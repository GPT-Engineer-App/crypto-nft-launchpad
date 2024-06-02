import { Box, Heading, Text } from "@chakra-ui/react";

function MyNFTs() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        My NFT Collection
      </Heading>
      <Text>Here you can see the NFTs you already have in your wallet, news from those collections or social media about them, your favorited collections, and your calendar for purchases.</Text>
      <Heading as="h2" mt={10}>
        Suggested NFTs
      </Heading>
      <Text>Explore suggested NFTs to complement your current collection and build a well-rounded portfolio.</Text>
    </Box>
  );
}

export default MyNFTs;
