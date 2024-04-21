import React, { useEffect, useState } from "react";
import styled from "styled-components";

import MovieGrid from "../../components/MovieGrid";
import TmdbService from "../../services/tmdbService";

const MainPage = ({ favourites, onClickFavourite, showingFavourites }) => {
  const [movies, setMovies] = useState([]);

  const tmdbService = new TmdbService();

  useEffect(() => {
    if (!movies.length) {
      tmdbService._getMovies().then((result) => {
        setMovies(result.results);
      });
    }
  }, [movies]);

  return (
    <Wrapper>
      <Title>{!!movies?.length ? "Playing now" : "Loading..."}</Title>
      {!!movies?.length && (
        <MovieGrid
          movies={
            showingFavourites
              ? movies.filter(function (el) {
                  return favourites.includes(el.id);
                })
              : movies
          }
          onClickFavourite={onClickFavourite}
          favourites={favourites}
        />
      )}
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div``;

const Title = styled.h2`
  font-family: "Notable", sans-serif;
  font-size: 60px;
  color: #f1c730;
  margin: 40px auto;
  text-align: center;
`;
