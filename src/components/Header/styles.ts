import styled from 'styled-components';

export const Container = styled.nav`
  width:100%;
  background-color: #181820;
  display:flex;
  justify-content:center;     
  height:80px;
  
  @media(max-width:1024px){
    position: fixed;
    top:0; 
  }
  

  .header-content{
    display:flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;
    align-items: center;
    margin: 0px 10px;
    
  }

  button{   
    width: 163px;
    height: 48px;    
    /* --purple */
    background: #AC6DDE;
    border-radius: 20px;
    color:#fff;
    font-size: 16px;
    font-weight: 600;
    font-family: "inter",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }


  @media screen and(min-width:768px){

  }  
`;
