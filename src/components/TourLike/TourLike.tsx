import { KeywordItem } from "../../types/KeywordDataType";
import { Wrapper, Title, LikeList, LikeListItem } from "./TourLikeCss.ts";
import { useNavigate } from "react-router-dom";

const TourLike = () => {
  const navigate = useNavigate();

  const storedItems = localStorage.getItem("attractionLike");
  const parsedItems = storedItems ? JSON.parse(storedItems) : [];
  return (
    <Wrapper>
      <Title>찜한 관광지 목록</Title>
      <LikeList>
        {parsedItems.map((item: KeywordItem, index: number) => (
          <LikeListItem
            onClick={() => {
              navigate("/detail", { state: item });
            }}
            key={index}
            url={item.firstimage || "defaultImage.png"}
          >
            <div></div>
            <div>
              <span>{item.title}</span>
              <p>{item.addr1}</p>
            </div>
          </LikeListItem>
        ))}
      </LikeList>
    </Wrapper>
  );
};

export default TourLike;
