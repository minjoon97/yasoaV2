import { CommonItem } from "../../types/CommonDataType.tsx";
import {
  FestivalIntroInfo,
  LodgmentIntroInfo,
  AttractionIntroInfo,
} from "../../types/IntroDataType.tsx";
import { Top, Content, ImgWrapper, TextWrapper } from "./DetailInfoCss.ts";

interface DetailInfoProps {
  commonData: CommonItem[];
  introData: (FestivalIntroInfo | LodgmentIntroInfo | AttractionIntroInfo)[];
}

const DetailInfo: React.FC<DetailInfoProps> = ({ commonData, introData }) => {
  const isFestival = commonData[0].contenttypeid === "15" ? true : false;
  const isLodgment = commonData[0].contenttypeid === "32" ? true : false;
  const isAttraction = commonData[0].contenttypeid === "12" ? true : false;

  //홈페이지 url 파싱
  let hpUrl;
  let hpLink;
  if (commonData[0].homepage.includes("<")) {
    hpUrl = commonData[0].homepage.split(">")[1].split("<")[0];
    hpLink = commonData[0].homepage.split('"')[1];
  } else {
    hpUrl = commonData[0].homepage;
    hpLink = commonData[0].homepage;
  }
  return (
    <>
      <Top>
        {commonData[0].contenttypeid === "15" ? (
          <span>행사/축제</span>
        ) : commonData[0].contenttypeid === "32" ? (
          <span>숙박시설</span>
        ) : (
          <span>관광지</span>
        )}
        <h2>{commonData[0].title}</h2>
        <p>{commonData[0].addr1}</p>
      </Top>
      <Content>
        <ImgWrapper>
          <img src={commonData[0].firstimage || "defaultImage.png"}></img>
        </ImgWrapper>
        <TextWrapper>
          {isFestival && "eventplace" in introData[0] && (
            <p>
              <span>이벤트 장소</span>
              <br></br>
              {introData[0].eventplace}
            </p>
          )}
          {isFestival &&
            "eventstartdate" in introData[0] &&
            "eventenddate" in introData[0] && (
              <p>
                <span>운영 기간</span>
                <br></br>
                {introData[0].eventstartdate +
                  " - " +
                  introData[0].eventenddate}
              </p>
            )}
          {isFestival && "playtime" in introData[0] && (
            <p>
              <span>운영 시간</span>
              <br></br>
              {introData[0].playtime}
            </p>
          )}
          {isLodgment && "roomcount" in introData[0] && (
            <p>
              <span>방 개수</span>
              <br></br>
              {introData[0].roomcount}
            </p>
          )}
          {isLodgment && "roomtype" in introData[0] && (
            <p>
              <span>방 타입</span>
              <br></br>
              {introData[0].roomtype}
            </p>
          )}
          {isLodgment && "checkintime" in introData[0] && (
            <p>
              <span>체크인 시간</span>
              <br></br>
              {introData[0].checkintime}
            </p>
          )}
          {isLodgment && "checkouttime" in introData[0] && (
            <p>
              <span>체크아웃 시간</span>
              <br></br>
              {introData[0].checkouttime}
            </p>
          )}
          {isLodgment && "parkinglodging" in introData[0] && (
            <p>
              <span>주차 가능 여부</span>
              <br></br>
              {introData[0].parkinglodging}
            </p>
          )}
          {isAttraction && "infocenter" in introData[0] && (
            <p>
              <span>전화번호</span>
              <br></br>
              {introData[0].infocenter}
            </p>
          )}
          {isAttraction && "restdate" in introData[0] && (
            <p>
              <span>휴무일</span>
              <br></br>
              {introData[0].restdate}
            </p>
          )}
          {isAttraction && "parking" in introData[0] && (
            <p>
              <span>주차</span>
              <br></br>
              {introData[0].parking}
            </p>
          )}
          <p>
            <span>홈페이지</span>
            <br></br>
            <a href={hpLink} target="blank" rel="noopener noreferrer">
              {hpUrl}
            </a>
          </p>
          <p>
            <span>상세정보</span>
            <br></br>
            {commonData[0].overview}
          </p>
        </TextWrapper>
      </Content>
    </>
  );
};

export default DetailInfo;
