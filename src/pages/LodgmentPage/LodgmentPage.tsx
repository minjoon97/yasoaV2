import { MainVisual, SearchBoxWrapper } from "./LodgmentPageCss.ts";
import SearchInfo from "../../components/SearchInfo/SearchInfo.tsx";
import SearchList from "../../components/SearchList/SearchList.tsx";
import SearchBox from "../../components/SearchBox/SearchBox.tsx";
import useStore from "../../store.tsx";
import { useEffect } from "react";

const LodgmentPage = () => {
  const store = useStore();
  useEffect(() => {
    store.setContTypeState(32);
  }, []);

  return (
    <div>
      <MainVisual>
        <p>
          <span>숙소</span>
          <br></br>Lodgment
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

export default LodgmentPage;
