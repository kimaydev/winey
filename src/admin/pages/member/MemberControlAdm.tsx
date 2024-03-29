/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import MemberControlListItem from "../../components/member/MemberControlListItem";
import { MemberWrap } from "../../style/AdminMemberStyle";
import {
  IMemControl,
  IMemberListUser,
  IMemberSortOption,
  IinitialPg,
} from "../../interface/MemberInterface";
import MemberControlPaginate from "../../components/member/MemberControlPaginate";
import MemberControlSort, {
  initialSortOption,
} from "../../components/member/MemberControlSort";
import { atom, useRecoilState } from "recoil";
// import { v4 } from "uuid";

export const regionOptions = [
  { regionNmId: 1, value: "서울" },
  { regionNmId: 2, value: "부산" },
  { regionNmId: 3, value: "대구" },
  { regionNmId: 4, value: "인천" },
  { regionNmId: 5, value: "광주" },
  { regionNmId: 6, value: "대전" },
  { regionNmId: 7, value: "울산" },
  { regionNmId: 8, value: "세종" },
  { regionNmId: 9, value: "경기" },
  { regionNmId: 10, value: "강원" },
  { regionNmId: 11, value: "충북" },
  { regionNmId: 12, value: "충남" },
  { regionNmId: 13, value: "전북" },
  { regionNmId: 14, value: "전남" },
  { regionNmId: 15, value: "경북" },
  { regionNmId: 16, value: "경남" },
  { regionNmId: 17, value: "제주" },
];

const MemberControlAdm = () => {
  // 정렬 state
  const [sortOption, setSortOption] =
    useState<IMemberSortOption>(initialSortOption);
  const [paginate, setPaginate] = useState<IinitialPg>({ page: 1, row: 10 });

  // 검색 state
  const [textSearch, setTextSearch] = useState<string>("");
  const [sortSearch, setSortSearch] = useState<string>("");

  // 회원정보state
  const [memberList, setMemberList] = useState<IMemControl>({
    pageableCustom: {
      page: 1,
      row: 1,
      totalElements: 1,
    },
    content: [] as IMemberListUser[],
  });
  const [render, setRender] = useState<string>("1");

  // 지역변환
  const regionConvert: Array<IMemberListUser> = memberList?.content?.map(
    item => {
      const changeList: {
        regionNmId: number;
        value: string;
      }[] = regionOptions?.filter(
        option => item.regionNmId === option.regionNmId,
      );
      if (changeList.length > 0) {
        return { ...item, textRegion: changeList[0].value };
      }
      return item;
    },
  );

  return (
    <MemberWrap>
      <MemberControlSort
        memberList={memberList}
        setSortOption={setSortOption}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        sortSearch={sortSearch}
        setSortSearch={setSortSearch}
        paginate={paginate}
        setPaginate={setPaginate}
      />
      <MemberControlListItem
        regionConvert={regionConvert}
        setMemberList={setMemberList}
        memberList={memberList}
        setRender={setRender}
      />
      <MemberControlPaginate
        memberList={memberList}
        setMemberList={setMemberList}
        sortOption={sortOption}
        sortSearch={sortSearch}
        textSearch={textSearch}
        paginate={paginate}
        setPaginate={setPaginate}
        render={render}
      />
    </MemberWrap>
  );
};

export default MemberControlAdm;
