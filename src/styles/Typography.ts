import { css } from "styled-components";

export const typography = {
  /**
  Headings - Headings는 피그마에서 모두 폰트 굵기 700, 
  UI 퍼블 작업 후 고정으로 갈지 결정
  */
  display1: css`
    font-size: 56px;
    line-height: 72px;
    font-weight: 700;
  `,
  display2: css`
    font-size: 40px;
    line-height: 52px;
    font-weight: 700;
  `,
  display3: css`
    font-size: 36px;
    line-height: 48px;
    font-weight: 700;
  `,
  heading1: css`
    font-size: 28px;
    line-height: 38px;
    font-weight: 700;
  `,
  heading2: css`
    font-size: 24px;
    line-height: 32px;
    /* font-weight: 400; */
  `,
  heading3: css`
    font-size: 20px;
    line-height: 28px;
  `,
  // Body
  feature: css`
    font-size: 17px;
    line-height: 24px;
  `,
  highlight: css`
    font-size: 16px;
    line-height: 24px;
  `,
  content: css`
    font-size: 14px;
    line-height: 20px;
  `,
  caption: css`
    font-size: 12px;
    line-height: 16px;
  `,
  micro: css`
    font-size: 11px;
    line-height: 14px;
  `,
};

export type Typography = keyof typeof typography;
