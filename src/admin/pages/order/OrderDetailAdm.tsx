/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/
import React, { useEffect, useState } from "react";
import { AdmOrderDetailData } from "../../api/admorderdetail";
import {
  TableHorizontal,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
} from "../../style/AdminLayoutStyle";
import { useLocation, useOutletContext } from "react-router";
import { OdData, OdData2 } from "../../interface/DetailInterface";

const OrderDetailAdm = () => {
  const orderId = useLocation();
  const { listPathName } = useOutletContext() as { listPathName: string };
  const [orderDetail, setOrderDetail] = useState<Array<OdData>>([]);
  const [orderDetail2, setOrderDetail2] = useState<OdData2>();
  const getOdDetailData = async () => {
    try {
      const data = await AdmOrderDetailData(parseInt(orderId.state));
      // console.log(data);
      setOrderDetail(data.list1);
      setOrderDetail2(data.list2);
      // console.log(data.list1);
    } catch (err) {
      console.error("데이터 로드 중 오류 발생", err);
    }
  };

  useEffect(() => {
    getOdDetailData();
  }, []);

  const gridTemplateColumns = {
    columns: "0.3fr 0.5fr 0.8fr 1.6fr 0.6fr 0.4fr",
  };

  interface OrderSt {
    [key: number]: string;
  }

  // 주문상태 셀렉트 버튼
  const orderSt: OrderSt = {
    1: "결제 완료",
    2: "배송중",
    3: "배송완료",
    4: "픽업대기",
    5: "픽업완료",
    6: "주문취소",
  };

  return (
    <div>
      <TableVertical>
        {/* 데이터 테이블 - 타이틀 */}
        <TableLayoutTitle
          listPathName={listPathName}
          style={{
            gridTemplateColumns: gridTemplateColumns.columns,
          }}
        >
          <li>주문번호</li>
          <li>주문 날짜</li>
          <li>아이디</li>
          <li>주문상품</li>
          <li>상품금액</li>
          <li>주문수량</li>
        </TableLayoutTitle>
        {/* 데이터 테이블 - 내용 */}
        <>
          {orderDetail?.map((item, index) => (
            <TableLayoutContents
              key={item.uniqueId}
              listPathName={listPathName}
              style={{
                gridTemplateColumns: gridTemplateColumns.columns,
              }}
            >
              <React.Fragment>
                {index === 0 ||
                orderDetail[index - 1].orderId !== item.orderId ? (
                  <>
                    <li>{item.orderId}</li>
                    <li>{item.orderDate}</li>
                    <li>{item.email}</li>
                    <li className="tal">{item.nmKor}</li>
                    <li>{item.salePrice.toLocaleString()}원</li>
                    <li>{item.quantity}개</li>
                  </>
                ) : (
                  <>
                    <li>{""}</li>
                    <li>{""}</li>
                    <li>{""}</li>
                    <li className="tal">{item.nmKor}</li>
                    <li>{item.salePrice.toLocaleString()}원</li>
                    <li>{item.quantity}개</li>
                  </>
                )}
              </React.Fragment>
            </TableLayoutContents>
          ))}
        </>
      </TableVertical>
      <br />
      <TableHorizontal listPathName={listPathName}>
        {/* 데이터 테이블 - 타이틀 */}
        <table>
          <tbody>
            <>
              <tr>
                <th className="table-title">총 주문수량</th>
                <td className="table-content">{orderDetail2?.quantity}개</td>
                <th className="table-title">픽업 장소</th>
                <td className="table-content">{orderDetail2?.storeNm}</td>
              </tr>
              <tr>
                <th className="table-title">총 결제 금액</th>
                <td className="table-content">
                  {orderDetail2?.totalPrice.toLocaleString()}
                </td>
                <th className="table-title">픽업 날짜</th>
                <td className="table-content">{orderDetail2?.pickUpDate}</td>
              </tr>
              <tr>
                <th className="table-title">결제 수단</th>
                <td className="table-content">
                  {" "}
                  {orderDetail2?.payment === 0 || orderDetail2?.payment === 1
                    ? "신용카드"
                    : orderDetail2?.payment}
                </td>
                <th className="table-title">픽업 시간</th>
                <td className="table-content">{orderDetail2?.pickUpTime}</td>
              </tr>
              <tr>
                <th className="table-title">픽업 완료 여부</th>
                <td className="table-content">
                  {orderDetail2?.orderStatus !== undefined &&
                    orderSt[orderDetail2.orderStatus]}
                </td>
              </tr>
            </>
          </tbody>
        </table>
      </TableHorizontal>
    </div>
  );
};

export default OrderDetailAdm;
