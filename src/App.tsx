import { Flex } from "rebass";
import { Body } from "./Components/Body/Body";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        bg: "white", // #F6F6F6 "#FFDEAD"
        pt: ["15px", "20px", "25px", "45px", 45],
        color: "#0B132A",
        fontSize: [13, 16],
        flex: 1,
        maxWidth: ["100%", 1440],
        alignItems: "center",
        margin: "0 auto",
        px: ["10px", "20px", "20px", "150px", 150],
        boxSizing: "border-box",
      }}
    >
      <Header />
      <Body />
    </Flex>
  );
}

export default App;
