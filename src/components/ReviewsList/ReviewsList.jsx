import { useEffect, useState } from "react";
import styled from "styled-components";
import ReviewCard from "../ReviewCard";
import TmdbService from "../../services/tmdbService";

const ReviewsList = ({ movieId }) => {
  const [maxPage, setMaxPage] = useState(1);
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState([]);

  const tmdbService = new TmdbService();

  useEffect(() => {
    if (!reviews?.length) {
      tmdbService._getMovieReviews(movieId, page).then((result) => {
        setReviews(result.results);
        console.log(result.total_pages);
        setMaxPage();
      });
    }

    console.log(reviews);
  }, []);

  return (
    <Wrapper>
      {!!reviews?.length ? (
        <Row>
          <Text>Reviews</Text>

          <ControlBox>
            {page !== 1 && (
              <Controls onClick={() => setPage(page - 1)}>{`<<`}</Controls>
            )}
            <Controls>Page {page}</Controls>
            {page < maxPage && (
              <Controls onClick={() => setPage(page + 1)}>{`>>`}</Controls>
            )}
          </ControlBox>
        </Row>
      ) : (
        <Text>No reviews</Text>
      )}

      {!!reviews?.length ? reviews.map((el) => <ReviewCard {...el} />) : <></>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  row-gap: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ControlBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Controls = styled.span`
  color: #fff;
`;

const Text = styled.p`
  color: #fff;
`;

export default ReviewsList;
