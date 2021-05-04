import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
 html {
   font-size: 62.5%;
 }

 * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
    font-size: 1.6rem;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



 h1,h2,h3,h4,h5,h6  {
  margin: 0;
}
p,a,span,button,li,div  {
  margin: 0;
}
ul{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}

`;

export default GlobalStyle;
