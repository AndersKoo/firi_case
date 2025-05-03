import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`

  ${fonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --container-big-max-width: 400px;
    --container-small-max-width: 300px;
    --border-radius: 10px;
    --button-primary-color: rgba(71,74,238);
    --button-secondary-color: rgba(223, 225, 248);
    --button-primary-font-color: white;
    --button-secondary-font-color: rgba(71, 74, 238);
    --button-disabled-color: rgba(240, 240, 240, 1);
  }
`;
