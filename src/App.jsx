import { HStack, VStack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navigation } from "./components";

function App() {
  return (
    <HStack w="100vw" h="100vh" background="#0f1018" overflow="hidden">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HStack>
  );
}

export default App;
