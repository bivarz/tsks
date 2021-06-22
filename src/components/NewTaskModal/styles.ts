import styled from 'styled-components';

export const Content = styled.form`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: center;


  input{
    background: #272733;
    border:none;
    height:64px;
    min-width:285px;
    border-radius:20px;
    margin: 38px 0;
    padding-left: 10px;
    color:#777777;
    display: flex;
    align-items: center;
    font-family: "Inter",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  input::placeholder{      
      color:#777777;
      size: 16px;      
    }
  textarea{
    background: #272733;
    border:none;
    min-width:285px;
    min-height:234px;
    border-radius: 20px;
    resize: none;    
    color:#777777;
    padding:10px;
    font-size:16px;
    font-family: "Inter",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button{
    margin-top:38px;
    height:48px;
    min-width:188px;
    background:#AC6DDE ;
    border-radius: 20px;
    font-size:16px;
    color:#F5F5F6;
    font-family: "Inter",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export const Title = styled.h1`
color:#fff;
font-size:26px;
font-weight: 600;
font-family: "Inter",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin-top:60px;
margin-left:20px;
`;
