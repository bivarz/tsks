import styled from 'styled-components';

export const Container = styled.article`
  margin-top:35px;
  padding-bottom: 50px;
  color:#F5F5F6;
  font-size:16px;
  font-family: "inter",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;

  
`;
export const Card = styled.div`
  width:100%;
  min-height:276px;
  background-color:#272733;
  border-radius: 20px;
  margin-bottom: 15px;
  display:flex;
  flex-direction:column;

.card-title{
  min-height:70px;
  display:flex;
  margin:0px 20px;
  align-items: center;
  justify-content: space-between;

    
  .card-title-text{
    display:flex;
    align-items: center;
    
    p{
      margin-left:20px;
      text-transform: capitalize;
    }
  }
}
.dots{
  color:#AC6DDE;
  font-size: 30px;
  margin-bottom:10px;  
}
.card-description{
  height: 147px;  
  width:100%;
  max-width:1120px;
  overflow-y:scroll ; 
  background-color: #21212B;
  padding:20px;

  ::-webkit-scrollbar {
    width: 0px;
}
  
}
.card-footer{
  min-height:70px;
  display:flex;
  align-items: center;
  justify-content: center;
}

`;

interface CircleVectorProps {
  isActive: boolean;
}

export const CircleVector = styled.span<CircleVectorProps>`

    width: 30px;
    height:30px;
    display:block;
    border-radius: 50%;
    border:${(props) => (props.isActive ? '3px dotted #AC6DDE' : '3px solid #AC6DDE')}; 
    

  
`;
