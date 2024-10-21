import "./MainCss";
import MainPage from "../../pages/MainPage/MainPage.tsx";
import FestivalPage from "../../pages/FestivalPage/FestivalPage.tsx";
import LodgmentPage from "../../pages/LodgmentPage/LodgmentPage.tsx";
import TourPage from "../../pages/TourPage/TourPage.tsx";
import MyPage from "../../pages/MyPage/MyPage.tsx";
import DetailPage from "../../pages/DetailPage/DetailPage.tsx";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage></MainPage>}></Route>
      <Route path="/festival" element={<FestivalPage></FestivalPage>}></Route>
      <Route path="/lodgment" element={<LodgmentPage></LodgmentPage>}></Route>
      <Route path="/tour" element={<TourPage></TourPage>}></Route>
      <Route path="/mypage" element={<MyPage></MyPage>}></Route>
      <Route path="/detail" element={<DetailPage></DetailPage>}></Route>
    </Routes>
  );
};

export default Main;
