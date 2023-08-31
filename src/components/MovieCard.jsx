import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { FaStar, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";

export default function MovieCard({ movie }) {
  const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const navigate = useNavigate();
  const [favorites, toggleFavorite, isFavorite] = useFavorites();

  return (
    <Box
      position="relative"
      transition="all 0.1s ease-in-out"
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
      _hover={{
        transform: "scale(0.99)",
      }}
    >
      <Image src={poster} alt={movie.title} w="15rem" cursor="pointer" />
      <HStack position="absolute" bottom={1} right={1}>
        <Box
          p=".2rem .5rem"
          bg="yellow.500"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap=".2rem"
        >
          <FaStar size={12} color="yellow" />

          <Text fontWeight="bold" fontSize="sm">
            {movie.vote_average}
          </Text>
        </Box>
        <Box
          p=".2rem .5rem"
          h="2.5rem"
          w="2.5rem"
          bg="transparent"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap=".2rem"
          cursor="pointer"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(movie.id, movie);
          }}
          transition={"all 0.2s ease-in-out"}
          _hover={{
            transform: "scale(1.3)",
          }}
          _active={{
            transform: "scale(.9)",
          }}
        >
          <FaHeart size={15} color={isFavorite(movie.id) ? "red" : "white"} />
        </Box>
      </HStack>
    </Box>
  );
}
