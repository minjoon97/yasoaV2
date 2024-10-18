import useStore from "../../store";
import { Wrapper } from "./SearchInfoCss.ts";

const SearchInfo = () => {
  const store = useStore();
  const areaName = Object.keys(store.areaCode).find(
    (key) => store.areaCode[key] === store.areaState
  );
  return (
    <Wrapper>
      <span>{areaName}</span>의 <span>'{store.keywordState}'</span>에 대한
      검색결과 입니다.
    </Wrapper>
  );
};

export default SearchInfo;
