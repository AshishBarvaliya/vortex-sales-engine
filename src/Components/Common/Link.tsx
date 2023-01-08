import { Text, TextProps } from "rebass";

export const Link: React.FC<{ label: string; key: string } & TextProps> = ({
  label,
  ...props
}) => (
  <Text
    sx={{
      mx: 20,
      color: "#4F5665",
      ":hover": { cursor: "pointer", color: "black" },
    }}
    {...props}
  >
    {label}
  </Text>
);
