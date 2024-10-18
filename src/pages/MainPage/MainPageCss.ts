import styled from "styled-components";

export const TopWrapper = styled.div`
  background-color: #3b2db5;
  height: 600px;
  padding-top: 150px;
`;

export const TopContents = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 700;
    color: white;
    text-align: center;
    padding-bottom: 4rem;
  }
`;
