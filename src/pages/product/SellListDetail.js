/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/
import React, { useEffect, useState } from "react";
import {
  DetailButtonOk,
  DetailTotalPrice,
  SellListDetailBox,
  SellListDetailWrap,
  SellListDetailinfo,
} from "../../style/SellListDetailStyle";
import { ReviewOk } from "../../style/SellListStyle";
import ReviewModal from "../../components/selllist/ReviewModal";
import { getdetailData } from "../../api/patchselllist";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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

  // 주문 상세 내역 출력
  const filleddetailData = async () => {
    const parts = iselllist.split(":");
    const numberPart = parts[0];
    const numberValue = parseInt(numberPart);
    try {
      const data = await getdetailData(numberValue);
      setDetailData(data);
      setProductInfo(data.vo1);
      // data.vo1[0].price = data.vo2.totalOrderPrice;
      setproductDes(data.vo2);
      // console.log("vo1 데이터 ", data.vo1);
      // console.log("vo2 데이터 ", data.vo2);
      // console.log("주문 상세 내역 출력", data);
    } catch (err) {
      // console.log(err);
    }
  };

  // 주문내역 출력 useEffect
  useEffect(() => {
    filleddetailData();
  }, [reviewReset]);

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
      if (item.orderDetailId === reviewId) {
        item.review = 1;
      }
      return item;
    });
    setProductData(arr);
  };

  // 상품에 해당하는 평점을 등록하는 함수
  const submitRating = (key, rating) => {
    const updatedReviewSubmit = { ...reviewSubmit };
    updatedReviewSubmit[key] = true;
    setReviewSubmit(updatedReviewSubmit);
  };

  const payment = {
    0: "신용카드",
    1: "신용카드",
  };

  const orderStatus = {
    1: "결제 완료",
    2: "배송중",
    3: "배송완료",
    4: "픽업대기",
    5: "픽업완료",
    6: "주문취소",
  };

  return (
    <SellListDetailBox>
      {productInfo?.map((item, idx) => (
        <div className="box-list" key={idx}>
          <SellListDetailinfo>
            <SellListDetailWrap>
              <Link to={`/productdetail/${item.productId}`}>
                <img src={`/img/${item.pic}`} alt="와인사진" />
              </Link>
            </SellListDetailWrap>
            <div className="box-text">
              <ul>
                <li>
                  <Link to={`/productdetail/${item.productId}`}>
                    {item.nmKor}
                  </Link>
                </li>
                <li>{item.nmEng}</li>
                {/* salePrice가 있으면 먼저 출력, 없으면 Price 출력 */}
                {item.salePrice ? (
                  <li>{parseInt(item.salePrice).toLocaleString()}원</li>
                ) : (
                  <li>{parseInt(item.price).toLocaleString()}원</li>
                )}
                <li>{item.quantity}개</li>
                {/* 리뷰 등록시 버튼 바뀜 <li>{item.reviewYn}</li> */}
              </ul>
            </div>
          </SellListDetailinfo>
          {item.reviewYn ? (
            <ReviewOk>평점등록이 완료되었습니다</ReviewOk>
          ) : (
            <>
              {(productDes.orderStatus >= 1 && productDes.orderStatus <= 3) ||
              productDes.orderStatus === 6 ? (
                <DetailButtonOk disabled>평점등록</DetailButtonOk>
              ) : (
                <DetailButtonOk onClick={() => showModal(item.orderDetailId)}>
                  평점등록
                </DetailButtonOk>
              )}
            </>
          )}
        </div>
      ))}
      <DetailTotalPrice>
        <p>
          결제 방법 <span>{payment[`${productDes.payment}`]}</span>
        </p>
        <p>
          픽업 지점 <span> {productDes.storeNm}</span>
        </p>
        <p>
          픽업 시간
          <span>
            {productDes.pickupTime?.slice(0, 10)}
            &nbsp;
            {productDes.pickupTime?.slice(11, 16)}
          </span>
        </p>
        <p>
          주문 상태 <span>{orderStatus[`${productDes.orderStatus}`]}</span>
        </p>
        <p>
          총 결제금액
          <strong>
            {parseInt(productDes.totalOrderPrice).toLocaleString()}원
          </strong>
        </p>
      </DetailTotalPrice>
      <ReviewModal
        reviewId={reviewId}
        reviewReset={reviewReset}
        hideModal={hideModal}
        reviewSubmitUpdate={reviewSubmitUpdate}
        submitRating={rating => submitRating(rating)}
      />
    </SellListDetailBox>
  );
};

export default SellListDetail;
