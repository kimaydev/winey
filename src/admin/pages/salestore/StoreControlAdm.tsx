import React, { useState } from "react";
import StoreControlList from "../../components/salestore/StoreControlList";
import StoreControlPaginate from "../../components/salestore/StoreControlPaginate";
import {
  IStoreDetailList,
  IStoreInfo,
  IStoreInfoState,
} from "../../interface/StoreInterface";
import { regionOptions } from "../member/MemberControlAdm";

const StoreControlAdm = () => {
  const [storeInfomation, setStoreInfomation] = useState<IStoreInfo>({
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
    list: [] as IStoreDetailList[],
  });
  console.log("storeInfomation", storeInfomation);

  const regionConvert: Array<IStoreDetailList> = storeInfomation.list.map(
    item => {
      const changeList: {
        regionNmId: number;
        value: string;
      }[] = regionOptions.filter(
        option => item.regionNmId === option.regionNmId,
      );
      if (changeList.length > 0) {
        return { ...item, textRegion: changeList[0].value };
      }
      return item;
    },
  );
  return (
    <div>
      <StoreControlList regionConvert={regionConvert} />
      <StoreControlPaginate
        storeInfomation={storeInfomation}
        setStoreInfomation={setStoreInfomation}
      />
    </div>
  );
};

export default StoreControlAdm;