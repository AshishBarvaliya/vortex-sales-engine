import { Image, Flex, Text } from "rebass";
import { PlanCard } from "./PlanCard";

import { cards, reviews } from "../../MockData/Data";
import { ReviewCard } from "./ReviewCard";
import { HighlightedCard } from "../Common/HighlightedCard";
import { PrimaryButton } from "../Common/PrimaryButton";

export const PlansSection: React.FC = () => {
  return (
    <Flex flex={1} bg="#FCFCFC" flexDirection="column" mx={["-14px", "-150px"]}>
      <Flex py={70} flexDirection="column" alignItems="center">
        <Heading
          title="Choose Your Plan"
          subTitle="Let's choose the package that is best for you and explore it happily and cheerfully."
        />
        <Flex mt={60} flexDirection={["column", "row"]}>
          {cards.map((card) => (
            <PlanCard {...card} />
          ))}
        </Flex>
      </Flex>

      <Flex py={[20, 70]} flexDirection="column" alignItems="center">
        <Heading
          title="Grow your business with Vortex."
          subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Image
          alt="HugeGlobal"
          mt={[40, 150]}
          width={1000}
          src="Assets/HugeGlobal.png"
        />
        <Image
          alt="Sponsored"
          mt={[40, 50]}
          width={1200}
          src="Assets/Sponsored.png"
        />
      </Flex>

      <Flex pb={[20, 100]} flexDirection="column" alignItems="center">
        <Heading
          title="Trusted by Thousands of Happy Customer"
          subTitle="These are the stories of our customers who have joined us with great pleasure when using this crazy feature."
        />
        <Flex mt={60} flexDirection={["column", "row"]}>
          {reviews.map((r) => (
            <ReviewCard {...r} />
          ))}
        </Flex>
      </Flex>

      <HighlightedCard
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mx: [20, 150],
          mb: -100,
          height: ["auto", 233],
          px: [30, 70],
          py: [50, 0],
        }}
      >
        <Flex flexDirection="column" justifyContent="center">
          <Text
            maxWidth={[350, 380]}
            textAlign="center"
            fontSize={35}
            fontWeight={500}
          >
            Subscribe Now for Get Special Features!
          </Text>
          <Text
            color="#4F5665"
            maxWidth={[300, 500]}
            textAlign="center"
            mt={20}
          >
            Let's subscribe with us and find the fun.
          </Text>
        </Flex>
        <PrimaryButton label="Subscribe Now" mt={[40, 0]} />
      </HighlightedCard>
    </Flex>
  );
};

const Heading: React.FC<{ title: string; subTitle: string }> = ({
  title,
  subTitle,
}) => (
  <>
    <Text
      maxWidth={[350, 380]}
      textAlign="center"
      fontSize={35}
      fontWeight={500}
    >
      {title}
    </Text>
    <Text color="#4F5665" maxWidth={[300, 500]} textAlign="center" mt={20}>
      {subTitle}
    </Text>
  </>
);
