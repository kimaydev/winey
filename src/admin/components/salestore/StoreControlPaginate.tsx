import React, { useEffect, useState } from "react";
import { IinitialPg } from "../../interface/MemberInterface";
import { PaginationWrap } from "../../style/AdminLayoutStyle";
import { Pagination } from "antd";
import { IStoreInfo, IStoreInfoState } from "../../interface/StoreInterface";
import { deleteStore, getStoreList } from "../../api/patchAdmStore";

const StoreControlPaginate = ({
  storeInfomation,
  setStoreInfomation,
  editZip,
  sortOption,
  sortSearch,
  textSearch,
  paginate,
  setPaginate,
}: IStoreInfoState) => {
  // const [paginate, setPaginate] = useState<IinitialPg>({ page: 1, row: 10 });
  const pageInfo: IStoreInfo["pageableCustom"] | null =
    storeInfomation?.pageableCustom;

  const onChange = async (page: number) => {
    setPaginate(prevPaginate => ({ ...prevPaginate, page }));
  };

  const getPage = async () => {
    // 페이지 정보를 보내고(paginate) , list 정보를 받는다
    try {
      const getdata: any = await getStoreList(
        paginate,
        sortOption,
        sortSearch,
        textSearch,
      );
      setStoreInfomation(getdata);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getPage();
  }, [paginate.page, editZip, deleteStore, sortOption, textSearch]);

  return (
    <div>
      <PaginationWrap>
        {pageInfo && (
          <Pagination
            current={pageInfo.page}
            pageSize={paginate.row}
            onChange={page => onChange(page)}
            total={pageInfo.totalElements}
            // size="small"
          />
        )}
      </PaginationWrap>
    </div>
  );
};

export default StoreControlPaginate;
