import { VStack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <VStack w="100vw" h="100vh" background="#0f1018">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </VStack>
  );
}

export default App;
