import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    /* //color styles */
    --light-shades: #F5F4F4;
    --light-accent: #79C780;
    --main-brand-color: #9FADA9;
    --dark-accent: #8D8D7E;
    --dark-shades: #3F393C;

  }


  html {
  box-sizing: border-box;
  height: 100%;
  
}
*,*:before, *:after {
  box-sizing: inherit;
}

body{
  margin: 0 auto;
  height: 100%;
}

#root{
height: 100%;
}

.App{
height: 100%;
}

main {
  margin: 0 auto;
  width: 100%;
}

section{
  position: relative;
}

button{
  background: none;
    border: none;
    font-size: inherit;
    
}



`;

export default GlobalStyles;
