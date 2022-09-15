import styled from "styled-components";
import { theme } from "styles/theme";

const AdmissionContent = () => {
  return (
    <__Wrapper>
      <__UpperContainer>
        <__ContentWrapper>
          <p className="title"> Gerrit Rietveld Academie</p>
          <p className="content">Preparatory Course, part-time (1)</p>
          <p className="content">Fine Art, Bachelor’s, full-time (1)</p>
          <p className="content">Basic Year, Bachelor’s, full-time (3)</p>
        </__ContentWrapper>
        <__ContentWrapper>
          <p className="title">KABK</p>
          <p className="content">Fine Arts, Bachelor’s, full-time (1)</p>
        </__ContentWrapper>
        <__ContentWrapper>
          <p className="title">WDKA</p>
          <p className="content">Fine Arts, Bachelor’s, full-time (2)</p>
          <p className="content">Graphic Design, Bachelor’s, full-time (1)</p>
        </__ContentWrapper>
        <__ContentWrapper>
          <p className="title">Artez</p>
          <p className="content">
            BEAR Fine Arts, Arnhem, Bachelor’s, full-time (2)
          </p>
        </__ContentWrapper>
        <__ContentWrapper>
          <p className="title">AMFI(AMSTERDAM FASHION INSTITUTE)</p>
          <p className="content">{`Foundation year, Fashion and Textile Technologies, Bachelor's, full-time (1)`}</p>
        </__ContentWrapper>
      </__UpperContainer>
      <__LowerContentWrapper>
        <p>
          ~ 2022 개인 과외 학생 <span>전원</span> 합격
        </p>
      </__LowerContentWrapper>
    </__Wrapper>
  );
};

export default AdmissionContent;

const __Wrapper = styled.div`
  ${theme.displayFlex("flex-start", "space-between", "column")}
  height: 100%;
`;

const __UpperContainer = styled.div``;

const __ContentWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 0.3rem 0 0.3rem 1rem;

  background: #d9d9d9;
  font-family: "MinSans-Bold";

  p {
    margin-bottom: 0.5rem;
  }

  .title {
    color: #000;
    font-weight: 600;
  }
  .content {
    color: #0a5c03;
    font-weight: 500;
  }
`;

const __LowerContentWrapper = styled(__ContentWrapper)`
  width: 100%;
  margin-bottom: 0;
  padding: 1rem 0;

  text-align: center;
  p {
    margin-bottom: 0;
    color: #0a5c03;
    font-family: "MinSans-Bold";
  }
  span {
    color: #000;
    font-family: "MinSans-Bold";
  }
`;
