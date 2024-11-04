import { createGlobalStyle } from "styled-components";

// styled-components의 createGlobalStyle 안에서 CSS 스타일을 작성할 때는 문자열로 작성하므로, JavaScript 객체 문법이 아닌 CSS 문법을 사용해야 한다.
const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1200px;
    min-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Noto Sans KR', Arial, sans-serif;
    margin: auto;
  }
`;

export default GlobalStyle;
