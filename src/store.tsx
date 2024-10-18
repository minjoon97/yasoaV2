import { create } from "zustand";

interface CounterState {
  contTypeState: number;
  areaState: number;
  keywordState: string;
  page: number;
  areaCode: Record<string, number>;
  setContTypeState: (a: number) => void;
  setAreaState: (a: number) => void;
  setKeywordState: (a: string) => void;
}

const useStore = create<CounterState>((set) => ({
  contTypeState: 15,
  areaState: 0,
  keywordState: "",
  page: 1,
  areaCode: {
    전체: 0,
    서울특별시: 1,
    인천광역시: 2,
    대전광역시: 3,
    대구광역시: 4,
    광주광역시: 5,
    부산광역시: 6,
    울산광역시: 7,
    세종특별시: 8,
    경기도: 31,
    강원도: 32,
    충청북도: 33,
    충청남도: 34,
    경상북도: 35,
    경상남도: 46,
    전라북도: 37,
    전라남도: 38,
    제주도: 39,
  },
  setContTypeState: (value) => set(() => ({ contTypeState: value })),
  setAreaState: (value) => set(() => ({ areaState: value })),
  setKeywordState: (value) => set(() => ({ keywordState: value })),
}));

export default useStore;
