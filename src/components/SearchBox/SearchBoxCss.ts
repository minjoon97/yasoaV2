import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 5rem;
  display: flex;
  gap: 0.4rem;
`;

export const Select = styled.select<{ path: string }>`
  width: 200px;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.path === "/" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.2)"};
  background-color: transparent;
  color: ${(props) => (props.path === "/" ? "white" : "black")};
  outline: none;

  &:hover {
    border: 1px solid
      ${(props) =>
        props.path === "/" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)"};
    cursor: pointer;
  }

  option {
    color: black;
  }
`;

export const Input = styled.input<{ path: string }>`
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.path === "/" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.2)"};
  background-color: transparent;
  color: ${(props) => (props.path === "/" ? "white" : "black")};
  outline: none;

  &:hover {
    border: 1px solid
      ${(props) =>
        props.path === "/" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)"};
  }

  &::placeholder {
    color: ${(props) => (props.path === "/" ? "white" : "black")};
    opacity: 0.4;
  }
`;

export const SearchBtn = styled.button<{ path: string }>`
  width: 100px;
  background-color: white;
  border: 1px solid ${(props) => (props.path === "/" ? "white" : "#3b2db5")};
  border-radius: 10px;
  color: #3b2db5;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;
