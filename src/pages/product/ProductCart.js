import React, { useState } from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProudctTotalItem,
  ProductCartNone,
  ProductCartIn,
  ProductCartInfo,
  GoodsEa,
  CartTotalPrice,
  CartTotalPriceOne,
} from "../../style/ProductCartStyle";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

const ProductCart = () => {
  // 장바구니에 담긴 상품 리스트를 추적하는 상태
  const [cartItems, setCartItems] = useState([]);

  // 상품을 장바구니에 추가하는 함수
  const addItemToCart = () => {
    const newItem = {
      id: cartItems.length + 1,
      name: "제프 까렐, 울띰 헤꼴뜨",
      description: "Ultime Recolte By Jeff Carrel",
      price: "32,900원",
      quantity: 1,
      image: "상품 이미지",
    };
    setCartItems([...cartItems, newItem]);
  };

  // 상품을 장바구니에서 제거하는 함수
  const removeItemFromCart = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // 상품의 수량을 증가시키는 함수
  const increaseQuantity = id => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // 상품의 수량을 감소시키는 함수
  const decreaseQuantity = id => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      const priceWithoutWon = Number(
        item.price.replace("원", "").replace(",", ""),
      );
      totalPrice += priceWithoutWon * item.quantity;
    });
    return totalPrice;
  };

  const navigate = useNavigate();

  return (
    <>
      <button onClick={addItemToCart}>상품 추가 테스트 버튼</button>
      {/* 상품이 장바구니에 담겨있지 않을 때 */}
      {cartItems.length === 0 ? (
        <ProductCartNone>
          <div>
            <i>
              <FontAwesomeIcon icon={faExclamation} />
            </i>
          </div>
          장바구니에 담긴 상품이 없습니다.
        </ProductCartNone>
      ) : (
        // 상품이 장바구니에 담겨있을 때
        <ProductCartIn>
          <ProudctTotalItem>
            장바구니에 총 {cartItems.length}개의 상품이 있습니다.
          </ProudctTotalItem>
          <ul>
            {cartItems.map(item => (
              <ProductCartInfo key={item.id}>
                {/* 상품 정보를 표시하는 JSX */}
                <div>{item.image}</div>
                <span>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                  <GoodsEa>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </GoodsEa>
                </span>
                <button onClick={() => removeItemFromCart(item.id)}>X</button>
              </ProductCartInfo>
            ))}
          </ul>
          <CartTotalPrice>
            <li>최종결제금액</li>
            <CartTotalPriceOne>
              {/* calculateTotalPrice 로 총 금액 표시 */}
              {calculateTotalPrice().toLocaleString()}
              <span>원</span>
            </CartTotalPriceOne>
          </CartTotalPrice>
          <ButtonOk
            onClick={() => {
              navigate("/productsell");
            }}
          >
            구매하기
          </ButtonOk>
        </ProductCartIn>
      )}
      <ButtonCancel
        onClick={() => {
          navigate("/");
        }}
      >
        메인으로 돌아가기
      </ButtonCancel>
    </>
  );
};

export default ProductCart;
