import styled from "styled-components";

export const ContTypeWrapper = styled.ul<{ contTypeState: number }>`
  padding: 1rem;
  display: flex;
  gap: 1rem;

  .contTypeItem01 {
    color: white;
    font-weight: 600;
    border-bottom: 2px solid
      ${(props) => (props.contTypeState === 15 ? "white" : "transparent")};
    padding: 0.5rem;
    opacity: ${(props) => (props.contTypeState === 15 ? "1" : "0.5")};
  }

  .contTypeItem02 {
    color: white;
    font-weight: 600;
    border-bottom: 2px solid
      ${(props) => (props.contTypeState === 32 ? "white" : "transparent")};
    padding: 0.5rem;
    opacity: ${(props) => (props.contTypeState === 32 ? "1" : "0.5")};
  }

  .contTypeItem03 {
    color: white;
    font-weight: 600;
    border-bottom: 2px solid
      ${(props) => (props.contTypeState === 12 ? "white" : "transparent")};
    padding: 0.5rem;
    opacity: ${(props) => (props.contTypeState === 12 ? "1" : "0.5")};
  }

  .contTypeItem01:hover,
  .contTypeItem02:hover,
  .contTypeItem03:hover {
    border-bottom: 2px solid white;
    cursor: pointer;
  }
`;
