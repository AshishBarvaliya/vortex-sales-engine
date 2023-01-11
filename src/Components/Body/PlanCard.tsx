import { Flex, Box, Image, Text } from "rebass";

import { SecondaryButton } from "../Common/SecondaryButton";
import { FaCheck2 } from "../Icons/Check2";

export type PlanCardProps = {
  title: string;
  features: string[];
  rate: string;
  id: string;
};

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  features,
  rate,
  id,
}) => (
  <Flex
    alignItems="center"
    key={id}
    flexDirection="column"
    sx={{
      mx: 25,
      width: 330,
      height: [670, 760],
      my: [10, 0],
      bg: "white",
      borderRadius: 5,
      border: "2px solid #DDDDDD",
      p: [40, 50],
      ":hover": { border: "2px solid #F53838" },
    }}
  >
    <Image alt="Premium" my={[15, 20]} width={150} src="Assets/Premium.png" />
    <Text mt={20} fontSize={18} fontWeight={500}>
      {title}
    </Text>

    <Box
      as="ul"
      sx={{ p: 0, mt: 30, minHeight: [180, 280], listStyleType: "none" }}
    >
      {features.map((e) => (
        <Box as="li" key={e + title} fontSize={14} height={20} mb={20}>
          <FaCheck2 />
          <Text as="span" pl="15px" verticalAlign="top">
            {e}
          </Text>
        </Box>
      ))}
    </Box>
    <Text my={20} fontSize={25} fontWeight={500}>
      {rate}
    </Text>
    <SecondaryButton width={177} label={"Select"} />
  </Flex>
);
