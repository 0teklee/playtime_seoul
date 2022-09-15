import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}
@font-face {
  font-family: 'HelveticaNeue';
  src: url('/asset/HelveticaNeueLTStd-Cn.woff');
  font-weight:400;
  font-style: normal;
  font-display: swap;

}
@font-face {
  font-family:'Yang';
  src: url('/asset/Yang-Sidebar.woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;

}
@font-face {
  font-family: 'MinSans-Regular';
  src: url('/asset/MinSans-Regular.woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'MinSans-Light';
  src: url('/asset/MinSans-Light.woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'MinSans-Bold';
  src: url('/asset/MinSans-Bold.woff');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Millionaire';
  src: url('/asset/Millionaire Script.woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

  :focus {
  outline: none;
  border: none;
}

::-webkit-scrollbar {
  display: none;
}

button {
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
}
a {
  text-decoration: none;
  color:inherit;
}
h1, h2, h3, h4, h5, h6, p, span, a {
  margin : 0;

}
h1, h2, h3, h4, h5, h6, p, span, a, div {
  &::selection {
    color: #fff;
    background: #7e7e7e;
  }
}

* {
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
}


`;
