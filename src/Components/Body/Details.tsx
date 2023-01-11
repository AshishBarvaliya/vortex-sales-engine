import { Image, Flex, Text, Box } from "rebass";

import { HighlightedCard } from "../Common/HighlightedCard";
import { PrimaryButton } from "../Common/PrimaryButton";
import { FaCheck } from "../Icons/Check";
import { FaLocation } from "../Icons/Location";
import { FaServer } from "../Icons/Server";
import { FaUsers } from "../Icons/Users";

type Stats = {
  svg: React.ReactElement;
  numbers: string;
  label: string;
}[];

export const Details: React.FC = () => {
  const features: string[] = [
    "At in proin consequat ut cursus venenatis sapien.",
    "Adipiscing arcu facilisis in et.",
    "Felis amet adipiscing blandit gravida orci turpis.",
    "Adipiscing arcu facilisis in et.",
  ];

  const stats: Stats = [
    { svg: <FaUsers />, numbers: "90+", label: "Users" },
    { svg: <FaLocation />, numbers: "30+", label: "Locations" },
    { svg: <FaServer />, numbers: "50+", label: "Servers" },
  ];

  return (
    <Flex flex={1} flexDirection="column">
      <Flex height={570} flex={1} flexDirection={["column-reverse", "row"]}>
        <Flex
          justifyContent="center"
          flexDirection="column"
          width={["100%", "50%"]}
        >
          <Text fontSize={[30, 50]} fontWeight={500}>
            {"Boost your sales with "}
            <Text as="span" fontWeight={700}>
              Vortex
            </Text>
            {" sales engine plus"}
          </Text>
          <Text mt={20}>{"Felis amet adipiscing blandit gravida."}</Text>
          <PrimaryButton label="Get Started" />
        </Flex>
        <Image
          alt="Illustration1"
          my={[40, 100]}
          width={530}
          src="Assets/Illustration1.png"
        />
      </Flex>

      <HighlightedCard>
        {stats.map((e, i) => (
          <Flex
            key={i}
            alignSelf="center"
            justifyContent={["flex-start", "center"]}
            width={[200, 1 / stats.length]}
            sx={{
              py: [40, 20],
              mx: [100, 0],
              borderRight:
                i === stats.length - 1 ? "none" : ["none", "2px solid #EEEFF2"],
              borderBottom:
                i === stats.length - 1 ? "none" : ["2px solid #EEEFF2", "none"],
            }}
          >
            {e.svg}
            <Box ml="35px">
              <Text fontSize={25} fontWeight={700}>
                {e.numbers}
              </Text>
              <Text fontSize={20}>{e.label}</Text>
            </Box>
          </Flex>
        ))}
      </HighlightedCard>

      <Flex height={["auto", 600]} flex={1} flexDirection={["column", "row"]}>
        <Image
          alt="Illustration2"
          my={80}
          width={500}
          src="Assets/Illustration2.png"
        />
        <Flex
          justifyContent="center"
          pl={[0, 140]}
          flexDirection="column"
          width={["100%", "50%"]}
        >
          <Text fontSize={35} fontWeight={500}>
            We Provide Many Features You Can Use
          </Text>
          <Text mt={30}>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </Text>
          <Box as="ul" sx={{ p: 0, mt: 30, listStyleType: "none" }}>
            {features.map((e) => (
              <Box as="li" key={e} fontSize={14} height={20} mb={20}>
                <FaCheck />{" "}
                <Text as="span" pl="8px" verticalAlign="top">
                  {e}
                </Text>
              </Box>
            ))}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
