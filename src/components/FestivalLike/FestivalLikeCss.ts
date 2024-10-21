import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const LikeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5%;
`;

export const LikeListItem = styled.li<{ url: string }>`
  width: 33%;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  margin-bottom: 10px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  div:nth-of-type(1) {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  div:nth-of-type(2) {
    span {
      font-weight: 500;
    }
    p {
      padding-top: 5px;
      font-size: 0.9rem;
      opacity: 0.7;
    }
  }
`;
