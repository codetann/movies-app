import { HStack, VStack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Movie, Favorites } from "./pages";
import { Navigation } from "./components";

function App() {
  return (
    <HStack w="100vw" h="100vh" background="#0f1018" overflow="hidden">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </HStack>
  );
}

export default App;
