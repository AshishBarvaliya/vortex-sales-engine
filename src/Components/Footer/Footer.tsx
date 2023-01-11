import { Image, Flex, Text, Link as RLink, Box } from "rebass";

import { footerDetails } from "../../MockData/Data";
import { Link } from "../Common/Link";
import { FaFb } from "../Icons/Fb";
import { FaInstagram } from "../Icons/Instagram";
import { FaTwitter } from "../Icons/Twitter";

export const Footer: React.FC = () => {
  return (
    <Flex width="100%" flexDirection="column">
      <Flex
        mx={["-14px", "-150px"]}
        flex={1}
        flexDirection={["column-reverse", "row"]}
        sx={{
          justifyContent: "space-between",
          pb: [60, 80],
          pt: [140, 150],
          bg: "#F8F8F8",
        }}
      >
        <Flex
          ml={[50, 150]}
          mr={[50, 0]}
          alignItems="baseline"
          width={["auto", 400]}
          flexDirection="column"
        >
          <Image alt="logo" src={"Assets/Logo.png"} sx={{ width: 120 }} />
          <Text color="#4F5665" mt={25}>
            <Text as="span" fontWeight={500}>
              Vortex.
            </Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </Text>
          <Flex mt={30}>
            <FaFb /> <FaTwitter /> <FaInstagram />
          </Flex>
          <Text color="#AFB5C0" mt={"5px"}>
            ©2022vortex
          </Text>
        </Flex>
        <Flex
          flex={1}
          justifyContent="flex-end"
          flexDirection={["column", "row"]}
          mr={[0, 100]}
        >
          {footerDetails.map((e, i) => (
            <Flex
              key={e.title}
              alignItems={["center", "flex-start"]}
              mb={[40, 0]}
              flexDirection="column"
              mx={50}
            >
              <Text
                sx={{
                  mb: 15,
                  mx: 20,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {e.title}
              </Text>
              {e.subtitles.map((sb) => (
                <Link label={sb} key={sb + e.title} my={"10px"} />
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box
        sx={{
          borderTop: "1px solid #E0E0E0",
          display: "flex",
          justifyContent: "center",
          py: ["14px", "20px", "20px"],
          bg: "#F8F8F8",
        }}
      >
        <Text
          fontWeight={400}
          fontFamily="Plus Jakarta Sans"
          color="text.primary"
          fontSize="14px"
        >
          Made by
          <RLink
            href="https://github.com/AshishBarvaliya"
            color="text.primary"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              cursor: "pointer",
              px: "3px",
              ":hover": {
                color: "red",
                fontWeight: 500,
              },
            }}
          >
            Ashish
          </RLink>
          with
          <RLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/"
            color="text.primary"
            sx={{ cursor: "pointer", px: "3px" }}
          >
            React
          </RLink>
          &
          <RLink
            href="https://rebassjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            color="text.primary"
            sx={{ cursor: "pointer", px: "3px" }}
          >
            Rebass
          </RLink>
          . Deployed on
          <RLink
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="text.primary"
            sx={{ cursor: "pointer", px: "3px" }}
          >
            Netlify
          </RLink>
          .
        </Text>
      </Box>
    </Flex>
  );
};
