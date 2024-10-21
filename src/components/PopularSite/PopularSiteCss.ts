import styled from "styled-components";

export const PopularSiteItem = styled.li`
  width: 120px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.219);
  text-align: center;
  padding-top: 10px;
  transition: 0.2s;

  &:hover {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 0.9rem;
    font-weight: 500;
    color: black;
  }
`;

export const CardPhoto = styled.div<{ url: string }>`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  margin: 10px auto;
  margin-bottom: 42px;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;
