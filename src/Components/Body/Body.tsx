import { Flex } from "rebass";

import { Details } from "./Details";
import { PlansSection } from "./PlansSection";

export const Body: React.FC = () => {
  return (
    <Flex width="100%" flexDirection="column">
      <Details />
      <PlansSection />
    </Flex>
  );
};
