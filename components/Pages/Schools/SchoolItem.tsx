import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "styles/theme";

const SchoolItem = ({
  img,
  alt,
  link = "https://www.naver.com",
}: {
  img: string;
  alt: string;
  link?: string;
}) => {
  return (
    <__Wrapper>
      <Link href={link}>
        <Image
          src={img}
          width="140px"
          height="140px"
          alt={alt}
          objectFit="contain"
        />
      </Link>
    </__Wrapper>
  );
};

export default SchoolItem;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "center")}
  max-width: 140px;
  max-height: 140px;

  padding: 1rem;
  background: #d9d9d9;

  cursor: pointer;
`;
