import { HeaderWrapper, Logo, HeaderNav } from "./HeaderCss";
import { Link, useLocation } from "react-router-dom";
import useStore from "../../store";

const Header = () => {
  const store = useStore();
  const location = useLocation();
  return (
    <HeaderWrapper path={location.pathname}>
      <Link to="/">
        <Logo path={location.pathname}></Logo>
      </Link>
      <HeaderNav path={location.pathname}>
        <Link to="/festival">
          <li
            onClick={() => {
              store.setContTypeState(15);
              store.setAreaState(0);
              store.setKeywordState("");
            }}
          >
            행사
          </li>
        </Link>
        <Link to="/lodgment">
          <li
            onClick={() => {
              store.setContTypeState(32);
              store.setAreaState(0);
              store.setKeywordState("");
            }}
          >
            숙소
          </li>
        </Link>
        <Link to="/tour">
          <li
            onClick={() => {
              store.setContTypeState(12);
              store.setAreaState(0);
              store.setKeywordState("");
            }}
          >
            관광지
          </li>
        </Link>
        <Link to="/mypage">
          <li>마이페이지</li>
        </Link>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
