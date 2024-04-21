import styled from "styled-components";
import parse from "html-react-parser";

const ReviewCard = ({
  author_details: { avatar_path, username, rating },
  content,
  updated_at,
}) => {
  return (
    <Wrapper>
      <AuthorRow>
        <AuthorBox>
          <AuthorAvatar
            src={`https://secure.gravatar.com/avatar/${avatar_path}`}
          />
          <AuthorName>{username}</AuthorName>
        </AuthorBox>
        <Vote>{rating}</Vote>
      </AuthorRow>
      <Content>{parse(content)}</Content>
      <Content>
        <i>Updated at: {updated_at}</i>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 15px;
  width: 100%;
  background-color: #661d1d;
  padding: 15px;
  display: flex;
  row-gap: 15px;
  flex-direction: column;
`;

const AuthorRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthorBox = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

const AuthorAvatar = styled.img`
  border-radius: 50%;
  height: 40px;
`;

const AuthorName = styled.p`
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

const Content = styled.p`
  color: #fff;
`;

export default ReviewCard;
