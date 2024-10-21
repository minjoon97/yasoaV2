import { Wrapper, FinalItem, Loading } from "./SearchListCss.ts";
import SearchItem from "../../components/SearchItem/SearchItem.tsx";
import useInfiniteFetch from "../../hooks/useInfiniteFetch.ts";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SearchList = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteFetch();

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("Fetching next page");
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (error) return <p>Error: {error.message}</p>;
  const finalData =
    data?.pages[0].totalCount !== 0
      ? data?.pages.flatMap((page) => page.items.item) || []
      : [];

  return (
    <Wrapper>
      <ul>
        {finalData.length > 0 ? (
          finalData.map((item, index) => (
            <SearchItem key={index} item={item}></SearchItem>
          ))
        ) : (
          <p>자료가 없습니다.</p>
        )}
        <FinalItem ref={ref}>
          {isFetchingNextPage && <Loading>...</Loading>}
        </FinalItem>
      </ul>
    </Wrapper>
  );
};

export default SearchList;
