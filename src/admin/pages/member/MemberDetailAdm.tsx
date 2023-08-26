/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MemberDetailListItem from "../../components/member/MemberDetailListItem";
// import { getMemberDetail } from "../../api/patchAdmMember";
import {
  IUserDetail,
  IUserDetailState,
  IUserIdState,
  IUserOrderList,
} from "../../interface/MemberInterface";
import MamberDetailPaginate from "../../components/member/MamberDetailPaginate";

const MemberDetailAdm = () => {
  const location = useLocation();
  const [clickUserId, setClickUserId] = useState<IUserIdState>({
    clickUserId: 1,
  });
  const [userInfomation, setUserInfomation] = useState<IUserDetail>({
    page: {
      page: 1,
      row: 1,
      startIdx: 1,
      totalRecordCount: 1,
      totalPage: 1,
      pageSize: 1,
      prev: false,
      next: false,
      startPage: 1,
      endPage: 1,
    },
    userInfo: {
      userId: 1,
      email: "",
      nm: "",
    },
    clickUserId: 1,
    userOrderList: [] as IUserOrderList[],
  });

  console.log("location", location);
  useEffect(() => {
    setClickUserId(location.state);
  }, [location.state]);
  return (
    <div>
      {/* <MemberDetailListItem userInfomation={userInfomation} /> */}
      <MamberDetailPaginate
        userInfomation={userInfomation}
        setUserInfomation={setUserInfomation}
        clickUserId={clickUserId.clickUserId}
      />
    </div>
  );
};

export default MemberDetailAdm;
