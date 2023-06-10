import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops.....</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Page dose not exist"
            : "Unexpected Error Occurred"}{" "}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
