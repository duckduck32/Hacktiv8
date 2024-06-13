import React, { useState, useEffect } from "react";
import Header from "./Header";
import Movie from "./Movie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getMovieRequest = async (searchValue) => {
    setLoading(true);
    let url;
    if (searchValue) {
      url = `https://www.omdbapi.com/?s=${searchValue}&apikey=bdfd4318`;
    } else {
      url = `https://www.omdbapi.com/?s=man&apikey=bdfd4318`;
    }

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      setMovies([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovieRequest("Man");
  }, []);

  return (
    <div className="App">
      <Header
        title="FinProH8"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        search={getMovieRequest}
      />
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="movie-list">
          {movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
