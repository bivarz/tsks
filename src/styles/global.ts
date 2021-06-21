import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
}
body {
  -webkit-font-smoothing:antialiased;
  background-color: #181820;
}
body, input{
  font-family:"Roboto Slab",sans-serif;
  font-size:16px;
}
h1,h2,h3,h4,h5,h6,strong{
  font-weight:500;  
}
li{
  list-style:none;
}
button{
  font-family:"Roboto Slab",sans-serif;  
  font-size:14px;
  cursor:pointer;
  background:none;
  border:none;
  outline:none;
}
`;
