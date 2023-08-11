import { useEffect } from "react";
import { useState } from "react";
import { movies } from "../../api";
import { MovieCard } from "../../components";
import { Box, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";

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
    <VStack w="100%" h="100%" overflow="auto">
      <h1>Home</h1>
      <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.900">
        Popular Movies
      </Text>
      <Grid templateColumns="repeat(6, 1fr)" gap={5}>
        {popularMovies.map((movie) => (
          <GridItem key={movie.id} colSpan={1}>
            <MovieCard key={movie.id} movie={movie} />
          </GridItem>
        ))}
      </Grid>
      <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.900">
        Top Rated Movies
      </Text>
      <Grid templateColumns="repeat(6, 1fr)" gap={5}>
        {topRatedMovies.map((movie) => (
          <GridItem key={movie.id} colSpan={1}>
            <MovieCard key={movie.id} movie={movie} />
          </GridItem>
        ))}
      </Grid>
      {/* <HStack overflow="scroll">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </HStack> */}
    </VStack>
  );
}
