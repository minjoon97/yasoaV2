import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { Wrapper } from "./DetailPageCss";
import { CommonItem } from "../../types/CommonDataType.tsx";
import {
  FestivalIntroInfo,
  LodgmentIntroInfo,
  AttractionIntroInfo,
} from "../../types/IntroDataType.tsx";
import useStore from "../../store";
import DetailInfo from "../../components/DetailInfo/DetailInfo.tsx";

const fetchCommon = async (
  contentId: string,
  contTypeState: number
): Promise<CommonItem[]> => {
  const response = await fetch(
    `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=tDjrxG4F1mYPESGwLpGLwG%2BN0xalGoPCacXxUYL2ff%2BmrnaZXK7rDC4RaRwTNfa%2BvIAmyky%2FyAfa%2Bcqm%2B8Qyxw%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&contentTypeId=${contTypeState}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=1&pageNo=1`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.response.body.items.item;
};

const fetchIntro = async (
  contentId: string,
  contTypeState: number
): Promise<(FestivalIntroInfo | LodgmentIntroInfo | AttractionIntroInfo)[]> => {
  const response = await fetch(
    `https://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=tDjrxG4F1mYPESGwLpGLwG%2BN0xalGoPCacXxUYL2ff%2BmrnaZXK7rDC4RaRwTNfa%2BvIAmyky%2FyAfa%2Bcqm%2B8Qyxw%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&contentTypeId=${contTypeState}&numOfRows=1&pageNo=1`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.response.body.items.item;
};

const DetailPage = () => {
  const location = useLocation();
  const contentId = location.state.contentid;
  const store = useStore();

  const { data: commonData, error: commonError } = useQuery<CommonItem[]>({
    queryKey: ["common"],
    queryFn: () => fetchCommon(contentId, store.contTypeState),
  });

  const { data: introData, error: introError } = useQuery<
    (FestivalIntroInfo | LodgmentIntroInfo | AttractionIntroInfo)[]
  >({
    queryKey: ["intro"],
    queryFn: () => fetchIntro(contentId, store.contTypeState),
  });
  if (commonError) return <p>Error: {commonError.message}</p>;
  if (introError) return <p>Error: {introError.message}</p>;

  if (commonData && introData) {
    return (
      <Wrapper>
        <DetailInfo commonData={commonData} introData={introData}></DetailInfo>
      </Wrapper>
    );
  }
};

export default DetailPage;
