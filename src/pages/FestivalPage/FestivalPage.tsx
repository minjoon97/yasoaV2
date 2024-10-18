import { MainVisual, SearchBoxWrapper } from "./FestivalPageCss.ts";
import SearchInfo from "../../components/SearchInfo/SearchInfo.tsx";
import SearchList from "../../components/SearchList/SearchList.tsx";
import SearchBox from "../../components/SearchBox/SearchBox.tsx";

const FestivalPage = () => {
  return (
    <div>
      <MainVisual>
        <p>
          <span>행사</span>
          <br></br>Festival
        </p>
      </MainVisual>
      <SearchInfo></SearchInfo>
      <SearchBoxWrapper>
        <SearchBox></SearchBox>
      </SearchBoxWrapper>
      <SearchList />
    </div>
  );
};

export default FestivalPage;
