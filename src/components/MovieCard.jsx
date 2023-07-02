import { Image } from "@chakra-ui/react";

export default function MovieCard({ movie }) {
  const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <Image
      src={poster}
      alt={movie.title}
      w="10rem"
      transition="all 0.1s ease-in-out"
      cursor="pointer"
      _hover={{
        transform: "scale(0.95)",
        opacity: 0.8,
      }}
    />
  );
}
