import { createGlobalStyle, css } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Regular.ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.ttf');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      color: ${theme.colors.texts};
      font-size: ${theme.font.sizes.xsmall};

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.xxsmall};
      `}
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 700;
    }

    p,
    ul {
      line-height: ${theme.font.sizes.large};
    }

    ul {
      list-style-position: inside;
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }

    button {
      color: ${theme.colors.texts};
      font-size: ${theme.font.sizes.xsmall};
      background-color: ${theme.colors.light};
      border: 1px solid #f0f1f3;
      border-radius: 6px;
      padding: 12px 24px;
      cursor: pointer;
    }
  `}
`;

export default GlobalStyle;
