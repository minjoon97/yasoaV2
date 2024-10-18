import { useInfiniteQuery } from "@tanstack/react-query";
import { Items } from "../types/KeywordDataType.tsx";
import useStore from "../store.tsx";

interface FetchResponse {
  items: Items;
  totalCount: number;
  pageNo: number;
}

const fetchKeyword = async (
  page: number,
  area: number,
  contType: number,
  keyword: string
): Promise<FetchResponse> => {
  const areaString = area === 0 ? "" : area.toString();
  const response = await fetch(
    keyword === ""
      ? `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=tDjrxG4F1mYPESGwLpGLwG%2BN0xalGoPCacXxUYL2ff%2BmrnaZXK7rDC4RaRwTNfa%2BvIAmyky%2FyAfa%2Bcqm%2B8Qyxw%3D%3D&numOfRows=4&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&contentTypeId=${contType}&areaCode=${areaString}`
      : `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=tDjrxG4F1mYPESGwLpGLwG%2BN0xalGoPCacXxUYL2ff%2BmrnaZXK7rDC4RaRwTNfa%2BvIAmyky%2FyAfa%2Bcqm%2B8Qyxw%3D%3D&numOfRows=4&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${keyword}&contentTypeId=${contType}&areaCode=${areaString}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.response.body;
};

const useInfiniteFetch = () => {
  const { areaState, contTypeState, keywordState } = useStore();

  return useInfiniteQuery<FetchResponse>({
    queryKey: ["keyword", areaState, contTypeState, keywordState],
    queryFn: ({ pageParam = 1 }) => {
      return fetchKeyword(
        Number(pageParam),
        areaState,
        contTypeState,
        keywordState
      );
    },
    getNextPageParam: (last) => {
      const totalPages = Math.ceil(last.totalCount / 4);
      if (last.pageNo < totalPages) {
        return last.pageNo + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};

export default useInfiniteFetch;
