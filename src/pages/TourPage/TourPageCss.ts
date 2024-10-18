import styled from "styled-components";

export const MainVisual = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/attraction_title.jpg);
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.8;
  }

  p {
    color: white;
    font-size: 1rem;
    font-weight: 300;
    z-index: 99;
    text-align: center;
    line-height: 1.5rem;
  }

  p > span {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const SearchBoxWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;
