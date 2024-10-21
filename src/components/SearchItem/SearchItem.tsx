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
import { useState, useEffect } from "react";

interface SearchItemProps {
  item: KeywordItem;
}

const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const [likeState, setLikeState] = useState(false);

  useEffect(() => {
    const wholeLikeList = localStorage.getItem("wholeLikeList");
    const wholeLikeListItem = wholeLikeList ? JSON.parse(wholeLikeList) : [];
    if (wholeLikeListItem.includes(item.contentid)) {
      setLikeState(true);
    }
  }, []);

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
            //localstorage에 찜하기/찜풀기
            const itemKey =
              item.contenttypeid === "15"
                ? "festivalLike"
                : item.contenttypeid === "32"
                ? "lodgmentLike"
                : item.contenttypeid === "12"
                ? "attractionLike"
                : "";

            if (itemKey) {
              const storedItems = localStorage.getItem(itemKey);
              const parsedItems = storedItems ? JSON.parse(storedItems) : [];
              const itemExists = parsedItems.some(
                (storedItem: { contentid: string }) =>
                  storedItem.contentid === item.contentid
              );
              const wholeLikeList = localStorage.getItem("wholeLikeList");
              const wholeLikeListItem = wholeLikeList
                ? JSON.parse(wholeLikeList)
                : [];

              if (itemExists) {
                //각 리스트에서 데이터 삭제하기
                const updatedItems = parsedItems.filter(
                  (storedItem: { contentid: string }) =>
                    storedItem.contentid !== item.contentid
                );
                localStorage.setItem(itemKey, JSON.stringify(updatedItems));
                //전체리스트에서 컨텐트아이디 삭제하기
                const updatedwholeLikeListItem = wholeLikeListItem.filter(
                  (contentid: string) => contentid !== item.contentid
                );
                localStorage.setItem(
                  "wholeLikeList",
                  JSON.stringify(updatedwholeLikeListItem)
                );
                setLikeState(false);
              } else {
                //각 리스트에 데이터 추가하기
                parsedItems.push(item);
                localStorage.setItem(itemKey, JSON.stringify(parsedItems));
                //전체리스트에 컨텐트아이디 추가하기
                wholeLikeListItem.push(item.contentid);
                localStorage.setItem(
                  "wholeLikeList",
                  JSON.stringify(wholeLikeListItem)
                );
                setLikeState(true);
              }
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
