import styled from "styled-components";
import { theme } from "styles/theme";
import ProgramItem from "./ProgramItem";
import {
  ProgramAContent,
  ProgramBContent,
  ProgramCContent,
} from "./ProgramText";

const ProgramContent = () => {
  return (
    <__Wrapper>
      <__ItemWrapper>
        <__ItemOl>A</__ItemOl>
        <ProgramItem toggleProp={ProgramAContent} />
      </__ItemWrapper>
      <__ItemWrapper>
        <__ItemOl>B</__ItemOl>
        <ProgramItem toggleProp={ProgramBContent} />
      </__ItemWrapper>
      <__ItemWrapper>
        <__ItemOl>C</__ItemOl>
        <ProgramItem toggleProp={ProgramCContent} />
      </__ItemWrapper>
    </__Wrapper>
  );
};

export default ProgramContent;
const __Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const __ItemWrapper = styled.div`
  flex: 1;
  ${theme.displayFlex("flex-start", "center")}
  width: 100%;
  height: 32%;
  margin-bottom: 22px;
`;

const __ItemOl = styled.div`
  flex: 1;
  ${theme.displayFlex()}
  width: 16.8%;
  height: 100%;
  border-right: 1px solid #000;
  text-align: center;
`;
