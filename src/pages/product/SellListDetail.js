import React, { useEffect, useState } from "react";

import {
  DetailButtonOk,
  DetailDay,
  DetailTotalPrice,
  SellListDetailWrap,
  SellListDetailinfo,
} from "../../style/SellListDetailStyle";
import { ReviewOk } from "../../style/SellListStyle";
import ReviewModal from "../../components/selllist/ReviewModal";
import { fetchdetailData, submitReview } from "../../api/patchselllist";
import { useParams } from "react-router";

const SellListDetail = () => {
  // 주문 상세내역 get
  const { iselllist } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [productDes, setproductDes] = useState({});
  const [reviewReset, setReviewReset] = useState(false);
  const [reviewSubmit, setReviewSubmit] = useState({});
  // 리뷰 목록 팝업창 전달 아이디 state
  const [reviewId, setReviewId] = useState(null);

  const [productData, setProductData] = useState([]);

  // 결제 총 금액 더미데이터
  const orderData = {};

  // 상품 가격 합산
  const calculateTotalAmount = () => {
    let totalPrice = 0;
    productData.forEach(product => {
      const price = parseInt(product.productPrice.replace(/[^0-9]/g, ""));
      totalPrice += price;
    });
    return totalPrice;
  };

  // 주문 상세 내역 출력
  const filleddetailData = async () => {
    const parts = iselllist.split(":");
    const numberPart = parts[2];
    const numberValue = parseInt(numberPart);
    try {
      const data = await fetchdetailData(numberValue);
      setDetailData(data);
      setProductInfo(data.vo1);
      setproductDes(data.vo2);
      console.log("vo1 데이터 ", data.vo1);
      console.log("vo2 데이터 ", data.vo2);
      console.log("주문 상세 내역 출력", data);
    } catch (err) {
      console.log(err);
    }
  };

  // 주문내역 출력 useEffect
  useEffect(() => {
    filleddetailData();
  }, []);

  // 리뷰 모달을 여는 함수
  const showModal = _orderDetailId => {
    setReviewId(_orderDetailId);
    setReviewReset(true);
  };

  // 리뷰 모달을 닫는 함수
  const hideModal = () => {
    setReviewReset(false);
  };

  // 평점 등록이 완료된 항목만 상태를 업데이트
  const reviewSubmitUpdate = () => {
    const arr = productData.map(item => {
      // reviewId : 보관해둔 팝업창 전달한 orderDetailId
      if (item.orderDetailId === reviewId) {
        item.review = 1;
      }
      return item;
    });
    setProductData(arr);

    // hideModal();
    // setReviewSubmit(prevReviewSubmit => {
    //   console.log("");
    //   return { ...prevReviewSubmit, [key]: true };
    // });
  };

  // 상품에 해당하는 평점을 등록하는 함수
  const submitRating = (key, rating) => {
    const updatedReviewSubmit = { ...reviewSubmit };
    updatedReviewSubmit[key] = true; // 평점 등록 상태를 true로 표시
    setReviewSubmit(updatedReviewSubmit);

    // 평점을 포함하여 productData 상태를 업데이트
    const updatedProductData = [...productData];
    updatedProductData[key].rating = rating;
    setProductData(updatedProductData);

    // 리뷰 데이터를 생성하여 엔드포인트로 전송
    const reviewData = {
      orderDetailId: updatedProductData[key].key, // 주문 상세 pk값 추가
      review_level: rating,
      // 리뷰 평점 추가
    };

    submitReview(reviewData);
  };

  return (
    <>
      <DetailDay>{orderData.orderDetailId}</DetailDay>
      {productInfo.map((item, idx) => (
        <SellListDetailinfo key={idx}>
          <SellListDetailWrap>
            <img src={`/img/${item.pic}`} alt="와인사진" />
          </SellListDetailWrap>
          <div>
            <ul>
              <li>{item.nmKor}</li>
              <li>{item.nmEng}</li>
              <li>{item.salePrice}</li>
            </ul>
          </div>

          {item.review ? (
            <ReviewOk>평점등록이 완료되었습니다</ReviewOk>
          ) : (
            <DetailButtonOk onClick={() => showModal(item.orderDetailId)}>
              평점등록
            </DetailButtonOk>
          )}
        </SellListDetailinfo>
      ))}

      <DetailTotalPrice>
        <p>결제 방법: {productDes.payment}</p>
        <p>픽업 지점: {productDes.storeNm}</p>
        <p>픽업 시간: {productDes.pickupTime}</p>
        <p>주문 상태: {productDes.orderStatus}</p>
        <p>
          총 결제금액 <strong>{productDes.totalOrderPrice}원</strong>
        </p>
      </DetailTotalPrice>
      <ReviewOk>평점등록이 완료되었습니다</ReviewOk>
      {/* 리뷰 모달 내용 */}
      <ReviewModal
        reviewId={reviewId}
        reviewReset={reviewReset}
        hideModal={hideModal}
        reviewSubmitUpdate={reviewSubmitUpdate}
        submitRating={rating => submitRating(rating)}
      />
    </>
  );
};

export default SellListDetail;
