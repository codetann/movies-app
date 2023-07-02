import { useEffect } from "react";
import { useState } from "react";
import { movies } from "../../api";
import { MovieCard } from "../../components";
import { HStack, Text } from "@chakra-ui/react";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMoviesResponse = await movies.getPopular();
      const topRatedMoviesResponse = await movies.getTopRated();
      const upcomingMoviesResponse = await movies.getUpcoming();

      setPopularMovies(popularMoviesResponse.results);
      setTopRatedMovies(topRatedMoviesResponse.results);
      setUpcomingMovies(upcomingMoviesResponse.results);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Text color="whiteAlpha.900">Popular Movies</Text>
      <HStack overflow="scroll">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </HStack>
    </div>
  );
}
