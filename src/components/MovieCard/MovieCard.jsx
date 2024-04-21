import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HeartIcon } from "../Icons/Icons";

//в фигурных скобках мы передаем нужные нам свойства обьекта пропс

const MovieCard = ({ title, image, onClickFavourite, isFavourite, id }) => {
  return (
    <Wrapper>
      <FavWrapper active={isFavourite} onClick={onClickFavourite}>
        <HeartIcon />
      </FavWrapper>
      <Link to={`/films/${id}`}>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  & > a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.p`
  color: rgba(245, 245, 245, 1);
  text-decoration: none;
  text-align: center;
`;

const FavWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 2px;
  background-color: #f1c730;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > svg > path {
    fill: ${({ active }) => (!!active ? "black" : "none")};
  }

  position: absolute;
  top: 10px;
  right: 10px;
`;

export default MovieCard;
