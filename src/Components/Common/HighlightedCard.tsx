import { Flex, FlexProps } from "rebass";

export const HighlightedCard: React.FC<FlexProps> = ({
  children,
  sx,
  ...props
}) => (
  <Flex
    bg="white"
    mt={[50, 0]}
    height={["auto", 200]}
    flexDirection={["column", "row"]}
    sx={{
      borderRadius: 10,
      mx: [20, 0],
      position: "relative",
      transformStyle: "preserve-3d",
      "::before": {
        pointerEvents: "none",
        content: `""`,
        position: "absolute",
        background: "#0D1025",
        bottom: -20,
        width: ["80%", "95%"],
        height: "20%",
        mx: 30,
        filter: "blur(114px)",
        opacity: 0.6,
        transform: "translateZ(-1px)",
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Flex>
);
