import styled from "styled-components";

export const HeaderWrapper = styled.header<{ path: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 15rem;
  z-index: 9999;
  background-color: ${(props) =>
    props.path === "/detail" || props.path === "/mypage"
      ? "white"
      : props.path === "/"
      ? "#3b2db5"
      : "rgba(0,0,0,0.4)"};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1<{ path: string }>`
  width: 65px;
  height: 30px;
  background-image: ${(props) =>
    props.path === "/detail" || props.path === "/mypage"
      ? "url(logo_point.png)"
      : "url(logo_white.png)"};
  background-size: contain;
  background-repeat: no-repeat;
`;

export const HeaderNav = styled.ul<{ path: string }>`
  display: flex;
  justify-content: center;
  gap: 2rem;

  li {
    font-size: 0.9rem;
    color: ${(props) =>
      props.path === "/detail" || props.path === "/mypage" ? "black" : "white"};
    opacity: 0.8;
  }

  li:hover {
    opacity: 1;
  }
`;
