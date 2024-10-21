import { KeywordItem } from "../../types/KeywordDataType";
import { Wrapper, Title, LikeList, LikeListItem } from "./LodgmentLikeCss.ts";
import { useNavigate } from "react-router-dom";

const LodgmentLike = () => {
  const navigate = useNavigate();

  const storedItems = localStorage.getItem("lodgmentLike");
  const parsedItems = storedItems ? JSON.parse(storedItems) : [];
  return (
    <Wrapper>
      <Title>찜한 숙소 목록</Title>
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

export default LodgmentLike;
