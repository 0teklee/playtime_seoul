import Router from "next/router";
import styled from "styled-components";

const MuseumContent = () => {
  const router = Router;
  return (
    <__Wrapper>
      <__Box
        className="box1"
        onClick={() => router.push("https://www.naver.com")}
      />
      <__Box className="box2" onClick={() => router.push("")} />
      <__Box className="box3" onClick={() => router.push("")} />
      <__Box className="box4" onClick={() => router.push("")} />
      <__Box className="box5" onClick={() => router.push("")} />
      <__Box className="box6" onClick={() => router.push("")} />
      <__Box className="box7" onClick={() => router.push("")} />
      <__Box className="box8" onClick={() => router.push("")} />
      <__Box className="box9" onClick={() => router.push("")} />
      <__Box className="box10" onClick={() => router.push("")} />
      <__Box className="box11" onClick={() => router.push("")} />
      <__Box className="box12" onClick={() => router.push("")} />
      <__Box className="box13" onClick={() => router.push("")} />
      <__Box className="box14" onClick={() => router.push("")} />
      <__Box className="box15" onClick={() => router.push("")} />
      <__Box className="box16" onClick={() => router.push("")} />
      <__Box className="box17" onClick={() => router.push("")} />
    </__Wrapper>
  );
};

export default MuseumContent;

const __Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .box1 {
    top: 15.8%;
    left: 0;
    width: 15.8%;
    height: 14.7%;
    &::after {
      content: "1";
    }
  }

  .box2 {
    top: 0;
    left: 20%;
    width: 15.8%;
    height: 19.7%;
    &::after {
      content: "2";
    }
  }
  .box3 {
    top: 22.5%;
    left: 19.7%;
    width: 16.2%;
    height: 7.8%;
    &::after {
      content: "3";
    }
  }

  .box4 {
    top: 0;
    left: 40.2%;
    width: 32.2%;
    height: 7.3%;
    &::after {
      content: "4";
    }
  }

  .box5 {
    top: 10%;
    left: 40.2%;
    width: 108px;
    height: 101px;
    &::after {
      content: "5";
    }
  }
  .box6 {
    top: 27%;
    left: 43%;
    width: 14%;
    height: 15.7%;
    &::after {
      content: "6";
    }
  }

  .box7 {
    top: 10%;
    right: 0;
    width: 32.2%;
    height: 7.3%;
    &::after {
      content: "7";
    }
  }

  .box8 {
    top: 19.5%;
    right: 0;
    width: 32.2%;
    height: 16.49%;
    &::after {
      content: "8";
    }
  }
  .box9 {
    top: 40%;
    left: 0;
    width: 36%;
    height: 4%;
    &::after {
      content: "9";
    }
  }
  .box10 {
    top: 45%;
    left: 0;
    width: 100%;
    height: 11.3%;
    &::after {
      content: "10";
    }
  }

  .box11 {
    bottom: 34.5%;
    left: 12%;
    width: 32.2%;
    height: 7.3%;
    &::after {
      content: "11";
    }
  }
  .box12 {
    bottom: 6%;
    left: 0;
    width: 25%;
    height: 26.5%;
    &::after {
      content: "12";
    }
  }

  .box13 {
    bottom: 18%;
    left: 27%;
    width: 14.2%;
    height: 7.8%;
    &::after {
      content: "13";
    }
  }

  .box14 {
    bottom: 27%;
    left: 51%;
    width: 13%;
    height: 14.7%;
    &::after {
      content: "14";
    }
  }
  .box15 {
    bottom: 10%;
    left: 52%;
    width: 14.2%;
    height: 7.8%;
    &::after {
      content: "15";
    }
  }
  .box16 {
    bottom: 15.4%;
    right: 0;
    width: 31.6%;
    height: 26.5%;
    &::after {
      content: "16";
    }
  }
  .box17 {
    bottom: 0;
    right: 50%;
    width: 15.8%;
    height: 14.7%;
    &::after {
      content: "17";
    }
  }
`;

const __Box = styled.div`
  position: absolute;
  background: #d9d9d9;

  cursor: pointer;

  &:hover {
    background: #0a5c03;
    transition: 0.5s;
  }
`;
