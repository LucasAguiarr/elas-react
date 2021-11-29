import { createGlobalStyle } from "styled-components";
import { Colors } from "../utils";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  -ms-hyphenate-limit-chars, border-style, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  *, :no-button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, sans-serif;
  }

  html {
    background: ${Colors.gradient.dark};
  }
`;
