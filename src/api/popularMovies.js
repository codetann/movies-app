export async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
}
