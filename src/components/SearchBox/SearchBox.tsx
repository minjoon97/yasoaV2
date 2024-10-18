import { Wrapper, Select, Input, SearchBtn } from "./SearchBoxCss";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBox = () => {
  const store = useStore();
  const navigate = useNavigate();
  const [semiKeyword, setSemiKeyword] = useState("");
  const [semiarea, setSemiarea] = useState(0);

  return (
    <Wrapper>
      <Select
        path={location.pathname}
        onChange={(e) => {
          setSemiarea(Number(e.target.value));
        }}
      >
        {Object.entries(store.areaCode).map(([key, value], index) => (
          <option key={index} value={value}>
            {key}
          </option>
        ))}
      </Select>
      <Input
        path={location.pathname}
        type="text"
        onChange={(e) => {
          setSemiKeyword(e.target.value);
          if (location.pathname === "/") {
            store.setKeywordState(e.target.value);
          }
        }}
        placeholder="검색어를 입력해주세요."
      ></Input>
      <SearchBtn
        path={location.pathname}
        onClick={() => {
          store.setAreaState(semiarea);
          store.setKeywordState(semiKeyword);
          if (store.contTypeState === 15) {
            navigate("/festival");
          } else if (store.contTypeState === 32) {
            navigate("/lodgment");
          } else if (store.contTypeState === 12) {
            navigate("/tour");
          }
        }}
      >
        검색
      </SearchBtn>
    </Wrapper>
  );
};

export default SearchBox;
