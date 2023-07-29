/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, badge, ellipsis, opacity } from "./GlobalStyle";

// 상품 리스트 아이템 스타일링
export const ProductListItem = styled.div`
  .img {
    position: relative;
    background: ${Maincolor.white};
    border: 0.05rem solid ${opacity.white};
    padding-top: 135%;
    overflow: hidden;
    isolation: isolate;
    box-shadow: 0px 9px 8px -6px ${opacity.white};
    & > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    button {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
      display: block;
      width: 40px;
      height: 33px;
      background: ${opacity.wine};
      border-radius: 20px 0 0;
      transition: background 0.2s ease-in-out;
      &:hover {
        background: ${Maincolor.redDeep};
      }
    }
  }
  .txt {
    margin-top: 15px;
    .badge {
      display: flex;
      flex-wrap: wrap;
      min-height: 2.3rem;
      margin-left: -2px;
      margin-bottom: 5px;
      span {
        display: inline-block;
        font-size: 1.1rem;
        color: ${Maincolor.white};
        font-weight: 400;
        padding: 4px 5px 3.5px;
        margin: 2px;
        border-radius: 3px;
        &.recommend {
          background: ${badge.pink};
        }
        &.beginner {
          background: ${badge.green};
        }
      }
    }
    .title {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 10px;
      min-height: 3.22rem;
      ${ellipsis.two}
    }
    .price {
      li {
        font-size: 1.4rem;
        span {
          display: inline-block;
        }
        &:first-of-type {
          color: ${Maincolor.redBold};
          margin-bottom: 2px;
          span {
            font-size: 1.3em;
            font-weight: 700;
          }
        }
        &:last-of-type {
          span {
            text-decoration: line-through;
            color: ${Maincolor.grayBold};
          }
        }
      }
    }
  }
`;
