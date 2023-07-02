import { extendTheme } from "@chakra-ui/react";
import { global } from "./global";
import { colors } from "./colors";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  styles: {
    global,
  },
});

export { theme };
