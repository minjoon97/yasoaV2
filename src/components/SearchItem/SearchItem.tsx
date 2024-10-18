import { KeywordItem } from "../../types/KeywordDataType.tsx";
import {
  ItemWrapper,
  InfoWrapper,
  ImgCont,
  TextCont,
  UiWrapper,
  Like,
  DetailBtn,
} from "./SearchItemCss.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SearchItemProps {
  item: KeywordItem;
}

const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const [likeState, setLikeState] = useState(false);
  return (
    <ItemWrapper>
      <InfoWrapper>
        <ImgCont url={item.firstimage || "defaultImage.png"}></ImgCont>
        <TextCont>
          <p>{item.title}</p>
          <p>{item.addr1}</p>
        </TextCont>
      </InfoWrapper>
      <UiWrapper>
        <Like
          onClick={() => {
            if (likeState) {
              setLikeState(false);
            } else {
              setLikeState(true);
            }
          }}
        >
          {likeState ? (
            <img src="heart_on.png"></img>
          ) : (
            <img src="heart.png"></img>
          )}
        </Like>
        <DetailBtn
          onClick={() => {
            navigate("/detail", { state: item });
          }}
        >
          상세보기
        </DetailBtn>
      </UiWrapper>
    </ItemWrapper>
  );
};

export default SearchItem;
