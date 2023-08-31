import { Grid, GridItem } from "@chakra-ui/react";
import { MovieCard } from "../../components";
import { useFavorites } from "../../hooks";

export default function Favorites() {
  const [favorites] = useFavorites();

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={5}>
      {Object.keys(favorites)
        .map((key) => favorites[key])
        .map((movie) => (
          <GridItem key={movie.id} colSpan={1}>
            <MovieCard key={movie.id} movie={movie} />
          </GridItem>
        ))}
    </Grid>
  );
}
