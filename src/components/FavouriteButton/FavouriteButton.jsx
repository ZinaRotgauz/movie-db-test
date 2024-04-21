import React from "react";
import styled from "styled-components";
import { HeartIcon } from "../Icons/Icons";

const FavouriteButton = ({ onActiveChange, active }) => {
  return (
    <Wrapper active={active} onClick={onActiveChange}>
      <HeartIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
`;

export default FavouriteButton;
