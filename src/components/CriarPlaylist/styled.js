import styled from 'styled-components'
import ImgFundo from "../../imagem/fundo1.png"
import ImgMobile from "../../imagem/mobile.png"


export const MainContainer = styled.div`
   width: 100vw;
   height: 100vh;
   padding-bottom: 100px;
   box-sizing: border-box;
   //background-color: #11111170;
   background-image: url(${ImgFundo});
   /* background-size: contain;
   background-position: center; */
   background-repeat: round;
   background-size: center;
   background-blend-mode: color-burn;
   overflow: hidden;
   color: #cccccc;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

  h1 {
      padding-top: 8rem;
      color:#DC143C;
      margin-left: 800px;
      font-size: 4rem;
      margin-top: 0px;
      animation: teste 2s ease-in-out normal;
  }


  @media(max-width:768px){

      background-image: url(${ImgMobile}); 
      height: 100vh;
      background-repeat: round;
      background-size: center;

      h1{
         font-size: 5rem;
         transition: 0.5s;
         margin-top: -20rem;
         //animation: teste 2s ease-in-out normal;
         margin-left: 10px;
         margin-bottom: 10px;
      } 
  } 

  @media(max-width:480px){

      //background-color: #111111;
      background-image: url(${ImgMobile}); 
      padding-bottom: 100px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left;
         
      h1{
         font-size: 2.6rem;
         transition: 0.5s;
         margin-top: -20rem;
         //animation: teste 2s ease-in-out normal;
         margin-left: 1px;
      }
  }
`;

export const Label = styled.div`
  input {
   /* border-top: none;
   border-left: none;
   border-right: none; */
   width: 25rem;
   height: 2rem;
   color: #DC143C;
   height: 2.3rem;
   border-radius: 8px;
   border-color: #DC143C;
   background-color: black;
   font-size: 1.1rem;
   margin-top: 1rem;
   margin-left: 810px;

   ::placeholder {
    color: #DC143C;
    padding-left: 8px;
   }
  
  }
 
  button{
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         margin-top: 4rem;
         margin-left: 120px;
         border-radius: 0.5rem;
         border-color:#DC143C;
         color:black;
         width: 10rem;
         height: 2.5rem;
         background-color: #DC143C;
         font-size: 1.2rem;
         font-weight: bold;
         cursor: pointer;
         margin-left: 945px;

            :hover {
               color: #DC143C;
               background-color: black;
            }
        }

      @media(max-width:768px){
         input{
            width: 25rem;
            height: 3.5rem;
            font-size: 1.3rem;
            margin-top: 1.8rem;
            margin-left: 26px;

            ::placeholder {
               font-size: 1.5rem;
            }
         }

         button{

            margin-top: 4rem;
            margin-left: 140px;
            width: 12rem;
            height: 3.5rem;
            font-size: 1.5rem;
         }
      } 

      @media(max-width:480px){
         input{
            width: 18rem;
            height: 2.5rem;
            font-size: 1.2rem;
            margin-top: 1.8rem;
            margin-left: 5px;
               
            ::placeholder {
               font-size: 1rem;
            }
         }

         button{
            margin-top: 3rem;
            margin-left: 80px;
            width: 10rem;
            height: 2.8rem;
            font-size: 1.2rem;
         }
      }
`;

export const ButtonVisualizar = styled.button`
      margin-top: 1.5rem;
      border-radius: 0.6rem;
      border-color: #DC143C;
      color: black;
      background-color: #DC143C;
      width: 12rem;
      height: 3rem;
      font-size: 0.98rem;
      font-weight: bold;
      cursor: pointer;
      margin-left: 835px;
  
      :hover {
         color: #DC143C;
         background-color: black;
      }
   
   @media(max-width:768px){
      margin-top: 2rem;
      margin-left: 30px;
      width: 20rem;
      height: 3.5rem;
      font-size: 1.5rem;
   } 

   @media(max-width:480px){
      margin-top: 2rem;
      margin-left: 20px;
      width: 15rem;
      height: 3rem;
      font-size: 1.2rem;
   }
`;