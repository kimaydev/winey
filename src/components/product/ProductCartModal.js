import React from "react";
import { useNavigate } from "react-router-dom";
import { CartCompleteModal } from "../../style/GlobalComponents";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";

const ProductCartModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const navigate = useNavigate();
  const handleCartLink = e => {
    e.preventDefault();
    navigate("/cart");
  };
  return (
    <CartCompleteModal
      closeIcon={null}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <p>
        <i>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
            alt="장바구니"
          />
        </i>
        상품을 장바구니에 담았습니다.
      </p>
      <ButtonOk onClick={handleCartLink}>장바구니 바로가기</ButtonOk>
      <ButtonCancel onClick={handleCancel}>상품 더보기</ButtonCancel>
    </CartCompleteModal>
  );
};

export default ProductCartModal;
