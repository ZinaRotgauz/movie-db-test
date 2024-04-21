import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard";

const MovieGrid = ({ movies, onClickFavourite, favourites }) => {
  return (
    <Wrapper>
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          onClickFavourite={() => {
            onClickFavourite(movie.id);
          }}
          isFavourite={favourites.includes(movie.id)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 20px 100px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 50px;
`;

export default MovieGrid;
