import styled from "styled-components";
import { theme } from "styles/theme";
import ImgSrc from "./ImgSrc";
import SchoolItem from "./SchoolItem";

const SchoolsContent = () => {
  return (
    <__Wrapper>
      <__CountryWrapper>
        <__Title>NL</__Title>
        <__ItemWrapper>
          {ImgSrc.NL.map((item) => (
            <SchoolItem key={item.id} img={item.src} alt={item.alt} />
          ))}
        </__ItemWrapper>
      </__CountryWrapper>
      <__CountryWrapper>
        <__Title>UK</__Title>
        <__ItemWrapper>
          {ImgSrc.UK.map((item) => (
            <SchoolItem key={item.id} img={item.src} alt={item.alt} />
          ))}
        </__ItemWrapper>
      </__CountryWrapper>
    </__Wrapper>
  );
};

export default SchoolsContent;

const __Wrapper = styled.div``;

const __Title = styled.h1`
  margin-bottom: 1rem;
`;

const __CountryWrapper = styled(__Wrapper)`
  ${theme.displayFlex("flex-start", "center", "column")}
  width: 100%;
  margin-bottom: 2rem;
`;

const __ItemWrapper = styled(__Wrapper)`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;

  gap: 2%;
`;
