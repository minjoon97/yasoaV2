import "./MainPageCss";
import { TopWrapper, TopContents } from "./MainPageCss";
import SearchBox from "../../components/SearchBox/SearchBox.tsx";
import ContType from "../../components/ContType/ContType.tsx";
import BottomContents from "../../components/BottomContents/BottomContents.tsx";

const MainPage = () => {
  return (
    <>
      <TopWrapper>
        <TopContents>
          <p className="title">
            찾고싶은 행사, 숙소, 관광지를<br></br>검색해보세요.
          </p>
          <ContType></ContType>
          <SearchBox></SearchBox>
        </TopContents>
      </TopWrapper>
      <BottomContents></BottomContents>
    </>
  );
};

export default MainPage;
