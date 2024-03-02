import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      background="white"
    >
      <Image src={imageSrc} borderRadius="lg" alt={`Image for ${title}`} />

      <VStack
        p={5}
        alignItems="flex-start"
        justifyContent="space-between"
        h="100%"
      >
        <VStack alignItems="flex-start" spacing={3}>
          <Heading
            size="md"
            color="black"
            fontWeight="semibold"
            lineHeight="tight"
          >
            {title}
          </Heading>
          <Text fontSize="sm" color="black">
            {description}
          </Text>
          <Link>
            <HStack>
              <Text fontSize="sm" fontWeight="semibold" color="black">
                See more
              </Text>
              <FontAwesomeIcon icon={faArrowRight} color="black" />
            </HStack>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
