import styled from "styled-components"
import ImgFundo from "../../imagem/fundo.jpg"
import ImgMobile from "../../imagem/mobile.png"

// ESTELIZAÇÃO DA PÁGINA
export const MainContainer = styled.div`
   width: 100vw;
   height: 125vh;
   padding-bottom: 100px;
   box-sizing: border-box;
   //background-color: #11111170;
   background-image: url(${ImgFundo});
   background-size: cover;
   background-position: inherit;
   background-blend-mode: color-burn; 
   overflow: hidden;
   color: #cccccc;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

  h1{
   padding-top: 6rem;
   font-size: 2.5rem;
   color:  #DC143C;
   margin-left: 800px; 
   text-align: center;
  }

  @media(max-width:768px){
      
   background-image: url(${ImgMobile}); 
      height: 100vh;
      background-repeat: round;
      background-size: center;

      h1{
         font-size: 4.3rem;
         transition: 0.5s;
         //animation: teste 2s ease-in-out normal;
         margin-left: 10px;
         margin-top: -170px;
      }
  }

  @media(max-width:480px){

      background-image: url(${ImgMobile}); 
      padding-bottom: 100px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left;
         
      h1{
         font-size: 2rem;
         transition: 0.5s;
         margin-left: -25px;
         margin-top: -10px;
      }
  }
`;

export const ListaMusicas = styled.li`
  border: 1px solid #DC143C;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 3px 2px #DC143C;
  background-color: black;
  border-radius: 10px;
  margin: 20px;
  padding: 5px;
  list-style-type: none;
  width: 500px; 
  margin-left: 800px;

  div{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px ;
    align-items: center;
    color:#DC143C;
    font-weight: bold;
    font-size: 18px;
  }
  button{
   border-radius: 5px;
   background-color: #DC143C;
   border: none;
   transition: transform 0.3s;
   color: #1E90FF;
   font-size: 1.2rem;
   cursor: pointer;
   margin-left: 5px;
   padding: 6px;

   &:hover {
      cursor: pointer;
      background-color: #f5485f;
   }
   :active {
      background-color: #f5485f;
      color: #fff;
   }
  }

  @media(max-width:768px){
   //margin: 5px;
   width: 500px; 
   height: 125px;
   margin-left: 10px;

   div{
      margin-bottom: -1px ;
      margin-top: -10px;
      font-size: 22px;

      p{
         margin-right: 90px;
      }
   }
   button{
      font-size: 2.5rem;
      width: 3.5rem;
      margin-left: 5px;
      padding: 6px;

      img{
         width: 2rem; 
      }
   }
   audio{
      margin-right: -20px;
      width: 400px;
   }
  }


  @media(max-width:480px){
      width: 360px; 
      height: 95px;
      margin-left: -20px;

   div{
      margin-bottom: -1px ;
      margin-top: -10px;
      font-size: 17px;

      p{
         margin-right: 80px;
      }
   }

   button{
      margin-top: 8px;
      font-size: 1.5rem;
      width: 3rem;
      margin-left: 20px;
      padding: 5px;

      img{
         width: 1.5rem; 
      }
   }

   audio{
      margin-left: -5px;
      width: 280px;
      height: 45px;
      margin-top: 8px;
   }
  }
`

export const DivButton = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
   margin-top: 1.5rem;
   border-radius: 4rem;
   border-color:#DC143C;
   color: black;
   background-color:#DC143C;
   width: 12rem;
   height: 3rem;
   font-size: 0.98rem;
   font-weight: bold;
   cursor: pointer;
   margin-top: -110px;
   position: relative;
   left: 430px;
   margin-left: 10px;

  :hover {
    color: #DC143C;
    background-color: black;
  }
  }

  @media(max-width:768px){

      button {
         width: 350px;
         height: 3.5rem;
         font-size: 1.3rem;
         margin-top: -20px;
         position: relative;
         left: 20px;
      }
  }
  @media(max-width:480px){
      button {
         height: 3rem;
         font-size: 1rem;
         margin-top: -10px;
         position: relative;
         left: -5px;
         margin-bottom: 150px;
      }
  }
`;