import { VStack, Image } from "@chakra-ui/react";
import { movies } from "../../api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const backdrop = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

  useEffect(() => {
    const fetchMovie = async () => {
      const id = location.pathname.split("/")[2];
      const movieResponse = await movies.getMovieById(id);
      setMovie(movieResponse);
    };

    fetchMovie();
  }, [location]);

  return (
    <VStack w="100%" h="100%" overflow="auto">
      <Image
        src={backdrop}
        alt={movie.title}
        w="100%"
        pos="relative"
        zIndex={1}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "red",
          zIndex: 2,
        }}
      />
      <button onClick={() => console.log(movie)}>log</button>
    </VStack>
  );
}
