import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  html {
  box-sizing: border-box;
  width: 100%;
}
*,*:before, *:after {
  box-sizing: inherit;
}

body{
  margin: 0;
  width: 100%;
  min-height: 100%;
}

.App{
  
}

main {
  margin: 0 auto;
    width: 100%;
}




`;

export default GlobalStyles;
