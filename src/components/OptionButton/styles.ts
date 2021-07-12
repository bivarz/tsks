import styled from 'styled-components';

export const Container = styled.div`

  min-height: 30px; 
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:right;
  align-items:center;

.button{
  width:30px;
  height:30px; 
  display:flex;
  margin-left:15px;
  justify-content:center;
  align-items: center;
  border-radius: 20px;
}
.button:hover{
  
}
.button-open{
  background:#AC6DDE;
  height:32px;
  width:32px;
  border-radius: 20px;
  align-items: center;
  display: flex;
  justify-content:center;
}

.dots{  
  color:#AC6DDE;
  font-size: 30px;
  font-family: "inter",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}



@keyframes goOut{
  from {
    transform: translateX(50px);
  }
  to{
    transform: translatex(0px);
  }
}

  
`;
export const EditContent = styled.div`
display:flex;
justify-content: space-between;
width:80px;


.edit-option{
  background:#AC6DDE;
  height:32px;
  width:32px;
  border-radius: 20px;
  align-items: center;
  display: flex;
  justify-content:center;

}
.delete-option{
  background:#AC6DDE;
  height:32px;
  width:32px;
  border-radius: 20px;
  align-items: center;
  display: flex;
  justify-content:center;
}
`;
