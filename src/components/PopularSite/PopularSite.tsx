import { PopularSiteItem } from "./PopularSiteCss.ts";

interface PopularSiteProps {
  item: string;
}

const PopularSite: React.FC<PopularSiteProps> = ({ item }) => {
  return <PopularSiteItem>{item}</PopularSiteItem>;
};

export default PopularSite;
