import { PopularSiteItem, CardPhoto } from "./PopularSiteCss.ts";
import { Link } from "react-router-dom";
import useStore from "../../store";

interface PopularSiteProps {
  item: string[];
}

const PopularSite: React.FC<PopularSiteProps> = ({ item }) => {
  const store = useStore();
  return (
    <Link to="/festival">
      <PopularSiteItem
        onClick={() => {
          store.setContTypeState(15);
          store.setAreaState(Number(item[1]));
          store.setKeywordState("");
        }}
      >
        <CardPhoto url={item[2]}></CardPhoto>
        <p>{item[0]}</p>
      </PopularSiteItem>
    </Link>
  );
};

export default PopularSite;
