import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
   /* // Font Family */
    --body-font: 'Roboto';

     /* // Font Weights */
    --thin: 100;
    --light: 300;
    --regular: 400;
    --semibold: 500;
    --bold: 700;
    --ultra: 800;

     /* // Base Font */
  --base-font-family: var(--body-font), sans-serif;
  --base-font-size: 14px;
  --base-font-weight: var(--regular);
  --base-line-height: 1.6em;

   /* // Colors */
  --black: #000000;
  --dark-gray: rgba(var(--black), 0.8);
  --gray: rgba(var(--black), 0.6);
  --light-gray: rgba(var(--black), 0.4);
  --lighter-gray: rgba(var(--black), 0.2);
  --white: #ffffff;
  --accent: #4285f4;

   /* Form Settings  */
  --max-width: 600px;
  --max-height: 400px;
  --gutters: 24px;

  }


  html {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
*,*:before, *:after {
  box-sizing: inherit;
}

body{
  /* color: #ECECEC; */
  margin: 0;
  width: 100%;
  min-height: 100%;
}

.App{
  
}

main {
  min-height: 100%;
  margin: 0 auto;
    height: 100%;
    width: 100%;
}




`;

export default GlobalStyles;
