import { Wrapper } from "./BottomContentsCss";
import PopularSite from "../PopularSite/PopularSite.tsx";

const BottomContents = () => {
  const popularSite = [
    ["서울", "1", "main_seoul.png"],
    ["인천", "2", "main_incheon.png"],
    ["대전", "3", "main_daejeon.png"],
    ["대구", "4", "main_daegu.png"],
    ["부산", "6", "main_busan.png"],
    ["제주", "39", "main_jeju.png"],
  ];
  return (
    <Wrapper>
      <h2>인기있는 지역의 행사를 확인해보세요!</h2>
      <ul className="popularSiteCont">
        {popularSite.map((item, index) => (
          <PopularSite key={index} item={item}></PopularSite>
        ))}
      </ul>
    </Wrapper>
  );
};

export default BottomContents;
