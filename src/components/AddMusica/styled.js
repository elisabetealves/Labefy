import styled from "styled-components"


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 35%;
  padding-bottom: 8%;
  padding-left: 10px;
  //padding-top: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-left: 850px;
  position: relative;

  h2 {
      padding-top: 0.1rem;
      font-size: 2.5rem;
      color: #DC143C;
  }
  span {
    text-align: center;
    margin-top: 10px;
   }
  
  button {
   margin-top: 1.5rem;
   border-radius: 4rem;
   border-color: #DC143C;
   color: black;
   background-color: #DC143C;
   width: 10rem;
   height: 3rem;
   font-size: 0.98rem;
   font-weight: bold;
   cursor: pointer;
      
  :hover {
      color: #DC143C;
      background-color: black;
  }

  :active {
      background-color: #f5485f;
      color: #fff;
   }

  }

  @media(max-width:768px){
      margin-left: 80px;
      margin-top: -30px;
      h2 {
         padding-top: 0.1rem;
         margin-left:-150px;
         margin-right:-90px;
      }

      span{
         button {
         margin-top: 1.8rem;
         width: 11rem;
         height: 3.5rem;
         font-size: 1.3rem;
         margin-left: -40px;
         }
      }
  }
  @media(max-width:480px){
      margin-left: 80px;
      margin-top: -30px;
      h2 {
         padding-top: 0.1rem;
         margin-left:-170px;
         margin-right:-90px;
         font-size: 22px;
      }

      span{
         button {
         margin-top: 1.8rem;
         width: 9rem;
         height: 3rem;
         font-size: 1.1rem;
         margin-left: -80px;
         }
      }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
   border-radius: 5px;
   box-shadow: 1px 1px 3px 2px #DC143C;
   width: 22rem;
   height: 2.2rem;
   color:#DC143C;
   border-color: #DC143C;
   background-color: black;
   font-size: 1.1rem;
   margin-top: 1rem;

   ::placeholder {
    color: #DC143C;
    padding-left: 8px;
   }

  }

  @media(max-width:768px){
      margin-top: 0.2rem;
      input {
      width: 25rem;
      height: 3rem;
      font-size: 1.6rem;
      margin-left: -55px;

      ::placeholder {
         font-size: 24px;
      }
   }
  }
  @media(max-width:480px){
      margin-top: 0.2rem;
         input {
         width: 21rem;
         height: 2.5rem;
         font-size: 1.2rem;
         margin-left: -89px;

         ::placeholder {
            font-size: 20px;
         }
      }   
   }
`;