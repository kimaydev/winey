import React from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProductCompleteBox,
  ProductCompleteMain,
  ProductCompleteText,
  ProductCompleteinfo,
} from "../../style/ProductCompleteStyle";
import { Link, useLocation } from "react-router-dom";
import NoImage from "../../assets/no_image.jpg";

const ProductCompleteCart = () => {
  const location = useLocation();
  const stateItem = location.state.editProductCollect;
  const statePick = location.state;
  const finalQuan = index => {
    return location.state.editProductCollect[index].quantity;
  };

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  return (
    <ProductCompleteMain>
      <ProductCompleteText>
        <img
          src={`${process.env.PUBLIC_URL}/images/icon_sell_complete.svg`}
          alt="complete"
        />
        <p>결제가 완료되었습니다!</p>
        <span>
          픽업예정일과 시간에 맞춰 상품을 수령해주세요.
          <br />
          신분증을 소지하고 방문해 주시기 바랍니다.
        </span>
      </ProductCompleteText>
      {stateItem && (
        <ProductCompleteinfo>
          {stateItem.map((option, index) => (
            <div key={index}>
              <div className="imgWrap">
                <img
                  src={`/img/${option.pic}
                  `}
                  alt="img"
                  onError={onImgError}
                />
              </div>
              <ul>
                <li>{option.nmKor}</li>
                <li>{option.nmEng}</li>
                <li>
                  {(option.price * finalQuan(index)).toLocaleString()}원{" "}
                  <span>
                    {/* {option.finalQuantity} */}
                    {finalQuan(index)}개
                  </span>{" "}
                </li>
              </ul>
            </div>
          ))}
        </ProductCompleteinfo>
      )}
      <ProductCompleteBox>
        <div>
          {statePick && (
            <div>
              <ul>
                <li>
                  <span>픽업 지점</span>
                  <span>이마트 {statePick.selectCollect.pickUpSpot.nm}</span>
                </li>
                <li>
                  <span>픽업 주소</span>{" "}
                  <span>{statePick.selectCollect.pickUpSpot.address}</span>
                </li>
                <li>
                  <span>픽업 날짜</span>
                  <span>
                    {statePick.selectCollect.changeDate.substring(0, 16)}
                  </span>
                </li>
                <li>
                  <span>총 결제금액</span>{" "}
                  <span>{statePick.totalPrice.toLocaleString()}원</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="confirmButton">
          <Link to="/selllist" className="ok-link">
            주문내역 확인 하기
          </Link>
          <Link to="/main" className="cancel-link">
            메인보기
          </Link>
        </div>
      </ProductCompleteBox>
    </ProductCompleteMain>
  );
};

export default ProductCompleteCart;
