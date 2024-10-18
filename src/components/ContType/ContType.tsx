import { ContTypeWrapper } from "./ContTypeCss";
import useStore from "../../store";

const ContType = () => {
  const store = useStore();
  return (
    <ContTypeWrapper contTypeState={store.contTypeState}>
      <li
        className="contTypeItem01"
        onClick={() => {
          store.setContTypeState(15);
        }}
      >
        행사 검색
      </li>
      <li
        className="contTypeItem02"
        onClick={() => {
          store.setContTypeState(32);
        }}
      >
        숙소 검색
      </li>
      <li
        className="contTypeItem03"
        onClick={() => {
          store.setContTypeState(12);
        }}
      >
        관광지 검색
      </li>
    </ContTypeWrapper>
  );
};

export default ContType;
