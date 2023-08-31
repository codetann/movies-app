import { Box, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      transition="all 0.1s ease-in-out"
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
      _hover={{
        transform: "scale(0.98)",
        opacity: 0.8,
      }}
    >
      <Image src={poster} alt={movie.title} w="15rem" cursor="pointer" />
      <Box
        position="absolute"
        bottom={1}
        right={1}
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
    </Box>
  );
}
