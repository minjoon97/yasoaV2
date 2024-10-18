import styled from "styled-components";

export const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: flex-start;
`;

export const InfoWrapper = styled.div`
  display: flex;
`;

export const ImgCont = styled.div<{ url: string }>`
  width: 200px;
  height: 150px;
  border-radius: 20px;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

export const TextCont = styled.div`
  padding-left: 2rem;

  p:nth-of-type(1) {
    font-weight: 700;
    padding: 1rem 0;
  }
  p:nth-of-type(2) {
    opacity: 0.8;
  }
`;

export const UiWrapper = styled.div`
  display: flex;
`;

export const Like = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 50px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  img {
    width: 20px;
  }

  &:hover {
    border: 1px solid rgb(158, 158, 158);
    cursor: pointer;
  }
`;

export const DetailBtn = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  background-color: #3b2db5;
  border: none;
  outline: none;
  color: white;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #1f138a;
  }
`;
