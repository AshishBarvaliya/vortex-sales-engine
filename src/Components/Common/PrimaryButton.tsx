import { Button, ButtonProps } from "rebass";

export const PrimaryButton: React.FC<{ label: string } & ButtonProps> = ({
  label,
  ...props
}) => (
  <Button
    sx={{
      mt: 50,
      height: [45, 60],
      color: "white",
      bg: "#F53838",
      borderRadius: "10px",
      width: [150, 250],
      fontWeight: 700,
      boxShadow: "0 8px 30px -6px #F53838",
      ":hover": { cursor: "pointer", bg: "#b71818" },
    }}
    {...props}
  >
    {label}
  </Button>
);
