import { Wrapper } from "./BottomContentsCss";
import PopularSite from "../PopularSite/PopularSite.tsx";

const BottomContents = () => {
  const popularSite = ["서울", "여수", "부산", "속초", "강릉", "제주"];
  return (
    <Wrapper>
      <ul className="popularSiteCont">
        {popularSite.map((item, index) => (
          <PopularSite key={index} item={item}></PopularSite>
        ))}
      </ul>
    </Wrapper>
  );
};

export default BottomContents;
