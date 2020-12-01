import styled from "styled-components";

export const ContainerDashboard = styled.div`
  max-width: 100%;
  background: #f1f2f4;
`;

export const ContainerTable = styled.div`
  overflow: auto;
  @media screen and (max-width: 768px) {
    overflow: auto;
  }
`;

export const ContainerMembers = styled.div`
  padding: 2% 4%;
  @media screen and (max-width: 768px) {
    padding: 2%;
  }
`;

export const TitleMembers = styled.h2`
  text-align: left;
  margin: 2% auto;
  color: #092b8a;
  font-size: 35px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const HeadTable = styled.thead`
  align-items: center;
`;
export const RowHead = styled.tr`
  background: #092b8a;
`;

export const TextHead = styled.th`
  min-width: 250px;
  margin: 7%;
  text-align: left;
  font-weight: 400;
  padding: 1%;
  color: #f1f2f4;
  @media screen and (max-width: 768px) {
    min-width: 150px;
    font-size: 15px;
    padding: 5px;
  }
`;

export const BodyTable = styled.tbody`
  justify-content: center;
`;

export const RowBody = styled.tr`
  justify-content: center;
  background: rgba(124, 133, 139, 0.2);
`;

export const TextBody = styled.td`
  justify-content: center;
  padding: 5px;
  min-width: 250px;
  @media screen and (max-width: 768px) {
    min-width: 150px;
    font-size: 14px;
    padding: 5px;
  }
`;

export const ContainerFormMember = styled.div`
  background: #595959;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  width: 50%;
  margin: auto;
  border-radius: 7px;
  box-shadow: 12px 5px 5px rgba(124, 133, 139, 0.2);

  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 2% 1%;
    margin-top: 18%;
  }
`;

export const TitleFormMeber = styled.h2`
  color: #f1f2f4;
  font-weight: 400;
  margin-bottom: 2%;
  
`;
export const Alert = styled.p`
  background: #d10a15;
  padding: 1%;
  border-radius: 7px;
  color: #f1f2f4;
  margin-bottom: 2%;
  text-align: center;
`;
export const FormMembers = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;
export const LabelForm = styled.label`
  color: #f1f2f4;
`;
export const InputMember = styled.input`
  min-width: 300px;
  height: 30px;
  margin-bottom: 2%;
  border-radius: 5px;
  border-style: none;
  @media screen and (max-width: 768px) {
    min-width: 280px;
  }
`;

export const TextareaDevo = styled.textarea`
  min-width: 300px;
  height: 250px;
  margin-bottom: 2%;
  border-radius: 5px;
  border-style: none;
  @media screen and (max-width: 768px) {
    min-width: 280px;
  }
`;
export const ButtonMember = styled.input`
  min-width: 300px;
  height: 38px;
  margin: 2% auto;
  border-radius: 5px;
  background: #092b8a;
  color: #f1f2f4;
  border-style: none;
  transition: 0.5s;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background: #f1f2f4;
    color: #092b8a;
    border-style: solid;
    border-color: #092b8a;
  }
  @media screen and (max-width: 768px) {
    min-width: 280px;
  }
`;

export const HeadDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  max-width: 100%;
  // background:  #7C858B;
  // border-bottom:1px solid #051C59;
`;

export const TitleDashboard = styled.h1`
  color: #092b8a;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    max-width:200px ;
    margin-right:1%;
  }
`;

export const User = styled.h2`
  color: #092b8a;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Signout = styled.button`
  border-style: none;
  padding: 15px;
  border-radius: 7px;
  background: #092b8a;
  color: #f1f2f4;

  &:hover {
    cursor: pointer;
    background: #051c59;
  }
  @media screen and (max-width: 768px) {
    padding: 3px;
    font-size: 12px;
  }
`;

export const ContainerGralForms = styled.div`
  display: flex;
  min-height:400px;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height:100%;
  }
`;

export const ButtonAdd = styled.button`
  height: 52px;
  width: 100px;
  padding: 1%;
  margin: 1%;
  font-size: 13px;
  border-style: none;
  background: #092b8a;
  color: #f1f2f4;
  border-radius: 5px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background: #f1f2f4;
    color: #092b8a;
    width: 102px;
    border-style: solid;
    border-color: #092b8a;

    @media screen and (max-width: 768px) {
      width: 95px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 768px) {
    position: relative;
    height: 42px;
    width: 90px;
    font-size: 11px;
    top: 50px;
  }
`;

export const ContainerGralMember = styled.div`
  width: 50%;
 // background: rgba(124, 133, 139, 0.5);
  background:white;
  padding: 10px;
  border-radius: 7px;
  margin: 0 1% 0 3% ;
  box-shadow: 12px 5px 5px rgba(124,133,139, 0.2);


  @media screen and (max-width: 768px) {
    //border-bottom: 1px solid #051c59;
    width: 85%;
    margin:0 auto 10px auto;
    border-radius: 5px;
  }
`;

export const ContainerGralDevo = styled.div`
  width: 50%;
  //background: rgba(124, 133, 139, 0.5);
  background:white;
  padding: 10px;
  border-radius: 7px;
  margin: 0 2% 0 1%;
  box-shadow: 12px 5px 5px rgba(124,133,139, 0.2);
  @media screen and (max-width: 768px) {
    width: 85%;
    margin: 0 auto;
    border-radius: 5px;
  }
`;

export const ContainerButtons = styled.div`
  padding-left: 12%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    padding-left: 3%;
  }
`;

export const BackgroundGralMember = styled.img`
  position: relative;
  width: 45%;
  top: 38px;
  left: 180px;
  padding-bottom: 1%;
  @media screen and (max-width: 768px) {
    top: 0px;
    width: 47%;
    left: 150px;
    
  }
`;
export const BackgroundGralDevo = styled.img`
  position: relative;
  width: 45%;
  top: 22px;
  left: 160px;
  padding-bottom: 2%;

  @media screen and (max-width: 768px) {
    top: 0px;
    left:155px;
  }
`;
