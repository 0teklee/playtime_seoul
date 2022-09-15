import { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import Image from "next/image";

const ProgramItem = ({
  toggleProp,
}: {
  toggleProp: { id: number; title: string; content: string }[];
}) => {
  const toggleKeys = toggleProp.reduce((acc, cur) => {
    return { ...acc, [cur.title]: false };
  }, {});

  const [toggle, setToggle] = useState<{ [key: string]: boolean }>(toggleKeys);
  const handleToggle = (title: string) => {
    setToggle((prev) => {
      return { ...prev, [title]: !prev[title] };
    });
  };

  return (
    <__Wrapper key={toggleProp[0].id}>
      {toggleProp.map((item) => (
        <>
          <__ToggleTitle
            onClick={() => handleToggle(item.title)}
            key={`title_${item.id}`}
          >
            <Image
              src="/asset/toggle-01 5.svg"
              width="28px"
              height="11px"
              alt="toggle"
              key={`toggle_${item.id}`}
            />
            <h1>{item.title}</h1>
          </__ToggleTitle>
          <__ToggleContents
            key={`content_${item.id}`}
            visible={toggle[item.title]}
          >
            {item.content}
          </__ToggleContents>
        </>
      ))}
    </__Wrapper>
  );
};

export default ProgramItem;

const __Wrapper = styled.div`
  ${theme.displayFlex("flex-start", "flex-start", "column")}
  width: 67.8%;
  height: 100%;
  margin-left: 1rem;

  font-family: "MinSans-Regular";
  overflow: scroll;
`;

const __ToggleTitle = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  h1 {
    display: inline;
    margin-left: 1rem;
    font-size: 0.9rem;
    font-weight: 300;
  }
`;

const __ToggleContents = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};
  margin: 8% 0 6% 0;
  font-size: 0.9rem;

  text-indent: 1rem;
`;
