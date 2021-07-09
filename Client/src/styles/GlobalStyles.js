"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const GlobalStyles = styled_components_1.createGlobalStyle `
  :root{

  }

  html {
  box-sizing: border-box;
  width: 100%;
}
*,*:before, *:after {
  box-sizing: inherit;
}




`;
exports.default = GlobalStyles;
