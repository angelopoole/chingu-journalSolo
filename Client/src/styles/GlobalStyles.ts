import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
   /* // Font Family */
 
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
