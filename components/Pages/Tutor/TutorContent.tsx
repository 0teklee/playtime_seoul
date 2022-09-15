import styled from "styled-components";
import { theme } from "styles/theme";

const TutorContent = () => {
  return (
    <__Wrapper>
      <__ItemTitle>포트폴리오 Portfolio</__ItemTitle>
      <__ItemWrapper>
        <__TutorTitle>M (She, her)</__TutorTitle>
        <__ItemText>
          Gerrit Rietveld Academie(GRA) 에서 VAV - moving image를 공부했습니다.
          서울과 암스테르담을 기반으로 활동 중이며, 주 미디엄은 영상,
          인스톨레이션 그리고 그라픽 디자인입니다. 현재 Sandberg Instituut 및
          GRA 에서 프리랜서 그라픽 디자이너 및 코디네이터 근무 중에 있습니다.
          GRA Basic Year 및 VAV 편입 입학 심사에 참여한 경험이 있습니다.
        </__ItemText>
      </__ItemWrapper>
      <__ItemWrapper>
        <__TutorTitle>Han (She, her)</__TutorTitle>
        <__ItemText>
          Gerrit Rietveld Academie 에서 Basic Year 를, Royal Academy of Art, The
          Hague 의 BA Interior-Architecture & Furniture Design(IAFD) 에서
          Interior Architecture 를 공부했습니다. 주 미디엄은 인스톨레이션,
          오브제, 그리고 공간 디자인입니다.
        </__ItemText>
      </__ItemWrapper>
      <__ItemTitle>영어 English</__ItemTitle>
      <__ItemWrapper>
        <__TutorTitle>Jay (She, her)</__TutorTitle>
        <__ItemText>
          외국어고등학교를 졸업하고, 고려대학교에서 영어영문학을 전공했습니다.
          중고생부터 대학생, 직장인까지 학교 내신, TOEIC, 비즈니스 영어, 생활
          영어 회화 등을 폭넓게 지도하였으며, 수강생 모두 본인이 목표했던 수준에
          도달하였습니다. 국제 대회 통역 및 공공기관 국제 업무를 담당한 바
          있습니다.
        </__ItemText>
      </__ItemWrapper>
    </__Wrapper>
  );
};

export default TutorContent;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "center", "column")};
  text-align: center;
  font-size: 0.9rem;
`;

const __ItemWrapper = styled.div`
  margin-bottom: 3rem;
`;

const __ItemTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 16px;
  font-weight: bold;
  font-family: "MinSans-Regular";
`;

const __TutorTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-family: "Millionaire";
  font-size: 16px;
`;

const __ItemText = styled.p`
  word-break: keep-all;
  font-family: "MinSans-Regular";
`;
