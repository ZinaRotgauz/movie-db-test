import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainPage from "../../pages/MainPage";
import tmdbService from "../../services/tmdbService";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DetailPage from "../../pages/DetailPage";
import Header from "../Header";

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [showingFavourites, setShowingFavourites] = useState(false);

  const onClickFavourite = (id) => {
    if (!favourites.includes(id)) setFavourites([id, ...favourites]);
    else setFavourites(favourites.filter((favId) => favId !== id));
  };

  const onChangeShowingFavourites = () => {
    setShowingFavourites(!showingFavourites);
  };

  useEffect(() => {}, [favourites.length]);

  return (
    <PageLayout>
      <Header
        showingFavourites={showingFavourites}
        onChangeShowingFavourites={onChangeShowingFavourites}
      />
      <ContentWrapper>
        <Routes>
          <Route
            path={"/playingnow"}
            element={
              <MainPage
                favourites={favourites}
                onClickFavourite={onClickFavourite}
                showingFavourites={showingFavourites}
              />
            }
          />
          <Route
            path={`/films/:id`}
            element={
              <DetailPage
                favourites={favourites}
                onClickFavourite={onClickFavourite}
              />
            }
          />
          <Route path={"*"} element={<Navigate to={"/playingnow"} />} />
        </Routes>
      </ContentWrapper>
    </PageLayout>
  );
};

const PageLayout = styled.div`
  background-image: url("/background.png");
  height: 100vh;
  position: relative;
  overflow-y: scroll;
`;

const ContentWrapper = styled.div`
  padding: 0 100px;
`;

export default App;
