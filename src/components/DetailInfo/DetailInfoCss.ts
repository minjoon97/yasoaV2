import styled from "styled-components";

export const Top = styled.div`
  text-align: center;
  span {
    padding: 0.5rem;
    border-radius: 20px;
    background-color: #3b2db5;
    color: white;
    font-size: 0.8rem;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    padding-top: 50px;
    padding-bottom: 20px;
  }

  p {
    opacity: 0.6;
  }
`;

export const Content = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

export const ImgWrapper = styled.div`
  width: 30%;

  img {
    width: 100%;
    border-radius: 20px;
  }
`;

export const TextWrapper = styled.div`
  width: 30%;

  p {
    color: rgba(0, 0, 0, 0.6);
    padding: 0.3rem 0;
    line-height: 1.5rem;
  }

  p > span {
    color: black;
    font-weight: 600;
  }

  a {
    text-decoration: underline;
    color: inherit;
  }
`;
