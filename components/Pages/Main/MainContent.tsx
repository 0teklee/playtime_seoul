import menuRecoilState from "libs/recoil/menuState";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const MainContent = () => {
  const mainQuery = useRecoilValue(menuRecoilState);
  console.log(mainQuery);
  return (
    <__Wrapper
      visible={mainQuery === "workshopKr" || mainQuery === "workshopEn"}
    >
      <__Text>
        플레이타임 워크숍은 온라인 공간을 매개체로 사용하는 교육 플랫폼으로,{" "}
        네덜란드 미술 대학 입시를 목표로 하는 학생들을 1년 기준 최대 5명 {`\n`}
        가이드합니다. 최근 3년 이내에 GRA 와 KABK 를 졸업한 선생님 2명과 {`\n`}
        고려대학교 영어영문학과를 졸업한 영어 선생님 1명이 입시의 시작과 끝을{" "}
        함께합니다.
      </__Text>
      <__ThirdText>
        모든 수업은 1:1 로 이루어지며 Zoom(온라인 영상회의 어플리케이션) 을 통해
        진행됩니다.
      </__ThirdText>
      <__SubText>
        *1967년 Jacques Tati의 코메디 영화 PlayTime 에서 워크숍 명칭과 웹사이트
        이미지를 빌려왔습니다. 영화에 대한 더 많은 정보는
        https://www.imdb.com/title/tt0062136/ 를 참고하세요.
      </__SubText>
    </__Wrapper>
  );
};

export default MainContent;

const __Wrapper = styled.div<{ visible: boolean }>`
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: 0.5s;
`;

const __Text = styled.p`
  font-size: 1rem;
  font-family: "MinSans-Regular";

  line-height: 21.34px;
  text-align: left;
  text-indent: 1rem;
`;

const __ThirdText = styled(__Text)`
  margin-top: 0.8rem;
`;

const __SubText = styled(__Text)`
  margin-top: 5rem;
  font-weight: 300;
  font-family: "MinSans-Light";
`;
