/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/
import axios from "axios";
import { client } from "./client";

export const getSellListData = async () => {
  try {
    const response = await client.get(`/api/orderlist/user`);
    const sellListData = response.data;

    // 데이터를 순서 정렬
    const sortedSellListData = sellListData.sort(
      (a, b) => a.orderNumber - b.orderNumber,
    );

    return sortedSellListData;
  } catch (error) {
    // console.error("API 요청 중 오류 발생", error);
    return [];
  }
};

// 주문 내역 취소
export const cancelSellListData = async cancelSellListData => {
  try {
    const res = await client.put(
      `/api/orderlist/cancel?orderId=${cancelSellListData}`,
    );
    // console.log("res", res);
    const result = await res.data;
    // console.log("주문이 취소 되었습니다", result);
    return result;
  } catch (error) {
    // console.log(error);
  }
};

// 주문 내역 픽업완료
export const finishSellListData = async finishSellListData => {
  try {
    const res = await client.put(
      `/api/orderlist/pickup-finish?orderId=${finishSellListData}`,
    );
    // console.log("res", res);
    const result = await res.data;
    // console.log("픽업 완료 되었습니다", result);
    return result;
  } catch (error) {
    // console.log(error);
  }
};

// 주문 상세 내역
export const getdetailData = async numberValue => {
  try {
    const response = await client.get(
      `/api/orderlist/detail?orderId=${numberValue}`,
    );
    const detailData = response.data;
    return detailData;
  } catch (error) {
    // console.error("API 요청 중 오류 발생", error);
    return [];
  }
};

// 리뷰 등록
export const submitReview = async (orderDetailId, reviewLevel) => {
  try {
    const res = await client.post(`/api/payment/userreview`, {
      orderDetailId,
      reviewLevel,
    });
    // console.log("리뷰가 성공적으로 제출되었습니다:", res);
    const result = await res.data;
    return result;
  } catch (error) {
    console.log("리뷰 제출 중 에러 발생:", error);
  }
};
