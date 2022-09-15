import styled from "styled-components";
import { theme } from "styles/theme";

const ContactContent = () => {
  return (
    <__Wrapper>
      <__ItemWrapper>
        <__Field>
          <p>Blog</p>
          <p>Instagram</p>
          <p>Email</p>
          <p>Open KaKao</p>
        </__Field>
        <__Value>
          <p>blog.naver.com/</p>
          <p>the.playtime.workshop</p>
          <p>the.playtime.workshop@gmail.com</p>
          <p>플레이타임 워크숍</p>
        </__Value>
      </__ItemWrapper>
      <__AvailWrapper>
        <ul>
          <li>
            수업 관련 모든 문의는 이메일이나 오픈 카카오 채널을 통해 받고
            있습니다.
          </li>
          <li>
            문의 주실 때에 본인에 대한 간단한 소개, 지원하고자 하는 학교 및
            학과, 목표 입학 년도, 공인 어학 성적 유무 그리고 관심있는 플레이타임
            프로그램 등을 명시해 주시면 큰 도움이 됩니다.
          </li>
        </ul>
        <__Avail>Reachable during 10 - 18 KST</__Avail>
        <__Avail>
          Please give 2-3 working days for your emails to be answered.
        </__Avail>
      </__AvailWrapper>
    </__Wrapper>
  );
};

export default ContactContent;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "space-between", "column")}
  height: 100%;

  font-family: "MinSans-Bold";
  font-weight: 900;
  font-size: 0.9rem;
`;

const __ItemWrapper = styled.div`
  ${theme.displayFlex("flex-start", "center")}
`;

const __Field = styled.div`
  flex: 1;
  text-align: left;

  p {
    padding-right: 3rem;
    word-break: keep-all;
    white-space: nowrap;
    width: 100%;
  }
`;

const __Value = styled(__Field)`
  flex: 1;
  margin: 0;
`;

const __AvailWrapper = styled.div`
  ul {
    margin-bottom: 3rem;
    padding-left: 1rem;
  }
`;

const __Avail = styled.p``;
