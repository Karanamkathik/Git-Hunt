import React from "react";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: "#000000", // Define your custom black color
  },
  styles: {
    global: {
      body: {
        color: "black" , // Set the default text color to black
        bg: "white", // You can also set the default background color if needed
       
      },
    },
  },
});

export default theme;
