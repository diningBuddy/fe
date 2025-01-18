import SampleReviewImg from "../assets/images/sample/sample-review.svg";
import { BookmarkListProps, MyReviewListProps } from "../screens/myPage/mypage.props";
import { UserInfoProps } from "../screens/myPage/UserInfo.props";

export const userInfo: UserInfoProps = {
  id: 1,
  nick: "타코벨",
  point: 0,
  profile: <SampleReviewImg />,
};

export const bookmarkList: BookmarkListProps[] = [
  {
    id: 1,
    title: "타코벨",
    category: "멕시칸・패스트캐쥬얼",
    img: <SampleReviewImg />,
    isLike: true,
  },
  {
    id: 2,
    title: "서브웨이",
    category: "샌드위치・패스트캐쥬얼",
    img: <SampleReviewImg />,
    isLike: false,
  },
  {
    id: 3,
    title: "스타벅스",
    category: "커피・카페",
    img: <SampleReviewImg />,
    isLike: true,
  },
  {
    id: 4,
    title: "버거킹",
    category: "햄버거・패스트푸드",
    img: <SampleReviewImg />,
    isLike: false,
  },
];

export const myReviewList: MyReviewListProps[] = [
  {
    id: 1,
    title: "타코벨",
    category: "멕시칸・패스트캐쥬얼",
    mainImg: <SampleReviewImg />,
    grade: 3,
    createAt: "2024.01.28",
    content: "내용",
    likeCount: 2,
  },
  {
    id: 2,
    title: "서브웨이",
    category: "샌드위치・패스트캐쥬얼",
    mainImg: <SampleReviewImg />,
    grade: 4,
    createAt: "2024.01.29",
    content: "맛있어요!",
    likeCount: 1,
  },
];
