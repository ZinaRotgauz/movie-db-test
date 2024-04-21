import styled from "styled-components";
import { SearchIcon } from "../Icons/Icons";

const SearchBar = () => (
  <SearchBarContainer>
    <SearchIconBox>
      <SearchIcon />
    </SearchIconBox>

    <SearchInput type="text" placeholder="Search" />
  </SearchBarContainer>
);

const SearchBarContainer = styled.div`
  background: linear-gradient(
    0deg,
    rgba(242, 226, 170, 0.45),
    rgba(242, 226, 170, 0.45)
  );
  border-radius: 30px;
  border: 1px solid rgba(241, 199, 48, 1);
  display: flex;
  align-items: stretch;
  padding: 5px 20px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  color: white;
  margin-left: 10px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const SearchIconBox = styled.span`
  & > svg {
    color: white;
    height: 20px;
    width: 20px;
  }

  & > svg > path {
    color: white;
    fill: white;
  }
`;

export default SearchBar;
