export interface BookmarkListProps {
  id: number;
  title: string;
  category: string;
  img: JSX.Element;
  isLike: boolean;
}

export interface MyReviewListProps {
  id: number;
  title: string;
  category: string;
  mainImg: JSX.Element;
  grade: number;
  createAt: string;
  content: string;
  likeCount: number;
}
