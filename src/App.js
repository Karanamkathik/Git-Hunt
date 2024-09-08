
import { Box } from "@chakra-ui/react";
import React from "react";
import { Feed } from "./feed";

function App() {
  return (
    <Box width='100vw' minHeight='100vh' bg='gray.200' py={'30px'}>
   <Feed />
    </Box>
  );
}

export default App;
