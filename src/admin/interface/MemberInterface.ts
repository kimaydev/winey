/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

// 페이지네이션
export interface IinitialPg {
  page: number;
  row: number;
}

export interface IMemberState {
  memberList: IMemControl;
  setMemberList: React.Dispatch<React.SetStateAction<IMemControl>>;
  sortOption: IMemberSortOption;
  sortSearch: string;
  textSearch: string;
}

export interface IMemControl {
  page: {
    page: number;
    row: number;
    startIdx: number;
    totalRecordCount: number;
    totalPage: number;
    pageSize: number;
    prev: boolean;
    next: boolean;
    startPage: number;
    endPage: number;
  };
  list: IMemberListUser[];
}

export interface IMemberListUser {
  userId: number;
  email: string;
  nm: string;
  regionNmId: number;
  createdAt: string;
  textRegion?: string;
  value?: string;
}

export interface IUserDetailState {
  userInfomation: IUserDetail;
  setUserInfomation: React.Dispatch<React.SetStateAction<IUserDetail>>;
  clickUserId?: number;
  sortOption: IMemberSortOption;
}

export interface IUserIdState {
  clickUserId: number;
  setClickUserID?: React.Dispatch<React.SetStateAction<number>>;
}

export interface IUserDetail {
  page: {
    page: number;
    row: number;
    startIdx: number;
    totalRecordCount: number;
    totalPage: number;
    pageSize: number;
    prev: boolean;
    next: boolean;
    startPage: number;
    endPage: number;
  };
  userInfo: {
    userId: number;
    email: string;
    nm: string;
    sumOrderPrice: number;
    orderCount: number;
  };
  userOrderList: IUserOrderList[];
  clickUserId?: number;
}

export interface IUserOrderList {
  orderId: number;
  orderDate: string;
  nmKor: string;
  price: number;
  storeNm: string;
  count: number;
  orderStatus: number;
  textOrder?: string;
}
export interface IMemberSortOption {
  type: string;
  sort: string;
}
// export interface ITextSearchState {
//   textSearch: string;
//   setTextSearch?: React.Dispatch<React.SetStateAction<string>>;
// }
// export interface ISortSearchState {
//   sortSearch: string;
//   setSortSearch?: React.Dispatch<React.SetStateAction<string>>;
// }
