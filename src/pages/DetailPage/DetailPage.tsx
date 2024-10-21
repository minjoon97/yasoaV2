import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Wrapper, Goback, Like } from "./DetailPageCss";
import { CommonItem } from "../../types/CommonDataType.tsx";
import {
  FestivalIntroInfo,
  LodgmentIntroInfo,
  AttractionIntroInfo,
} from "../../types/IntroDataType.tsx";
import DetailInfo from "../../components/DetailInfo/DetailInfo.tsx";

//CommonData 불러오기
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

//IntroData 불러오기
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

//DetialPage컴포넌트
const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const contentId = location.state.contentid;
  const contenttypeId = location.state.contenttypeid;

  const [likeState, setLikeState] = useState(false);

  useEffect(() => {
    const wholeLikeList = localStorage.getItem("wholeLikeList");
    const wholeLikeListItem = wholeLikeList ? JSON.parse(wholeLikeList) : [];
    if (wholeLikeListItem.includes(location.state.contentid)) {
      setLikeState(true);
    }
  }, []);

  const { data: commonData, error: commonError } = useQuery<CommonItem[]>({
    queryKey: ["common", contentId],
    queryFn: () => fetchCommon(contentId, contenttypeId),
  });

  const { data: introData, error: introError } = useQuery<
    (FestivalIntroInfo | LodgmentIntroInfo | AttractionIntroInfo)[]
  >({
    queryKey: ["intro", contentId],
    queryFn: () => fetchIntro(contentId, contenttypeId),
  });
  if (commonError) return <p>Error: {commonError.message}</p>;
  if (introError) return <p>Error: {introError.message}</p>;

  if (commonData && introData) {
    return (
      <Wrapper>
        <Goback
          onClick={() => {
            navigate(-1);
          }}
        >
          돌아가기
        </Goback>
        <Like
          onClick={() => {
            //localstorage에 찜하기/찜풀기
            const itemKey =
              location.state.contenttypeid === "15"
                ? "festivalLike"
                : location.state.contenttypeid === "32"
                ? "lodgmentLike"
                : location.state.contenttypeid === "12"
                ? "attractionLike"
                : "";

            if (itemKey) {
              const storedItems = localStorage.getItem(itemKey);
              const parsedItems = storedItems ? JSON.parse(storedItems) : [];
              const itemExists = parsedItems.some(
                (storedItem: { contentid: string }) =>
                  storedItem.contentid === location.state.contentid
              );
              const wholeLikeList = localStorage.getItem("wholeLikeList");
              const wholeLikeListItem = wholeLikeList
                ? JSON.parse(wholeLikeList)
                : [];

              if (itemExists) {
                //각 리스트에서 데이터 삭제하기
                const updatedItems = parsedItems.filter(
                  (storedItem: { contentid: string }) =>
                    storedItem.contentid !== location.state.contentid
                );
                localStorage.setItem(itemKey, JSON.stringify(updatedItems));
                //전체리스트에서 컨텐트아이디 삭제하기
                const updatedwholeLikeListItem = wholeLikeListItem.filter(
                  (contentid: string) => contentid !== location.state.contentid
                );
                localStorage.setItem(
                  "wholeLikeList",
                  JSON.stringify(updatedwholeLikeListItem)
                );
                setLikeState(false);
              } else {
                //각 리스트에 데이터 추가하기
                parsedItems.push(location.state);
                localStorage.setItem(itemKey, JSON.stringify(parsedItems));
                //전체리스트에 컨텐트아이디 추가하기
                wholeLikeListItem.push(location.state.contentid);
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
        <DetailInfo commonData={commonData} introData={introData}></DetailInfo>
      </Wrapper>
    );
  }
};

export default DetailPage;
