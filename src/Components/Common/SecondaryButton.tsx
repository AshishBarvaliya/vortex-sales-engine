import { Button, ButtonProps } from "rebass";

export const SecondaryButton: React.FC<{label: string} & ButtonProps> = ({label, ...props}) => (
  <Button
    sx={{
      height: [40, 45],
      bg: "transparent",
      color: "#F53855",
      borderRadius: 50,
      border: "1px solid #F53855",
      px: [20, 45],
      fontWeight: 500,
      ":hover": { cursor: "pointer", bg: "#F53838", color: "white" },
    }}
    {...props}
  >
    {label}
  </Button>
);
