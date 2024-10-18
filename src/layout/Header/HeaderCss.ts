import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 15rem;
  z-index: 9999;
`;

export const Logo = styled.h1<{ path: string }>`
  width: 65px;
  height: 30px;
  background-image: ${(props) =>
    props.path === "/detail"
      ? "url(public/logo_point.png)"
      : "url(public/logo_white.png)"};
  background-size: contain;
  background-repeat: no-repeat;
`;

export const HeaderNav = styled.ul<{ path: string }>`
  display: flex;
  justify-content: center;
  gap: 2rem;

  li {
    font-size: 0.9rem;
    color: ${(props) => (props.path === "/detail" ? "black" : "white")};
    opacity: 0.8;
  }

  li:hover {
    opacity: 1;
  }
`;
