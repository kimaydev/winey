/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import { Checkbox, Modal } from "antd";
import React, { useState } from "react";
import { TermsFlex, TermsInfoScroll, TermsWarp } from "../../style/JoinStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const TermsInfo = () => {
  return (
    <TermsInfoScroll>
      <p>전자상거래(인터넷사이버몰) 표준약관</p>
      <p>제1조(목적)</p> 이 약관은 PODOJECT 회사가 제작한 Winey 사이버 몰(이하
      `몰`이라 한다)에서 제공하는 인터넷 관련 서비스(이하 `서비스`라 한다)를
      이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을
      목적으로 합니다. ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그
      성질에 반하지 않는 한 이 약관을 준용합니다.」
      <p>제2조(정의)</p>① `몰`이란 PODOJECT 회사가 재화 또는 용역(이하 `재화
      등`이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여
      재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러
      사이버몰을 운영하는 사업자의 의미로도 사용합니다. ② `이용자`란 `몰`에
      접속하여 이 약관에 따라 `몰`이 제공하는 서비스를 받는 회원 및 비회원을
      말합니다. ③ ‘회원’이라 함은 `몰`에 회원등록을 한 자로서, 계속적으로 `몰`이
      제공하는 서비스를 이용할 수 있는 자를 말합니다. ④ ‘비회원’이라 함은 회원에
      가입하지 않고 `몰`이 제공하는 서비스를 이용하는 자를 말합니다.
      <p>제3조 (약관 등의 명시와 설명 및 개정) </p>① `몰`은 이 약관의 내용과
      상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는
      곳의 주소를 포함), 전화번호․모사전송번호․전자우편주소, 사업자등록번호,
      통신판매업 신고번호, 개인정보관리책임자등을 이용자가 쉽게 알 수 있도록 00
      사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은
      이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다. ② `몰은 이용자가
      약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중
      청약철회․배송책임․환불조건 등과 같은 중요한 내용을 이용자가 이해할 수
      있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을
      구하여야 합니다. ③ `몰`은 「전자상거래 등에서의 소비자보호에 관한 법률」,
      「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」,
      「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에
      관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을
      위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ④ `몰`이 약관을
      개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의
      초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만,
      이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전
      유예기간을 두고 공지합니다. 이 경우 `몰`은 개정 전 내용과 개정 후 내용을
      명확하게 비교하여 이용자가 알기 쉽도록 표시합니다. ⑤ `몰`이 약관을 개정할
      경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그
      이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다.
      다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을
      제3항에 의한 개정약관의 공지기간 내에 `몰`에 송신하여 `몰`의 동의를 받은
      경우에는 개정약관 조항이 적용됩니다. ⑥ 이 약관에서 정하지 아니한 사항과 이
      약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의
      규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자
      보호지침 및 관계법령 또는 상관례에 따릅니다.
      <p>제4조(서비스의 제공 및 변경) </p>① `몰`은 다음과 같은 업무를
      수행합니다. 1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결 2.
      구매계약이 체결된 재화 또는 용역의 배송 3. 기타 `몰`이 정하는 업무 ②
      `몰`은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차
      체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이
      경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화
      또는 용역의 내용을 게시한 곳에 즉시 공지합니다. ③ `몰`이 제공하기로
      이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의
      변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로
      즉시 통지합니다. ④ 전항의 경우 `몰`은 이로 인하여 이용자가 입은 손해를
      배상합니다. 다만, `몰`이 고의 또는 과실이 없음을 입증하는 경우에는
      그러하지 아니합니다.
      <p>제5조(서비스의 중단) </p>① `몰`은 컴퓨터 등 정보통신설비의
      보수점검․교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의
      제공을 일시적으로 중단할 수 있습니다. ② `몰`은 제1항의 사유로 서비스의
      제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여
      배상합니다. 단, `몰`이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지
      아니합니다. ③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로
      서비스를 제공할 수 없게 되는 경우에는 `몰`은 제8조에 정한 방법으로
      이용자에게 통지하고 당초 `몰`에서 제시한 조건에 따라 소비자에게
      보상합니다. 다만, `몰`이 보상기준 등을 고지하지 아니한 경우에는 이용자들의
      마일리지 또는 적립금 등을 `몰`에서 통용되는 통화가치에 상응하는 현물 또는
      현금으로 이용자에게 지급합니다.
      <p>제6조(회원가입) </p>① 이용자는 `몰`이 정한 가입 양식에 따라 회원정보를
      기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
      ② `몰`은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에
      해당하지 않는 한 회원으로 등록합니다. 1. 가입신청자가 이 약관 제7조제3항에
      의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한
      회원자격 상실 후 3년이 경과한 자로서 `몰`의 회원재가입 승낙을 얻은
      경우에는 예외로 한다. 2. 등록 내용에 허위, 기재누락, 오기가 있는 경우 3.
      기타 회원으로 등록하는 것이 `몰`의 기술상 현저히 지장이 있다고 판단되는
      경우 ③ 회원가입계약의 성립 시기는 `몰`의 승낙이 회원에게 도달한 시점으로
      합니다. ④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간
      이내에 `몰`에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야
      합니다.
      <p>제7조(회원 탈퇴 및 자격 상실 등) </p>① 회원은 `몰`에 언제든지 탈퇴를
      요청할 수 있으며 `몰`은 즉시 회원탈퇴를 처리합니다. ② 회원이 다음 각 호의
      사유에 해당하는 경우, `몰`은 회원자격을 제한 및 정지시킬 수 있습니다. 1.
      가입 신청 시에 허위 내용을 등록한 경우 2. `몰`을 이용하여 구입한 재화 등의
      대금, 기타 `몰`이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는
      경우 3. 다른 사람의 `몰` 이용을 방해하거나 그 정보를 도용하는 등
      전자상거래 질서를 위협하는 경우 4. `몰`을 이용하여 법령 또는 이 약관이
      금지하거나 공서양속에 반하는 행위를 하는 경우 ③ `몰`이 회원 자격을
      제한․정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가
      시정되지 아니하는 경우 `몰`은 회원자격을 상실시킬 수 있습니다. ④ `몰`이
      회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게
      이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할
      기회를 부여합니다.
      <p>제8조(회원에 대한 통지)</p>① `몰`이 회원에 대한 통지를 하는 경우,
      회원이 `몰`과 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다. ②
      `몰`은 불특정다수 회원에 대한 통지의 경우 1주일이상 `몰` 게시판에
      게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와
      관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.
      <p>제9조(구매신청 및 개인정보 제공 동의 등) </p>① `몰`이용자는 `몰`상에서
      다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, `몰`은 이용자가
      구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다. 1.
      재화 등의 검색 및 선택 2. 받는 사람의 성명, 주소, 전화번호,
      전자우편주소(또는 이동전화번호) 등의 입력 3. 약관내용, 청약철회권이
      제한되는 서비스, 배송료․설치비 등의 비용부담과 관련한 내용에 대한 확인 4.
      이 약관에 동의하고 위 3.호의 사항을 확인하거나 거부하는 표시 (예, 마우스
      클릭) 5. 재화등의 구매신청 및 이에 관한 확인 또는 `몰`의 확인에 대한 동의
      6. 결제방법의 선택 ② `몰`이 제3자에게 구매자 개인정보를 제공할 필요가 있는
      경우 1) 개인정보를 제공받는 자, 2)개인정보를 제공받는 자의 개인정보
      이용목적, 3) 제공하는 개인정보의 항목, 4) 개인정보를 제공받는 자의
      개인정보 보유 및 이용기간을 구매자에게 알리고 동의를 받아야 합니다.
      (동의를 받은 사항이 변경되는 경우에도 같습니다.) ③ `몰`이 제3자에게
      구매자의 개인정보를 취급할 수 있도록 업무를 위탁하는 경우에는 1) 개인정보
      취급위탁을 받는 자, 2) 개인정보 취급위탁을 하는 업무의 내용을 구매자에게
      알리고 동의를 받아야 합니다. (동의를 받은 사항이 변경되는 경우에도
      같습니다.) 다만, 서비스제공에 관한 계약이행을 위해 필요하고 구매자의
      편의증진과 관련된 경우에는 「정보통신망 이용촉진 및 정보보호 등에 관한
      법률」에서 정하고 있는 방법으로 개인정보 취급방침을 통해 알림으로써
      고지절차와 동의절차를 거치지 않아도 됩니다.
      <p>제10조 (계약의 성립)</p>① `몰`은 제9조와 같은 구매신청에 대하여 다음 각
      호에 해당하면 승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을 체결하는
      경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이
      계약을 취소할 수 있다는 내용을 고지하여야 합니다. 1. 신청 내용에 허위,
      기재누락, 오기가 있는 경우 2. 미성년자가 담배, 주류 등 청소년보호법에서
      금지하는 재화 및 용역을 구매하는 경우 3. 기타 구매신청에 승낙하는 것이
      `몰` 기술상 현저히 지장이 있다고 판단하는 경우 ② `몰`의 승낙이
      제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한
      것으로 봅니다. ③ `몰`의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인
      및 판매가능 여부, 구매신청의 정정 취소 등에 관한 정보 등을 포함하여야
      합니다.
      <p>제11조(지급방법)</p> `몰`에서 구매한 재화 또는 용역에 대한
      대금지급방법은 다음 각 호의 방법중 가용한 방법으로 할 수 있습니다. 단,
      `몰`은 이용자의 지급방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도
      추가하여 징수할 수 없습니다. 1. 선불카드, 직불카드, 신용카드 등의 각종
      카드 결제
      <p>제12조(수신확인통지․구매신청 변경 및 취소)</p>① `몰`은 이용자의
      구매신청이 있는 경우 이용자에게 수신확인통지를 합니다. ② 수신확인통지를
      받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후
      즉시 구매신청 변경 및 취소를 요청할 수 있고 `몰`은 배송 전에 이용자의
      요청이 있는 경우에는 지체 없이 그 요청에 따라 처리하여야 합니다. 다만 이미
      대금을 지불한 경우에는 제15조의 청약철회 등에 관한 규정에 따릅니다.
      <p>제13조(재화 등의 공급)</p>① `몰`은 이용자와 재화 등의 공급시기에 관하여
      별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을
      배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만,
      `몰`이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부
      또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 `몰`은
      이용자가 재화 등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를
      합니다. ② `몰`은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용
      부담자, 수단별 배송기간 등을 명시합니다. 만약 `몰`이 약정 배송기간을
      초과한 경우에는 그로 인한 이용자의 손해를 배상하여야 합니다. 다만 `몰`이
      고의․과실이 없음을 입증한 경우에는 그러하지 아니합니다.
      <p>제14조(환급)</p> `몰`은 이용자가 구매신청한 재화 등이 품절 등의 사유로
      인도 또는 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고
      사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3영업일 이내에
      환급하거나 환급에 필요한 조치를 취합니다.
      <p>제15조(청약철회 등)</p>① `몰`과 재화등의 구매에 관한 계약을 체결한
      이용자는 「전자상거래 등에서의 소비자보호에 관한 법률」 제13조 제2항에
      따른 계약내용에 관한 서면을 받은 날(그 서면을 받은 때보다 재화 등의 공급이
      늦게 이루어진 경우에는 재화 등을 공급받거나 재화 등의 공급이 시작된 날을
      말합니다)부터 7일 이내에는 청약의 철회를 할 수 있습니다. 다만, 청약철회에
      관하여 「전자상거래 등에서의 소비자보호에 관한 법률」에 달리 정함이 있는
      경우에는 동 법 규정에 따릅니다. ② 이용자는 재화 등을 배송 받은 경우 다음
      각 호의 1에 해당하는 경우에는 반품 및 교환을 할 수 없습니다. 1. 이용자에게
      책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우(다만, 재화 등의 내용을
      확인하기 위하여 포장 등을 훼손한 경우에는 청약철회를 할 수 있습니다) 2.
      이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우
      3. 시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히
      감소한 경우 4. 같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그 원본인
      재화 등의 포장을 훼손한 경우 ③ 제2항제2호 내지 제4호의 경우에 `몰`이
      사전에 청약철회 등이 제한되는 사실을 소비자가 쉽게 알 수 있는 곳에
      명기하거나 시용상품을 제공하는 등의 조치를 하지 않았다면 이용자의 청약철회
      등이 제한되지 않습니다. ④ 이용자는 제1항 및 제2항의 규정에 불구하고 재화
      등의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해
      재화 등을 공급받은 날부터 3월 이내, 그 사실을 안 날 또는 알 수 있었던
      날부터 30일 이내에 청약철회 등을 할 수 있습니다.
      <p>제16조(청약철회 등의 효과)</p>① `몰`은 이용자로부터 재화 등을 반환받은
      경우 3영업일 이내에 이미 지급받은 재화 등의 대금을 환급합니다. 이 경우
      `몰`이 이용자에게 재화등의 환급을 지연한때에는 그 지연기간에 대하여
      「전자상거래 등에서의 소비자보호에 관한 법률 시행령」제21조의2에서 정하는
      지연이자율을 곱하여 산정한 지연이자를 지급합니다. ② `몰`은 위 대금을
      환급함에 있어서 이용자가 신용카드 또는 전자화폐 등의 결제수단으로 재화
      등의 대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금
      재화 등의 대금의 청구를 정지 또는 취소하도록 요청합니다. ③ 청약철회 등의
      경우 공급받은 재화 등의 반환에 필요한 비용은 이용자가 부담합니다. `몰`은
      이용자에게 청약철회 등을 이유로 위약금 또는 손해배상을 청구하지 않습니다.
      다만 재화 등의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행되어
      청약철회 등을 하는 경우 재화 등의 반환에 필요한 비용은 `몰`이 부담합니다.
      ④ 이용자가 재화 등을 제공받을 때 발송비를 부담한 경우에 `몰`은 청약철회 시
      그 비용을 누가 부담하는지를 이용자가 알기 쉽도록 명확하게 표시합니다.
      <p>제17조(개인정보보호)</p>① `몰`은 이용자의 개인정보 수집시 서비스제공을
      위하여 필요한 범위에서 최소한의 개인정보를 수집합니다. ② `몰`은 회원가입시
      구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상
      의무이행을 위하여 구매계약 이전에 본인확인이 필요한 경우로서 최소한의 특정
      개인정보를 수집하는 경우에는 그러하지 아니합니다. ③ `몰`은 이용자의
      개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를
      받습니다. ④ `몰`은 수집된 개인정보를 목적외의 용도로 이용할 수 없으며,
      새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는
      이용·제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다.
      다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다. ⑤ `몰`이
      제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리
      책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및
      이용목적, 제3자에 대한 정보제공 관련사항(제공받은자, 제공목적 및 제공할
      정보의 내용) 등 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」
      제22조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는
      언제든지 이 동의를 철회할 수 있습니다. ⑥ 이용자는 언제든지 `몰`이 가지고
      있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 `몰`은
      이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의
      정정을 요구한 경우에는 `몰`은 그 오류를 정정할 때까지 당해 개인정보를
      이용하지 않습니다. ⑦ `몰`은 개인정보 보호를 위하여 이용자의 개인정보를
      취급하는 자를 최소한으로 제한하여야 하며 신용카드, 은행계좌 등을 포함한
      이용자의 개인정보의 분실, 도난, 유출, 동의 없는 제3자 제공, 변조 등으로
      인한 이용자의 손해에 대하여 모든 책임을 집니다. ⑧ `몰` 또는 그로부터
      개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을
      달성한 때에는 당해 개인정보를 지체 없이 파기합니다. ⑨ `몰`은 개인정보의
      수집·이용·제공에 관한 동의 란을 미리 선택한 것으로 설정해두지 않습니다.
      또한 개인정보의 수집·이용·제공에 관한 이용자의 동의거절시 제한되는
      서비스를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보의
      수집·이용·제공에 관한 이용자의 동의 거절을 이유로 회원가입 등 서비스
      제공을 제한하거나 거절하지 않습니다.
      <p>제18조(`몰`의 의무)</p>① `몰`은 법령과 이 약관이 금지하거나 공서양속에
      반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고,
      안정적으로 재화․용역을 제공하는데 최선을 다하여야 합니다. ② `몰`은
      이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의
      개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다. ③ `몰`이
      상품이나 용역에 대하여 「표시․광고의 공정화에 관한 법률」 제3조 소정의
      부당한 표시․광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할
      책임을 집니다. ④ `몰`은 이용자가 원하지 않는 영리목적의 광고성 전자우편을
      발송하지 않습니다.
      <p>제19조(회원의 ID 및 비밀번호에 대한 의무)</p>① 제17조의 경우를 제외한
      ID와 비밀번호에 관한 관리책임은 회원에게 있습니다. ② 회원은 자신의 ID 및
      비밀번호를 제3자에게 이용하게 해서는 안됩니다. ③ 회원이 자신의 ID 및
      비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로
      `몰`에 통보하고 `몰`의 안내가 있는 경우에는 그에 따라야 합니다.
      <p>제20조(이용자의 의무) 이용자는 다음 행위를 하여서는 안 됩니다.</p>
      1. 신청 또는 변경시 허위 내용의 등록 2. 타인의 정보 도용 3. `몰`에 게시된
      정보의 변경 4. `몰`이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신
      또는 게시 5. `몰` 기타 제3자의 저작권 등 지적재산권에 대한 침해 6. `몰`
      기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위 7. 외설 또는
      폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 몰에 공개 또는
      게시하는 행위
      <p>제21조(연결`몰`과 피연결`몰` 간의 관계)</p>① 상위 `몰`과 하위 `몰`이
      하이퍼링크(예: 하이퍼링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식
      등으로 연결된 경우, 전자를 연결 `몰`(웹 사이트)이라고 하고 후자를 피연결
      `몰`(웹사이트)이라고 합니다. ② 연결`몰`은 피연결`몰`이 독자적으로 제공하는
      재화 등에 의하여 이용자와 행하는 거래에 대해서 보증 책임을 지지 않는다는
      뜻을 연결`몰`의 초기화면 또는 연결되는 시점의 팝업화면으로 명시한 경우에는
      그 거래에 대한 보증 책임을 지지 않습니다.
      <p>제22조(저작권의 귀속 및 이용제한)</p>① `몰`이 작성한 저작물에 대한
      저작권 기타 지적재산권은 `몰`에 귀속합니다. ② 이용자는 `몰`을 이용함으로써
      얻은 정보 중 `몰`에게 지적재산권이 귀속된 정보를 `몰`의 사전 승낙 없이
      복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나
      제3자에게 이용하게 하여서는 안됩니다. ③ `몰`은 약정에 따라 이용자에게
      귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.
      <p>제23조(분쟁해결)</p>① `몰`은 이용자가 제기하는 정당한 의견이나 불만을
      반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치․운영합니다.
      ② `몰`은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을
      처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와
      처리일정을 즉시 통보해 드립니다. ③ `몰`과 이용자 간에 발생한 전자상거래
      분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는
      시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
      <p>제24조(재판권 및 준거법)</p>① `몰`과 이용자 간에 발생한 전자상거래
      분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는
      경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시
      이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는
      민사소송법상의 관할법원에 제기합니다. ② `몰`과 이용자 간에 제기된
      전자상거래 소송에는 한국법을 적용합니다.
    </TermsInfoScroll>
  );
};

export const PrivateInfo = () => {
  return (
    <TermsInfoScroll>
      <p># 개인정보 취급방침(일반 소비자)</p>
      PODOJECT (이하 `회사`라 함)가 제작한 Winey(모바일 웹; 이하 `Winey`라
      함)에서 제공하는 온라인 유통 및 중개 관련 서비스(이하 `서비스`라 함)를
      이용하는 자의 개인정보를 매우 중요하게 생각하며 아래와 같은 개인정보
      취급방침을 가지고 있습니다. 이 개인정보 취급방침은 개인정보와 관련한 법령
      또는 지침의 변경이 있는 경우 갱신되고, 벨루가 정책의 변화에 따라 달라질 수
      있으니 수시로 확인하여 주시기 바랍니다.{" "}
      <p>## **1. 개인정보의 수집 • 이용**</p> 1. 회사가 개인정보를 수집하는
      목적은 이용자의 신분과 서비스 이용의사를 확인하여 최적화되고 맞춤화된
      서비스를 제공하기 위함입니다. 회사는 최초 회원가입 시 서비스의 본질적
      기능을 수행하기 위해 반드시 필요한 최소한의 정보만을 수집하고 있으며
      회사가 제공하는 서비스 이용에 따라 필요한 정보를 추가로 수집할 수
      있습니다. 2. 회사는 개인정보를 수집 • 이용목적 이외에 다른 용도로 이를
      이용하거나 이용자의 동의 없이 제3자에게 이를 제공하지 않습니다. 3. 회사는
      다음과 같은 목적으로 개인정보를 수집하여 이용할 수 있습니다.다만,
      전자상거래 등에서의 소비자보호에 관한 법률, 국세기본법, 전자금융거래법 등
      관련법령에 따라 주민등록번호 및 은행계좌번호의 수집 • 보관이 불가피한
      경우에는 이용자에게 고지하여 해당 정보를 수집할 수 있습니다.{" "}
      <p>### 일반 소비자 회원</p>| 일반 소비자 회원 | 이름, 아이디, 비밀번호,
      휴대폰번호 | | 일반 소비자 회원 | 부정 이용 방지, 비인가 사용 방지, 서비스
      제공 및 계약의 이행 | 방문일시, 서비스 이용 기록 | | 일반 소비자 회원 |
      주문, 결제 서비스 | 주문자정보, 상품 주문/취소/반품/교환/환불 정보,
      수령인정보, 결제정보 | | 일반 소비자 회원 | 신규 서비스 개발, 맞춤 서비스
      제공 및 마케팅,서비스 이용 통계 및 설문 | ### 기타 서비스 이용과정이나
      사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집 • 저장 •
      조합 • 분석 될 수 있습니다. - IP Address, 방문일시, 서비스 이용 기록 등
      이용내역 정보 : 부정 이용 방지, 비인가 사용 방지, 신규서비스 개발 및
      맞춤서비스 제공 등 1. 회사는 이용자의 개인정보를 수집할 경우 법령상 근거가
      없는 한 반드시 이용자의 동의를 얻어 수집하며, 이용자 의 기본적 인권을
      침해할 우려가 있는 인종, 출신지, 본적지, 사상, 정치적 성향, 범죄기록,
      건강상태 등의 정보는 이용자의 동의 또는 법령의 규정에 의한 경우 이외에는
      수집하지 않습니다. 2. 회사는 회원 가입을 만 19세 이상인 경우에 가능하도록
      합니다. 3. 회사는 다음과 같은 방법으로 개인정보를 수집할 수 있습니다. 1.
      홈페이지, 모바일 어플리케이션, 모바일 웹페이지, 서면, 팩스, 전화, 고객센터
      문의하기, 이벤트 응모 2. 생성정보 수집 툴을 통한 자동 수집 4. 회사는
      개인정보를 수집함에 있어, 서비스 제공에 필요한 최소한의 개인정보를 ‘필수
      동의 항목’으로, 그 외 개인정보는 ‘선택 동의 항목’으로 구분하여 이에 대해
      개별적으로 동의할 수 있는 절차를 마련합니다. 회사는 이용자가 필요한
      최소한의 개인정보 이외의 개인정보를 제공하지 아니한다는 이유로 그 서비스의
      제공을 거부하지 않습니다. <p>## **2. 개인정보 제3자 제공**</p> 1. 회사는
      이용자들의 개인정보를 「개인정보의 수집 • 이용」에서 고지한 범위 내에서
      사용하며, 이용자의 사전 동의 없이 동 범위를 초과하여 이용하거나 원칙적으로
      이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의 경우에는
      예외로 합니다. 1. 이용자들이 사전에 공개 또는 제3자 제공에 동의한 경우 2.
      법령의 규정에 의거하거나, 수사, 조사 목적으로 법령에 정해진 절차와 방법에
      따라 수사기관 및 감독당국의 요구가 있는 경우 2. 그 밖에 개인정보 제3자
      제공이 필요한 경우에는 이용자의 동의를 얻는 등 적법한 절차를 통하여
      제3자에게 개인정보를 제공할 수 있습니다. 회사는 이용자들의 거래 이행을
      위하여 필요한 경우 이용자의 동의를 얻는 등 적법한 절차를 통하여 아래와
      같이 개인정보를 제공할 수 있습니다. | 공유받는 자 | 공유하는 항목 |
      공유받는 자의 이용목적 | 보유 및 이용기간 | 공급사 및 도매상 회원 | 1)
      주문자 정보(주문자 아이디, 주문자명, 주문자 전화번호 , 주문자 휴대폰번호)
      2)상품 주문, 취소, 반품, 교환 정보 3) 수령인 정보(수령인명, 휴대폰 번호,
      전화번호) 제공계약 및 전자상거래(통신판매)계약의 이행을 위해 필요한 업무의
      처리 | 서비스 제공기간 (관계법령의 규정에 의하여 보존할 필요가 있는 경우
      및 사전 동의를 득한 경우 해당 보유 기간) | 3. 이용자는 개인정보의 제3자
      제공에 대하여 동의를 하지 않을 수 있고, 언제든지 제3자 제공 동의를 철회할
      수 있습니다. 동의를 거부하시는 경우에도 회원가입서비스는 이용하실 수
      있으나, 제 3자 제공에 기반한 관련 서비스 혹은 정보 조회의 이용/제공이
      제한될 수 있습니다. 기타 개인정보 제3자 제공에 대한 변동사항은 공지 및
      별도 통지를 할 예정입니다 <p>## **3. 개인정보의 취급위탁**</p> 1. 회사는
      원활하고 향상된 서비스를 제공하기 위해 개인정보 취급을 타인에게 위탁할 수
      있습니다. 이 경 우 회사는 사전에 다음 각 호의 사항 모두를 이용자에게 미리
      알리고 동의를 받습니다. 다음 각 호의 어느 하나의 사항이 변경되는 경우에도
      같습니다. 1. 개인정보 취급위탁을 받는 자 2. 개인정보 취급위탁을 하는
      업무의 내용 2. 회사는 정보통신서비스의 제공에 관한 계약을 이행하고 이용자
      편의 증진 등을 위하여 필요한 경우 개인정보취급방침에 따라 가항 각 호의
      사항을 공개함으로써 고지절차와 동의절차를 거치지 아니하고 개인정보 취급을
      타인에게 위탁할 수 있습니다. 3. 회사는 개인정보의 처리와 관련하여 아래와
      같이 업무를 위탁하고 있으며, 관계법령에 따라 위탁 계약 시 개인정보가
      안전하게 관리될 수 있도록 필요한 조치를 하고 있습니다. 회사는 위탁 계약 시
      수탁자의 개인정보 보호조치 능력을 고려하고, 개인정보의 안전한 관리 및 파기
      등 수탁자의 의무 이행 여부를 주기적으로 확인합니다. 또한 위탁 처리하는
      정보는 원활한 서비스를 제공하기 위하여 필요한 최소한의 정보에 국한됩니다.
      <p>## **4. 이용자 개인정보의 보유: 이용기간 및 파기**</p> 회사는 이용자의
      개인정보를 원칙적으로 고지 및 약정한 기간 동안 보유 및 이용하며 개인정보의
      수집 및 이용목적이 달성되거나 이용자의 파기 요청이 있는 경우 지체 없이
      파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안
      보존합니다. 1. 관련법령 및 회사 방침에 의한 정보보유 사유 관계법령의
      규정에 의하여 보존할 필요가 있는 경우 법령에서 규정한 일정한 기간 동안
      이용자 개인정보를 보관합니다. 이 경우 회사는 해당 정보를 별도 분리하여
      보관하고, 그 보관의 목적으로만 이용하며 마케팅 등 다른 목적으로 이용하지
      않습니다. 1. 관련법령에 따른 정보보유 사유 | 통신비밀보호법 제12조의 2 |
      법원의 영장을 받아 수사기관이 요청시 제공 | 로그기록, IP 등 | 3개월 | |
      전자상거래등에서의 소비자보호에 관한 법률 제6조 | 소비자의 불만 또는
      분쟁처리에 관한 기록 | 소비자 식별정보, 분쟁처리 기록 등 | 3년 | |
      전자상거래등에서의 소비자보호에 관한 법률 제6조 | 대금결제 및 재화 등의
      공급에 관한 기록 | 소비자 식별정보, 계약/청약철회 기록 등 | 5년 | |
      전자상거래등에서의 소비자보호에 관한 법률 제6조 | 계약 또는 청약철회 등에
      관한 기록 | 소비자 식별정보, 계약/청약철회 기록 등 | 5년 | | 국세기본법
      제85조의3 | 국세 부과 제척기간 계산 | 국세 증빙자료 등 | 10년 | |
      국세기본법 제85조의3 | 국세징수권 등 소멸시효 계산 | 과세표준과 세액의
      신고자료 등 | 5년 | | 부가가치세법 제71조 | 장부, 세금계산서,
      수입세금계산서, 영수증 등 | 부가가치세의 과세표준과 세액의 신고자료 등 |
      5년 | | 전자금융거래법 제22조 | 전자금융거래기록 확인 | 전자금융거래에
      관한 기록, 상대방에 관한 정보 등 | 5년 | 2. 회사 방침에 의한 정보보유 사유
      부정거래기록 보존 이유: 부정거래의 배제 보존 기간: 6개월 보존 항목: ID,
      휴대폰번호, 이메일 주소, 생년월일, 부정거래사유, 탈퇴 시 회원 상태값 등
      *부정거래 : 법령, 회사와 이용자 간의 서비스 이용 약관 또는 공서양속을
      위반하거나 기타 회사, 회원 또는 타인의 권리나 이익을 침해하는 방법이나
      내용의 거래를 말함. 2. 수집된 개인정보의 보유 • 이용기간은
      서비스이용계약체결(회원가입)시부터 서비스이용계약해지(탈퇴신청, 직권탈퇴
      포함)입니다. 또한 동의 해지 시 회사는 이용자의 개인정보를 상기 명시한
      정보보유 사유에 따라 일정 기 간 저장하는 자료를 제외하고는 지체 없이
      파기하며 개인정보취급이 제3자에게 위탁된 경우에는 수탁자에게도 파기하도록
      지시합니다. 3. 2015년 8월 18일부터, 회사는 1년 동안 회사의 서비스를
      이용하지 않은 이용자의 개인정보는 ‘정보통신망 이용촉진 및 정보보호등에
      관한 법률 제29조’ 에 근거하여 이용자에게 사전통지하고 개인정보를
      파기하거나 별도로 분리하여 저장 합니다. 단, 통신비밀보호법, 전자상거래
      등에서의 소비자보호에 관한 법률 등의 관계법령의 규정에 의하여 보존할
      필요가 있는 경우 관계법령에서 규정한 일정한 기간 동안 이용자 개인정보를
      보관합니다 4. 회사는 다항 기간 만료 30일 전까지 개인정보가 파기되거나
      분리되어 저장 • 관리되는 사실과 기간 만일 및 해당 개인정보의 항목을
      공지사항, 전자우편 등의 방법으로 이용자에게 알립니다. 이를 위해 이용자는
      회사에 정확한 연락처 정보를 제공/수정하여야 합니다. 5. 파기방법 이용자의
      개인정보는 수집 및 이용목적이 달성된 후에는 지체 없이 파기됩니다. 종이에
      출력된 개인정보는 분쇄기로 분쇄하거나 소각 등을 통하여 파기하고, 전자적
      파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법 또는 물리적
      방법을 사용하여 파기합니다. <p>### 5. 쿠키(Cookie)의 운용 및 거부</p> 1.
      쿠키의 사용 목적 1. 회사는 개인 맞춤 서비스를 제공하기 위해서 이용자에
      대한 정보를 저장하고 수시로 불러오는 `쿠키(cookie)`를 사용합니다. 쿠키는
      웹사이트 서버가 이용자의 브라우저에게 전송하는 소량의 정보로서 이용 자
      컴퓨터의 하드디스크에 저장됩니다. 2. 회사는 쿠키의 사용을 통해서만 가능한
      특정된 맞춤형 서비스를 제공할 수 있습니다. 3. 회사는 회원을 식별하고
      회원의 로그인 상태를 유지하기 위해 쿠키를 사용할 수 있습니다.{" "}
      <p>### **6. 이용자의 권리**</p> 1. 이용자는 언제든지 벨루가 사이트의
      “정보수정”을 통하여 회원님의 개인정보를 열람, 정정 처리하실 수 있으며,
      전자우편 또는 서면으로 요청 하신경우 열람, 정정, 삭제 처리해드리겠습니다.
      이용자의 개인정보가 제3자에게 제공되거나 취급위탁된 경우 이용자는 회사
      또는 ‘제3자’/’수탁자’에게 파기를 요청할 수 있습니다. 단, 회원 아이디(ID),
      성명, 주민등록번호,외국인등록번호는 정정이 불가능하며, 개명으로 인한 성명
      변경 및 행정상의 문제로 인한 사업자등록번호 변경은 예외적으로 허용될 수
      있습니다. 기타 법률에 따라 정정 또는 삭제가 금지되거나 제한되어 있는
      경우에는 해당 처리가 제한될 수 있습니다. 또한 개인정보 오류에 대한
      정정요청한 경우에는 다른 법률에 따라 개인정보의 제공을 요청받는 경우가
      아닌 한 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지
      않습니다, 만약 잘못된 개인정보를 이미 제공한 경우에는 정정 처리 결과 를 제
      3자에게 통지 하여 정정이 이루어지도록 하겠습니다. 2. 이용자및 법정
      대리인은 언제든지 벨루가 사이트의 개인정보에 대하여 처리의 정지를 요구 할
      수 있습니다. 다만 아래의 경우에 해당하는 경우 처리정지 요구를 거절할 수
      있습니다. 1. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
      불가피한 경우 2. 다른 사람의 생명 • 신체를 해할 우려가 있거나 다른 사람의
      재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우 3. 개인정보를
      처리하지 아니하면 정보주체와 약정한 서비스를 제공하지 못하는 등 계약의
      이행이 곤란한 경우로서 정보주체가 그 계약의 해지 의사를 명확하게 밝히지
      아니한 경우 3. 회원가입 등을 통해 개인정보의 수집 • 이용 • 제공에 대해
      회원님께서 동의하신 내용을 언제든지 철회할 수 있습니다. 동의 철회는 서면,
      이메일 등으로 연락하시면 지체 없이 개인정보의 삭제 등 필요한 조치를
      하겠습니다. 다만 법률 또는 약관의 규정에 따라 회사가 회원님의 개인정보를
      보존하여야 하는 경우에는 해당 처리가 제한될 수 있습니다. 이 경우 회원님은
      본인 식별을 위하여 반드시 회원아이디(ID)와 본인확 인 식별정보를 밝히셔야
      하며, 철회로 인해 서비스에 다소 제약이 있거나 일부 서비스를 이용하지
      못하실 수 있습니다. <p>## **7. 이용자의 의무**</p> 이용자는 자신의
      개인정보를 보호할 의무가 있으며,회사의 귀책사유가 없이 ID, 비밀번호,
      접근매체 등의 양도 • 대여 • 분실이나 로그인 상태에서 이석 등 이용자 본인의
      부주의나 관계법령에 의한 보안조치로 차단할 수 없는 방법이나 기술을 사용한
      해킹 등 회사가 상당한 주의에도 불구하고 통제할 수 없는 인터넷 상의 문제
      등으로 개인정보가 유출되어 발생한 문제에 대해 회사는 책임을 지지 않습니다.
      1. 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의
      부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다. 2.
      타인의 개인정보를 도용한 회원가입 또는 주민번등록번호 등을 도용하여
      물품거래시 이용자자격 상실과 함께 주민등록법에 의거하여 처벌될 수
      있습니다. 3. 이용자는 아이디, 비밀번호 등에 대해 보안을 유지할 책임이
      있으며 제3자에게 이를 양도하거나 대여할 수 없습니다. 이용자는 회사의
      개인정보보호정책에 따라 보안을 위해 비밀번호의 주기적 변경에 협조할 의무가
      있습니다. 4. 이용자는 회사의 서비스를 이용한 후에는 반드시 로그인 계정을
      종료하고 웹 브라우저 프로그램을 종료해야 합니다. 5. 이용자는 `정보 통신망
      이용촉진 및 정보보호 등에 관한 법률`, “개인정보보호법”, `주민등록법` 등
      기타 개인정보에 관한 법률을 준수하여야 합니다.{" "}
      <p>## **8. 링크 사이트에 대한 책임**</p> 회사는 이용자에게 다른 웹사이트에
      대한 링크를 제공할 수 있습니다. 다만, 링크되어 있는 웹사이트들이
      개인정보를 수집하는 행위에 대해서는 본 `개인정보취급방침`이 적용되지
      않습니다. <p>## **9. 개인정보의 기술적/관리적 보호 대책**</p> 회사는
      이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는
      훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 보호대책을
      강구하고 있습니다. 1. 개인정보의 암호화 이용자의 비밀번호는 일방향
      암호화하여 저장 및 관리되고 있으며, 개인정보의 확인 및 변경은 비밀번호를
      알고 있는 본인에 의해서만 가능합니다. 비밀번호는 이용자의 생일, 전화번호
      등 타인이 추측하기 쉬운 숫자 등을 이용하지 않 도록 비밀번호 생성규칙을
      수립하여 적용하고 있습니다. 주민등록번호, 외국인 등록번호, 은행계좌번호 및
      신용카드번호 등의 개인정보는 안전한 암호 알고리듬즘로 암호화되어 저장 및
      관리되고 있습니다. 2. 해킹 등에 대비한 대책 회사는 해킹 등 회사 정보통신망
      침입에 의해 이용자의 개인정보가 유출되는 것을 방지하기 위해 침입탐지 및
      침입차단 시스템을 24시간 가동하고 있습니다. 만일의 사태에 대비하여 모든
      침입탐지 시스템과 침입차단 시스템은 이중화로 구성하여 운영하고 있으며,
      민감한 개인정보는 암호화 통신 등을 통하여 네트워크상에서 개인정보를
      안전하게 전송할 수 있도록 하고 있습니다. 3. 개인정보 취급자의 최소화 및
      교육 회사는 회사의 개인정보 취급자를 최소한으로 제한하며, 개인정보
      취급자에 대한 교육 등 관리적 조치를 통해 개인정보보호의 중요성을
      인식시키고 있습니다. <p>## **10. 개인정보관리책임자**</p>
      회사는 이용자가 회사의 서비스를 안전하게 이용할 수 있도록 최선을 다하고
      있습니다. 이용자는 회사의 서비스 이용과 관련한 모든 개인정보보호 민원을
      전담부서로 신고하실 수 있으며, 회사는 이용자의 신고사항에 대 해 신속하고
      성실하게 답변해드리고 있습니다. <p>### [개인정보관리책임자]</p>소속부서 :
      프론트엔드팀 ※ 상기 연락처 등은 “개인정보보호 고객센터”로 연결됩니다. 기타
      개인정보침해에 대한 신고 또는 상담이 필요하신 경우에는 아래 기관으로
      문의하시기 바랍니다. - 개인정보분쟁조정위원회 (www.kopico.or.kr / 118) -
      개인정보침해신고센터 (http://privacy.kisa.or.kr / 118) - 대검찰청
      사이버범죄수사단 (www.spo.go.kr/ 02-3480-3571) - 경찰청 사이버테러대응센터
      (www.netan.go.kr / 1566-0112) <p>## **11. 고지의 의무** </p>현
      개인정보취급방침은 정부의 정책 또는 회사의 필요에 의하여 변경될 수 있으며
      내용의 추가 및 삭제, 수정이 있을 시에는 시행 7일 전에 홈페이지 또는
      이메일을 통해 사전 공지하며 사전 공지가 곤란한 경우 지체 없이 공지하며, 이
      정책은 공지한 날로부터 시행됩니다. 다만, 개인정보의 수집 • 이용 목적,
      제3자 제공대상 등 중요한 사항이 추가 및 삭제, 수정되는 경우에는 30일 전에
      사전 공지하고, 30일이 경과된 후에 시행됩니다. 또한 당사는 개인정보의 수집
      및 활용, 제3자 제공 등 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등
      관련법령에 따라 고객의 별도 동의가 필요한 사항과 관련된 내용이 추가,
      변경되는 경우에는 관련 법령에 따른 고객의 별도 동의를 받습니다.
    </TermsInfoScroll>
  );
};

export const Terms = ({ checkAll, setCheckAll }) => {
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);

  // // 약관동의 state
  // const [checkAll, setCheckAll] = useState(false);

  const plainOptions = ["terms", "private"];

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = e => {
    console.log("onCheckAllChange", e);
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  // 약관보기 모달창 관련
  const handleCheckTerms = () => {
    Modal.info({
      title: "WINEY 이용약관",
      content: (
        <div>
          <TermsInfo />
        </div>
      ),
      onOk() {},
    });
  };
  const handleCheckedPrivate = () => {
    Modal.info({
      title: "WINEY 개인정보 처리방침",
      content: (
        <div>
          <PrivateInfo />
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <TermsWarp>
      <span>
        이용약관동의 <b>*</b>
      </span>
      <Checkbox
        indeterminate={indeterminate}
        checked={checkAll}
        onChange={e => onCheckAllChange(e)}
        // onClick={e => onCheckAllChange(e)}
      >
        전체 동의합니다.
      </Checkbox>
      <TermsFlex>
        <Checkbox.Group
          // options={plainOptions}
          value={checkedList}
          onChange={onChange}
        >
          <div>
            <Checkbox value={plainOptions[0]}>
              이용약관 동의 <strong>(필수)</strong>
            </Checkbox>
            <span onClick={() => handleCheckTerms()}>
              약관보기
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
          <div>
            <Checkbox value={plainOptions[1]}>
              개인정보 수집·이용 동의 <strong>(필수)</strong>
            </Checkbox>
            <span onClick={() => handleCheckedPrivate()}>
              약관보기
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </Checkbox.Group>
      </TermsFlex>
    </TermsWarp>
  );
};
