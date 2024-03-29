/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const JoinWrap = styled.div`
  /* margin-top: 1rem; */
  /* margin-bottom: 7rem; */
  padding: ${WidthPd.padding};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 15rem;
  & form span {
    position: relative;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${Maincolor.black};
    & b {
      position: absolute;
      top: -0.2rem;
      margin-left: 0.2rem;
      font-size: 1.4rem;
      color: red;
    }
  }
  & p {
    color: ${Maincolor.black};
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
    margin-left: 0.2rem;
    padding-bottom: 0.5rem;
    & > b {
      color: red;
    }
  }
  div > .ant-input-lg {
    font-size: 1.4rem;
    padding: 1rem;
  }
  .ant-input-password {
    font-size: 1.4rem;
    padding: 1rem;
  }
`;

// 인증메일발송 , 본인인증 btn
export const ButtonConfirm = styled.button`
  display: block;
  background: ${Maincolor.grayBold};
  color: ${Maincolor.white};
  border: 0.05rem solid ${Maincolor.grayBold};
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  height: 4.3rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${Maincolor.redDeep};
  }
`;

export const ConfirmArray = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  .ant-form-item {
    width: calc(100% - 1rem - 110px);
  }
  & div {
    /* background: pink; */
    & input {
      /* width: 40rem; */
      /* width: calc(40rem - 6rem); */
      width: 100%;
    }
  }
  & button {
    width: 110px;
    margin-left: 1rem;
  }
`;

// 이메일 인증 component styled
export const CertifyWrap = styled.div`
  margin: 2rem 0%;
  height: 100%;
  & > p {
    text-align: center;
    font-size: 1.6rem;
  }
  & > form {
    display: flex;
    margin: 2rem auto;
    width: 25rem;
    height: 3rem;
    line-height: 4rem;
    & button {
      /* margin-top: 1rem; */
      font-size: 1.4rem;
      width: 7rem;
      height: 3rem;
    }

    & .ant-form-item-explain-error {
      margin-left: 0.4rem;
    }
  }
`;

// 지역선택
export const RegionSelectWrap = styled.div`
  & div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    /* gap: 0.3rem; */
    & > label {
      position: relative;
      width: 6.5rem;
      /* padding: 1.3rem; */
      padding: 0;
      margin: 0.3rem;
      border: 0.1rem solid ${Maincolor.grayMedium};
      border-radius: 0.8rem;
      & span {
        position: absolute;
        top: 1rem;
        left: 1.9rem;
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
    // 버튼 클릭 시 스타일 바꾸기
    & .ant-radio-button-wrapper-checked {
      background: ${Maincolor.redBold};
      transition: 0.2s ease-in-out;
      & > span {
        color: ${Maincolor.white};
      }
    }
    // ant button 좌측 선 없애기
    & .ant-radio-button-wrapper::before {
      width: 0;
    }
  }
  & > ul {
    /* height: 2.6rem; */
    color: ${Maincolor.black};
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 0.2rem;
    margin-bottom: 0.5rem;
    padding: 0;
    line-height: 1rem;
    & li {
      color: #ff4d4f;
      font-size: 1.4rem;
      margin: 0.3rem 0;
      padding: 0;
    }
  }
`;

// 이용약관
export const TermsWarp = styled.div`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  margin-bottom: 3rem;
  & > label > span {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.7rem;
  }
  & > span {
    position: relative;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.7rem;
    margin-bottom: 1rem;
    & b {
      position: absolute;
      top: -0.2rem;
      margin-left: 0.2rem;
      font-size: 1.4rem;
      color: red;
    }
  }
`;

export const TermsFlex = styled.div`
  padding: 0.3rem 1rem 0.3rem 1rem;
  & label span {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.7rem;
    & strong {
      color: ${opacity.gray};
    }
  }
  // 약관보기
  & div {
    display: block;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: space-between; */
    & > span {
      position: relative;
      float: right;
      display: inline-block;
      /* font-size: 1.4rem; */
      font-size: 1.2rem;
      font-weight: 500;
      color: ${Maincolor.redDeep};
      /* line-height: 1.7rem; */
      cursor: pointer;
      margin-top: 2.4px;
      /* margin-right: 1rem; */
      /* margin-left: 20rem; */
      & svg {
        position: absolute;
        top: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
        margin-left: 3px;
      }
    }
  }
`;

export const TermsInfoScroll = styled.div`
  font-family:
    "Pretendard Variable",
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    sans-serif;
  font-size: 1.1rem;
  /* width: 30rem; */
  /* height: 50rem; */
  overflow-y: scroll;
  height: 100%;
  /* & h2 {
    font-size: 1.4rem;
  }
  & > p {
    font-size: 1.2rem;
    font-weight: 900;
  } */
  & > div {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 5px;
      color: ${Maincolor.black};
    }
    ul {
      font-size: 1.4rem !important;
      & > li {
        font-size: 0.9em;
        font-weight: 500 !important;
        text-align: left;
        margin-bottom: 5px;
        &:first-of-type {
          margin-bottom: 5px !important;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        ol {
          margin-top: 5px;
          margin-left: 10px;
          opacity: 0.7;
          & > li {
            margin-bottom: 3px !important;
            font-weight: 500 !important;
            &:first-of-type {
              margin-bottom: 3px !important;
            }
            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
`;

export const JoinEditBtn = styled.div`
  & button {
    margin: -1rem 0;
  }
`;
