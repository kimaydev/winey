/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { Radio, Form, Input, ConfigProvider, Modal, Button } from "antd";

import {
  ButtonConfirm,
  ConfirmArray,
  JoinWrap,
  RegionSelectWrap,
} from "../../style/JoinStyle";
import { ButtonOk } from "../../style/GlobalStyle";
import { Terms } from "../../components/join/Terms";
import { useNavigate } from "react-router-dom";
import CertifyEmail from "../../components/join/CertifyEmail";
import {
  getDuplicateID,
  postCertifyMail,
  postUserJoin,
} from "../../api/joinpatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Join = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState([]);

  // 이메일 인증 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailCertifyOk, setEmailCertifyOk] = useState(false);
  // console.log("emailCertifyOk", emailCertifyOk);
  // 이메일 저장 state
  const [inputEmail, setInputEmail] = useState("");
  //password 유효성 검증 state
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // 약관동의 state
  const [checkAll, setCheckAll] = useState(false);

  // 지역선택 에러처리state
  const [regionError, setRegionError] = useState("");
  const [regionClick, setRegionClick] = useState();

  // 지역선택 옵션
  const regionOptions = [
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

  // 이메일 입력폼 value 담기
  const handleEmailValue = e => {
    setInputEmail(e.target.value);
  };

  // 이메일 인증 모달
  const showModalEmail = async e => {
    const reg = /naver.com/;
    e.preventDefault();
    const check = reg.test(inputEmail);
    if (check === true) {
      // 이메일 중복 체크(중복아이디면 경고창띄우자)
      const dupID = await getDuplicateID(inputEmail);
      if (dupID === true) {
        Modal.warning({
          wrapClassName: "info-modal-wrap notice-modal",
          maskClosable: true,
          okText: "확인",
          // title: "중복아이디",
          content: (
            <ul>
              <li>
                <i>
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                </i>
                이미 가입된 회원입니다.
              </li>
            </ul>
          ),
        });
        return;
      }
      // 중복이 아닐경우에 메일인증번호를 보냄.
      if (dupID === false) {
        // 메일 인증 post
        const temp = await postCertifyMail(inputEmail);

        setIsModalOpen(true);
      }
    }
    if (check === false) {
      Modal.warning({
        wrapClassName: "info-modal-wrap notice-modal",
        maskClosable: true,
        okText: "확인",
        // title: "가입불가안내",
        content: (
          <ul>
            <li>
              <i>
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </i>
              네이버 메일만 이용가능합니다.
            </li>
          </ul>
        ),
      });
      return;
    }
    return;
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 전화번호 본인 인증 모달 핸들러
  const handleCertifyPhone = e => {
    e.preventDefault();
    Modal.success({
      icon: (
        <i>
          <FontAwesomeIcon icon={faCircleCheck} />
        </i>
      ),
      okText: "확인",
      wrapClassName: "info-modal-wrap",
      maskClosable: true,
      // title: "본인 인증",
      content: (
        <ul>
          <li>본인인증이 완료되었습니다.</li>
        </ul>
      ),
      onOk() {
        return;
      },
    });
  };

  // password 유효성 관련 핸들러
  const changePassword = e => {
    setPassword(e.target.value);
    setPasswordError(e.target.value !== passwordConfirm);
  };
  const changePasswordConfirm = e => {
    setPasswordConfirm(e.target.value);
    setPasswordError(e.target.value !== password);
  };

  // 지역선택 에러처리
  const handleRegion = e => {
    setRegionClick(e.target.value);
    if (e.target.value != null) {
      setRegionError("");
    }
  };

  // 회원 가입 핸들러
  const onFinish = async values => {
    // console.log("join values", values);
    // 인증메일 3차 때 진행 예정
    if (emailCertifyOk === false) {
      Modal.warning({
        // title: "메일인증확인",
        okText: "확인",
        wrapClassName: "info-modal-wrap notice-modal",
        maskClosable: true,
        content: (
          <ul>
            <li>
              <i>
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </i>
              메일인증을 진행해 주세요.
            </li>
          </ul>
        ),
      });
      return;
    }
    if (regionClick === undefined || regionClick === "") {
      setRegionError("지역을 선택해 주세요.");
      return;
    }
    if (password !== passwordConfirm) {
      // console.log("비밀번호 불일치");
      return;
    }
    if (checkAll === true) {
      try {
        const goJoin = await postUserJoin(values);
        navigate("/welcome");
      } catch (error) {
        console.log("err", error);
      }
    } else {
      Modal.warning({
        icon: (
          <i className="color_y">
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </i>
        ),
        okText: "확인",
        wrapClassName: "info-modal-wrap",
        maskClosable: true,
        // title: "이용약관동의",
        content: (
          <ul>
            <li>이용약관동의를 진행해 주세요.</li>
          </ul>
        ),
      });
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // console.log("화면갱신", inputEmail);
  }, [inputEmail]);
  return (
    <JoinWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#79213d",
            fontFamily:
              '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
          },
        }}
      >
        <Form
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <span>
            아이디(Email)<b>*</b>
          </span>
          <p>
            사용하실 아이디를 이메일 형식으로 입력해 주세요. <b>네이버 메일</b>
            만 이용 가능합니다.
          </p>
          <ConfirmArray>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "이메일을 입력해주세요.",
                },
                {
                  type: "email",
                  message: "이메일을 입력해주세요",
                },
                // {
                //   pattern: /\.naver\.com$/,
                //   message: "네이버 메일만 사용가능 합니다.",
                // },
              ]}
            >
              <Input
                value={inputEmail}
                onChange={e => handleEmailValue(e)}
                size="large"
                // 글자수 제한
                maxLength={40}
                placeholder="아이디를 입력해 주세요."
              />
            </Form.Item>
            <ButtonConfirm onClick={showModalEmail}>인증메일발송</ButtonConfirm>
            <Modal
              title="이메일 인증 확인"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={400}
              footer={[
                <Button key="confirm" onClick={handleOk}>
                  확인
                </Button>,
              ]}
            >
              <CertifyEmail
                setEmailCertifyOk={setEmailCertifyOk}
                setIsModalOpen={setIsModalOpen}
              />
            </Modal>
          </ConfirmArray>

          <span>
            비밀번호<b>*</b>
          </span>
          <p>비밀번호를 입력해 주세요.</p>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해 주세요.",
              },
            ]}
            validateStatus={passwordError ? "error" : ""}
            // help={passwordError && "비밀번호가 일치하지 않습니다."}
          >
            <Input.Password
              size="large"
              // 글자수 제한
              maxLength={20}
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={changePassword}
            />
          </Form.Item>

          <span>
            비밀번호 확인<b>*</b>
          </span>
          <p>비밀번호를 다시 한번 입력해 주세요.</p>
          <Form.Item
            name="passwordConfirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "패스워드를 입력해 주세요.",
              },
            ]}
            validateStatus={passwordError ? "error" : ""}
            help={passwordError && "비밀번호가 일치하지 않습니다."}
          >
            <Input.Password
              size="large"
              // 글자수 제한
              maxLength={20}
              placeholder="비밀번호를 다시 한번 입력해 주세요"
              value={passwordConfirm}
              onChange={changePasswordConfirm}
            />
          </Form.Item>

          <span>
            이름<b>*</b>
          </span>
          <p>이름을 입력해 주세요</p>
          <Form.Item
            name="nm"
            rules={[
              {
                required: true,
                message: "이름을 입력해 주세요.",
              },
            ]}
          >
            <Input
              size="large"
              // 글자수 제한
              maxLength={10}
              placeholder="이름을 입력해 주세요."
            />
          </Form.Item>

          <span>
            연락처<b>*</b>
          </span>
          <p>연락처를 숫자 형식으로 입력해 주세요.</p>
          <ConfirmArray>
            <Form.Item
              name="tel"
              rules={[
                {
                  pattern: /^[0-9]+$/,
                  message: "숫자만 입력해 주세요.",
                },
                {
                  required: true,
                  message: "연락처를 입력해 주세요.",
                },
              ]}
            >
              <Input
                size="large"
                // 글자수 제한
                maxLength={11}
                placeholder="연락처를 입력해 주세요. (EX. 01012345678)"
              />
            </Form.Item>
            <ButtonConfirm onClick={e => handleCertifyPhone(e)}>
              본인인증
            </ButtonConfirm>
          </ConfirmArray>
          <RegionSelectWrap>
            <span>
              거주지역<b>*</b>
            </span>
            <ul>
              거주지역을 선택해 주세요.
              {regionError ? <li>{regionError}</li> : null}
            </ul>
            <Form.Item name="regionNmId">
              <Radio.Group
                value={regionOptions.regionNmId}
                size="large"
                onChange={e => handleRegion(e)}
              >
                {regionOptions.map(option => (
                  <Radio.Button
                    key={option.regionNmId}
                    value={option.regionNmId}
                  >
                    {option.value}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Form.Item>
          </RegionSelectWrap>
          {/* 이용약관 컴포넌트 */}
          <Terms checkAll={checkAll} setCheckAll={setCheckAll} />
          <Form.Item>
            <ButtonOk>회원가입</ButtonOk>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </JoinWrap>
  );
};

export default Join;
