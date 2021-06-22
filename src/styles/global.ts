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
.react-modal-overlay{
background: rgba(24, 24, 32, 0.9);
position: fixed;
top:0;
bottom:0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;

}

.react-modal-content{
  position: relative;
  background: #21212B;
  min-width: 310px;
  min-height: 497px;
  max-height: 597px;
  border-radius: 20px;
  padding:40px 40px;


  @media screen and (min-width:600px){
    min-width: 576px; 
  }
}

.react-modal-close{
  position:absolute;
  right:1.5rem;
  top:1.5rem;
  border:0;
  background: transparent;
}
`;
