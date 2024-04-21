import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar";
import FavouriteButton from "../FavouriteButton";

const Header = ({ showingFavourites, onChangeShowingFavourites }) => {
  return (
    <Wrapper>
      <Link to={"/playingnow"}>
        <Logo src="/logo.png" />
      </Link>
      {/* <h1 className="mainHeader">MAIN HEADER</h1> */}
      <FlexRow>
        <NavItem to={"/playingnow"}>Playing now</NavItem>
        {/* <SearchBar /> */}
        <FavouriteButton
          active={showingFavourites}
          onActiveChange={onChangeShowingFavourites}
        />
      </FlexRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(0deg, rgba(94, 20, 48, 0.11) 0%, #5e1430 41.08%);
`;

const Logo = styled.img`
  height: 30px;
`;

const FlexRow = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: rgba(251, 245, 222, 0.79);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  font-weight: 500;
  font-size: 20px;

  transition: all 0.15s ease-in;

  &:hover {
    color: rgba(241, 199, 48, 1);
    transition: all 0.15s ease-in;
  }
`;

export default Header;
