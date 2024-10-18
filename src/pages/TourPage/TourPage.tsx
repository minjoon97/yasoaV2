import { MainVisual, SearchBoxWrapper } from "./TourPageCss.ts";
import SearchInfo from "../../components/SearchInfo/SearchInfo.tsx";
import SearchList from "../../components/SearchList/SearchList.tsx";
import SearchBox from "../../components/SearchBox/SearchBox.tsx";
import useStore from "../../store.tsx";
import { useEffect } from "react";

const TourPage = () => {
  const store = useStore();
  useEffect(() => {
    store.setContTypeState(12);
  }, []);

  return (
    <div>
      <MainVisual>
        <p>
          <span>관광지</span>
          <br></br>Tourist Attraction
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

export default TourPage;
