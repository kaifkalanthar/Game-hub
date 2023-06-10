import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Box minWidth="60px">
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
