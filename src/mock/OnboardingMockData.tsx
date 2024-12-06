import { OnboardingProps } from "../screens/onboarding/Onboarding.props";

// 시설 관련 데이터
const facilityItems: string[] = ["동물출입", "WIFI", "놀이방", "흡연실", "주차장", "휠체어사용"];

export const facilityList: OnboardingProps[] = facilityItems.map((title, id) => ({
  id,
  title,
}));

// 모드(특징) 관련 데이터
const modeItems: string[] = [
  "맛있는",
  "친절한",
  "신선한",
  "직접 굽는",
  "많은 양",
  "가성비",
  "특별 메뉴",
  "청결한",
  "단체모임",
  "빠른 조리",
  "넓은",
  "특별한 날",
  "대화가 편한",
  "깨끗한 화장실",
  "멋진 인테리어",
  "혼밥",
  "차분한",
  "알찬 메뉴",
  "편안한 자리",
  "아늑함",
  "독특한",
  "알찬 반찬",
  "건강한",
  "편한 주차",
  "뷰 맛집",
  "적은 잡내",
  "디저트 맛집",
  "커피 맛집",
  "음료 맛집",
];

export const modeList: OnboardingProps[] = modeItems.map((title, id) => ({
  id,
  title,
}));
