import { Image, Flex, Text } from "rebass";

import { Link } from "../Common/Link";
import { SecondaryButton } from "../Common/SecondaryButton";

export const Header: React.FC = () => {
  const navItems: string[] = [
    "About",
    "Features",
    "Pricing",
    "Testimonials",
    "Help",
  ];

  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        height: 50,
        width: "100%",
        alignItems: "center",
        fontSize: 16,
        lineHeight: "19px",
      }}
    >
      <Image alt="logo" src="Assets/Logo.png" sx={{ width: 120 }} />
      <Flex
        flex={1}
        display={["none !important", "flex !important"]}
        justifyContent="center"
      >
        {navItems.map((e) => (
          <Link label={e} key={e + "nav"} />
        ))}
      </Flex>
      <Flex alignItems="center">
        <Text
          sx={{
            mx: [10, 20],
            fontWeight: 500,
            ":hover": { cursor: "pointer" },
          }}
        >
          Sign In
        </Text>
        <SecondaryButton label={"Sign Up"} />
      </Flex>
    </Flex>
  );
};
