import { Wrapper, Top, Contents } from "./MyPageCss";
import FestivalLike from "../../components/FestivalLike/FestivalLike.tsx";
import LodgmentLike from "../../components/LodgmentLike/LodgmentLike.tsx";
import TourLike from "../../components/TourLike/TourLike.tsx";

const MyPage = () => {
  return (
    <Wrapper>
      <Top>
        <p>
          <span>홍길동</span>님, 안녕하세요!
        </p>
      </Top>
      <Contents>
        <FestivalLike></FestivalLike>
        <LodgmentLike></LodgmentLike>
        <TourLike></TourLike>
      </Contents>
    </Wrapper>
  );
};

export default MyPage;
