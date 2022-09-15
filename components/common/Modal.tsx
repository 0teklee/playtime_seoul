import Image from "next/image";
import Cookie from "js-cookie";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

const Modal = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isLarge, setIsLarge] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const handleCookie = () => {
    if (!Cookie.get("noticePopUp")) {
      Cookie.set("noticePopUp", "close", { expires: 1, path: "/" });
      setModal(false);
    }
  };

  if (Cookie.get("noticePopUp")) {
    setModal(false);
  }
  return (
    <>
      <__Wrapper size={isLarge} isHide={isHide}>
        <__ButtonHeader>
          <button onClick={() => setModal((prev) => !prev)}>
            <Image
              src="/asset/toggleclose.svg"
              width="17px"
              height="17px"
              alt="close"
            />
          </button>
          <button onClick={() => setIsLarge((prev) => !prev)}>
            <Image
              src="/asset/togglelarge.svg"
              width="17px"
              height="17px"
              alt="large"
            />
          </button>
          <button
            onClick={() => {
              setIsHide((prev) => !prev);
            }}
          >
            <Image
              src="/asset/togglehide.svg"
              width="17px"
              height="17px"
              alt="hide"
            />
          </button>
        </__ButtonHeader>
        <__ContentBox>
          PlayTime Workshop 수업 참여 이전 필수적으로 시행하는 유료 상담 및
          컨설팅이 있습니다. 이 때, 워크숍은 상담 학생의 현 상황을 파악, 목표
          학과 및 학교 입학을 위해 수업에서 집중하게 될 부분을 공유합니다.
          학생이 가지고 있는 학교나 수업에 대한 간단한 질의 문답 및 조언도 해당
          시간에 이루어 집니다. 그러나 이 때 무엇보다 가장 중요한 것은, 이후 몇
          개월 동안 함께 목표를 공유하고 힘을 내 수업을 진행할 수 있을지, 학생과
          워크숍 모두 서로를 체크하는 시간이라는 점입니다. 해당 상담 및 컨설팅은
          30분 정도로, Zoom 으로 진행됩니다.
        </__ContentBox>
        <__SetCookie>
          <button
            onClick={() => {
              handleCookie();
            }}
          >
            <Image
              src="/asset/cookieHideButton.svg"
              width="17px"
              height="17px"
              alt="cookieHide"
            />
          </button>
          <span>오늘 이 창 더이상 보지 않기</span>
        </__SetCookie>
      </__Wrapper>
      {isHide && (
        <__HideWrapper>
          <____HideButtonHeader>
            <button
              onClick={() => {
                setIsHide((prev) => !prev);
              }}
            >
              <Image
                src="/asset/togglelarge.svg"
                width="17px"
                height="17px"
                alt="large"
              />
            </button>
          </____HideButtonHeader>
        </__HideWrapper>
      )}
    </>
  );
};

export default Modal;

const __Wrapper = styled.div<{ size: boolean; isHide: boolean }>`
  position: fixed;
  display: ${(props) => (props.isHide ? "none" : "block")};
  top: ${(props) => (props.size ? "0" : "50%")};
  left: ${(props) => (props.size ? "0" : "25%")};
  transform: ${(props) => (props.size ? null : "translate(-25%, -50%)")};
  width: ${(props) => (props.size ? "50vw" : "25%")};
  height: ${(props) => (props.size ? "100vh" : "25%")};

  background: #0000ff;
  font-family: "MinSans-Regular";
  font-size: ${(props) => (props.size ? "1.2rem" : "0.9rem")};
  font-weight: 400;
  z-index: 3;
`;

const __ButtonHeader = styled.div`
  width: 100%;
  background: #0000ff;
  padding: 11px 0 22px 10px;

  button {
    margin-right: 0.5rem;
  }
`;

const __ContentBox = styled.div`
  width: 100%;
  padding: 0 10px 10px 10px;
  border-bottom: 1px solid #0000ff;

  color: #faff00;
  background: #0000ff;

  text-indent: 1rem;
`;

const __SetCookie = styled.div`
  ${theme.displayFlex("center", "flex-start")}
  width: 100%;
  padding: 0 10px 7px 10px;
  border-top: 1px solid #0000ff;
  background: #0000ff;
  color: #fff;

  button {
    margin-right: 0.5rem;
  }
`;

const __HideWrapper = styled.div`
  ${theme.displayFlex("center", "center")}
  position: fixed;
  bottom: 0;
  left: 0;
  width: 1.5%;
`;
const ____HideButtonHeader = styled(__ButtonHeader)`
  padding: 0;
  width: 100%;
  button {
    margin-right: 0;
  }
`;
