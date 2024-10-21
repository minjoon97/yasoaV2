import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 160px;
  padding-bottom: 160px;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

export const Goback = styled.p`
  opacity: 0.6;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const Like = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  position: absolute;
  top: 160px;
  right: 0;

  img {
    width: 20px;
  }

  &:hover {
    border: 1px solid rgb(158, 158, 158);
    cursor: pointer;
  }
`;
