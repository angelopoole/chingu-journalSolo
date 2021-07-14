import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
   /* // Font Family */
    /* //color styles */
    --light-shades: #F5F4F4;
    --light-accent: #79C780;
    --main-brand-color: #9FADA9;
    --dark-accent: #8D8D7E;
    --dark-shades: #3F393C;

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
