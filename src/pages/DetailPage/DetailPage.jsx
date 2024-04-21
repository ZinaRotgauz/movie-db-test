import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TmdbService from "../../services/tmdbService";
import { useParams } from "react-router-dom";
import ReviewsList from "../../components/ReviewsList";
import FavouriteButton from "../../components/FavouriteButton";

const DetailPage = ({ favourites, onClickFavourite }) => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState(null);

  const tmdbService = new TmdbService();

  useEffect(() => {
    if (!movieData) {
      tmdbService._getMovieDetails(id).then((result) => {
        setMovieData(result);
      });
    }
  }, [movieData]);

  useEffect(() => {}, [favourites]);

  return (
    <Wrapper>
      <Title>{!movieData ? "Loading..." : movieData.title}</Title>
      {!!movieData && (
        <Grid>
          <Box>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            />
            <VoteWrapper>
              <Vote>{movieData.vote_average}</Vote>
              <Vote>{movieData.vote_count}</Vote>
              <FavouriteButton
                active={favourites.includes(movieData.id)}
                onActiveChange={() => onClickFavourite(movieData.id)}
              />
            </VoteWrapper>
          </Box>
          <InfoWrapper>
            <Tagline>{movieData.tagline}</Tagline>
            <Infotext>Release Date: {movieData.release_date}</Infotext>
            <Infotext>Runtime: {movieData.runtime} min</Infotext>
            <Infotext>Country: {movieData.origin_country}</Infotext>
            <Infotext>Language: {movieData.original_language}</Infotext>
            <Infotext>Budget: {movieData.budget} $</Infotext>
            <Infotext>{movieData.overview}</Infotext>
            <ReviewsList movieId={movieData.id} />
          </InfoWrapper>
        </Grid>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

const Title = styled.h2`
  font-family: "Notable", sans-serif;
  font-size: 60px;
  color: #f1c730;
  margin: 40px auto;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  gap: 30px;
  row-gap: 20px;
  align-items: start;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 0px;
  /* grid-area: b; */
`;
const VoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  /* grid-area: c; */
`;
const Tagline = styled.p`
  font-family: "Antic", sans-serif;
  font-weight: 500;
  font-size: 50px;
  color: #fff;
`;
const Infotext = styled.p`
  font-family: "Antic", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #fff;
`;
const Vote = styled.div`
  font-family: "Antic", sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: #fff;
  background-color: #f1c73073;
  padding: 7px;
  border-radius: 10px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  /* grid-area: a; */
`;

export default DetailPage;
