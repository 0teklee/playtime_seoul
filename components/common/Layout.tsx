import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import menuRecoilState from "libs/recoil/menuState";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const menuState = useRecoilValue(menuRecoilState);
  const setMenuRecoilState = useSetRecoilState(menuRecoilState);
  const setMenuState = (path: string) => {
    setMenuRecoilState((prev) => (prev = path));
  };
  return (
    <__Wrapper>
      <__ContentWrapper>
        <__BlackSideBar />
        <__LogoButton onClick={() => router.push("/")}>
          <Image
            alt="playtime_seoul_logo"
            src="/asset/main_logo.png"
            width="161px"
            height="165px"
          />
        </__LogoButton>
        <__ChildrenContainer>{children}</__ChildrenContainer>
      </__ContentWrapper>
      <__SideBarWrapper>
        <__SideBarBackDropWrapper>
          <__SideBarBackDrop src="/asset/sidebar.png" layout="fill" />
          <__SideBarButtonWrapper>
            <__SideBarButton
              selected={menuState === "workshopEn"}
              onClick={() => {
                setMenuState("workshopEn");
                router.push("/");
              }}
              className="workshopEn"
            >
              PlayTime Workshop
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "workshopKr"}
              onClick={() => {
                setMenuState("workshopKr");
                router.push("/");
              }}
              className="workshopKr"
            >
              플레이타임 워크숍
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "tutorKr"}
              onClick={() => {
                setMenuState("tutorKr");
                router.push("/tutor");
              }}
              className="tutorKr"
            >
              강사 소개
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "tutorEn"}
              onClick={() => {
                setMenuState("tutorEn");
                router.push("/tutor");
              }}
              className="tutorEn"
            >
              Tutor Information
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "admissionKr"}
              onClick={() => {
                setMenuState("admissionKr");
                router.push("/admission");
              }}
              className="admissionKr"
            >
              입학 사례
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "admissionEn"}
              onClick={() => {
                setMenuState("admissionEn");
                router.push("/admission");
              }}
              className="admissionEn"
            >
              Admission
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "programEn"}
              onClick={() => {
                setMenuState("programEn");
                router.push("/program");
              }}
              className="programEn"
            >
              Program
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "programKr"}
              onClick={() => {
                setMenuState("programKr");
                router.push("/program");
              }}
              className="programKr"
            >
              프로그램
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "schoolsEn"}
              onClick={() => {
                setMenuState("schoolsEn");
                router.push("/schools");
              }}
              className="schoolsEn"
            >
              Schools
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "schoolsKr"}
              onClick={() => {
                setMenuState("schoolsKr");
                router.push("/schools");
              }}
              className="schoolsKr"
            >
              미술 대학
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "museumKr"}
              onClick={() => {
                setMenuState("museumKr");
                router.push("/museum&gallery");
              }}
              className="museumKr"
            >
              미술관과 갤러리
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "museumEn"}
              onClick={() => {
                setMenuState("museumEn");
                router.push("/museum&gallery");
              }}
              className="museumEn"
            >
              Art Museum & Gallery
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "contactKr"}
              onClick={() => {
                setMenuState("contactKr");
                router.push("/contact");
              }}
              className="contactKr"
            >
              연락처
            </__SideBarButton>
            <__SideBarButton
              selected={menuState === "contactEn"}
              onClick={() => {
                setMenuState("contactEn");
                router.push("/contact");
              }}
              className="contactEn"
            >
              Contact
            </__SideBarButton>
          </__SideBarButtonWrapper>
        </__SideBarBackDropWrapper>
      </__SideBarWrapper>
    </__Wrapper>
  );
};

export default Layout;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "flex-start")}
  height: 100vh;
`;

const __ContentWrapper = styled.div`
  flex: 1 2;
`;

const __LogoButton = styled.button`
  all: unset;
  cursor: pointer;

  position: fixed;
  left: 3.47%;
  top: 50%;
  transform: translateY(-50%);
`;

const __BlackSideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 1.5%;
  height: 100vh;
  background: #000;
`;

const __ChildrenContainer = styled.div`
  overflow: scroll;

  flex: 1 2;
  position: fixed;
  top: 6.89%;
  left: 16.84%;

  width: 28.93%;
  height: 86.83%;
`;

const __SideBarWrapper = styled.div`
  position: relative;

  flex: 1;
  width: 50vw;
`;

const __SideBarBackDropWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;

  transform: translateY(-50%);
  width: 50vw;
  height: 100vh;
`;
const __SideBarBackDrop = styled(Image)`
  //TODO 반응형 사이즈 업데이트
  position: absolute;
  width: 100%;
  /* object-fit: contain; */
`;
const __SideBarButtonWrapper = styled.div`
  position: relative;
  top: 0;
  right: 0;

  width: 100%;
  height: 100vh;

  .workshopEn {
    top: 4.6%;
    left: 10.9%;

    font-size: 70%;
    font-family: "HelveticaNeue";
  }

  .workshopKr {
    top: 9.2%;
    left: 9.9%;
  }

  .tutorKr {
    top: 18%;
    left: 13%;
  }

  .tutorEn {
    top: 27.4%;
    left: 11.2%;
    font-family: "HelveticaNeue";
  }

  .admissionKr {
    top: 36.6%;
    left: 12.7%;
  }

  .admissionEn {
    top: 53.5%;
    left: 13.5%;
    font-family: "HelveticaNeue";
  }

  .programEn {
    top: 8.7%;
    left: 60.7%;
    font-family: "HelveticaNeue";
  }

  .programKr {
    top: 17.4%;
    left: 60%;
  }

  .schoolsEn {
    top: 31.1%;
    left: 61.2%;
    font-family: "HelveticaNeue";
  }

  .schoolsKr {
    top: 35.5%;
    left: 60.5%;
  }
  .museumKr {
    top: 44.6%;
    left: 57.5%;
  }

  .museumEn {
    top: 51.4%;
    left: 40.3%;
    font-family: "HelveticaNeue";
  }
  .contactKr {
    top: 43.6%;
    left: 89.5%;
  }
  .contactEn {
    top: 52.4%;
    left: 89%;
    font-family: "HelveticaNeue";
  }
`;
const __SideBarButton = styled.button<{ selected: boolean }>`
  all: unset;
  cursor: pointer;
  position: absolute;

  font-size: 70.5%;
  font-family: "Yang";
  color: ${(props) => (props.selected ? "#05ff00" : "#faff00")};

  &:hover {
    color: #05ff00;
  }
`;
