/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { client } from "./client";
import { getUser } from "../reducers/userSlice";
import axios from "axios";

// 회원가입
export const postUserJoin = async userInfo => {
  try {
    const res = await client.post("/sign-api/sign-up", {
      email: userInfo.email,
      upw: userInfo.password,
      unm: userInfo.nm,
      tel: userInfo.tel,
      regionNmId: userInfo.regionNmId,
    });
    // console.log(res);
    const data = await res.data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// 회원정보 get redux toolkit
export const getMemberInfo = () => async dispatch => {
  try {
    // const res = await client.get("/api/mypage/user-info");
    const res = await client.get("/api/mypage/userinfo");
    const result = await res.data;
    // console.log("회원정보 get result", result);
    dispatch(getUser(result));
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 회원정보수정 patch
export const patchMemberInfo = async editUserInfo => {
  try {
    // const res = await client.patch("/api/mypage/user-correction", {
    const res = await client.put("/api/mypage/upduser", {
      // pw: editUserInfo.editpassword,
      unm: editUserInfo.editUserName,
      tel: editUserInfo.editUserTel,
      regionNmId: editUserInfo.editUserCity,
    });
    // console.log("res", res);
    const result = await res.data;
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 회원탈퇴 delete
export const deleteMember = async () => {
  try {
    // const res = await client.delete("/api/mypage/user-secession");
    const res = await client.put("/api/mypage/delUser");
    // console.log("res", res);
    const result = await res.data;
    // console.log("회원삭제성공", result);
  } catch (error) {
    console.log("del, Err", error);
  }
};

// 로그아웃
export const getLogout = async () => {
  try {
    const res = await client.get("/sign-api/logout");
    // console.log(res);
    const result = await res.data;
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
// 중복메일 체크
export const getDuplicateID = async inputEmail => {
  // console.log("patch mail", inputEmail);
  try {
    const res = await client.get(`/api/mypage/emails/${inputEmail}/exists`);
    // console.log(res);
    const result = res.data;
    // console.log("중복체크결과", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 인증메일발송
export const postCertifyMail = async inputEmail => {
  try {
    const res = await client.post(`/api/login/mailConfirm?email=${inputEmail}`);
    // console.log(res);
    const result = await res.data;
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 인증번호 확인하기
export const postConfirmCode = async inputCode => {
  try {
    const res = await client.post(`/api/login/codeConfirm?key=${inputCode}`);
    // console.log(res);
    const result = await res.data;
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
