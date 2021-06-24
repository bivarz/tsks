import styled from 'styled-components';

export const Container = styled.section`
  .button-content{
    margin-top:28px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    max-width: 320px;

  }
  .empty-task{
    margin-top:60px;
    color:#AC6DDE;
    font-weight: 600;
    font-size:26px;
    font-family: "inter",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  }
`;
interface ButtonActiveProps {
  isActive: boolean;
}
export const Button = styled.button<ButtonActiveProps>`
    min-width:150px;
    height: 48px;
    border-radius: 20px;    
    color:#F5F5F6;
    font-family: "inter",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    
    background-color: ${(props) => (props.isActive ? '#414052' : '#181820')};
    border: ${(props) => (props.isActive ? 'none' : '2px solid #414052')};


`;
