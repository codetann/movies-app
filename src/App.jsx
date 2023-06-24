import { useState, useEffect } from "react";
import { getPopularMovies } from "./api";
import "./App.css";

function App() {
  const [popular, setPopular] = useState([]);

  const handleFetch = async () => {
    const data = await getPopularMovies();

    setPopular(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <p className="test">Movie App</p>
      {popular.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </>
  );
}

export default App;
