import { Flex, Image, Text } from "rebass";

import { FaStar } from "../Icons/Star";

export type ReviewCardProps = {
  image: string;
  name: string;
  location: string;
  rating: string;
  message: string;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  name,
  location,
  rating,
  message,
}) => (
  <Flex
    alignItems="center"
    key={name}
    flexDirection="column"
    sx={{
      mx: 15,
      width: ["auto", 360],
      height: 230,
      my: [10, 0],
      bg: "white",
      borderRadius: 10,
      border: "2px solid #DDDDDD",
      p: 25,
      ":hover": { border: "2px solid #F53838" },
    }}
  >
    <Flex justifyContent="space-between" width={"100%"}>
      <Image
        alt={name}
        width={50}
        sx={{
          borderRadius: "50%",
        }}
        src={image}
      />
      <Flex flexDirection="column" pl={3} flex={1}>
        <Text fontSize={18} fontWeight={500}>
          {name}
        </Text>
        <Text fontSize={14} color="#4F5665">{location}</Text>
      </Flex>
      <Text>
        {rating} <FaStar />
      </Text>
    </Flex>
    <Text mt={15} lineHeight="25px" color="#0B132A">
      {message}
    </Text>
  </Flex>
);
