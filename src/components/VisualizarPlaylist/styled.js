import styled from "styled-components"
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

   h1{
      padding-top: 6rem;
      color: #DC143C;
      font-size: 4rem;
      margin-top: 0px;
      margin-bottom: 15px;
      animation: teste 2s ease-in-out normal;
      margin-left: 800px;
   }

   @media(max-width:768px){

      background-image: url(${ImgMobile}); 
      height: 100vh;
      background-repeat: round;
      background-size: center;
      font-size: 1.5rem;

      h1{
         font-size: 5rem;
         transition: 0.5s;
         //animation: teste 2s ease-in-out normal;
         margin-left: 10px;
         margin-bottom: 10px;
         margin-top: -400px;
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
         font-size: 2.5rem;
         transition: 0.5s;
         margin-top: -250px;
         margin-left: 10px;
      }
   }
`;

export const CardDiv = styled.span`
  display: flex;
  align-items: center;
`;

export const CharacterCard = styled.li`
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 15rem;
  height: 3rem;
  border-radius: 10px;
  margin: 15px;
  //border-color: #1E90FF;
  background-color: black;
  box-shadow: 1px 1px 3px 2px #DC143C;
  margin-bottom: 10px;
  padding: 0 10px;
  cursor: pointer;
  margin-left: 780px;


  &:hover {
    cursor: pointer;
    background-color: #DC143C;
  }

  @media(max-width:768px){
   width: 20rem;
   height: 3.5rem;
   margin-left: -20px;
  }

   @media(max-width:480px){
      width: 12rem;
      height: 2.3rem;
      margin-left: -50px;
      font-size: 1rem;
   }
`;

export const ButtonLixeira = styled.button`
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

   @media(max-width:768px){
    
      font-size: 2.5rem;
      width: 3.5rem;
      margin-left: 5px;
      padding: 6px;

      img{
         width: 2rem; 
      }
   }

   @media(max-width:480px){
      font-size: 1.8rem;
      width: 2.5rem;
      margin-left: 5px;
      padding: 6px;

      img{
         width: 1.5rem;
      }
   }
`

export const ButtonMais = styled.button`
   border-radius: 5px;
   background-color: #DC143C;
   border: none;
   transition: transform 0.3s;
   color: #1E90FF;
   font-size: 1.2rem;
   cursor: pointer;
   margin-left: 3px;
   margin-right: 4px;
   padding: 6px;

   svg{
      width: 1.5rem;
      height: 1.5rem;
      padding-top: 2.5px;
      color:black;
      animation: teste 2s ease-in-out normal;
   }

   &:hover {
      cursor: pointer;
      background-color: #f5485f;
   }
   :active {
      background-color: #f5485f;
      color: #fff;
   }

   @media(max-width:768px){
      font-size: 2.5rem;
      width: 3.5rem;
      margin-left: 5px;
      padding: 6px;

      svg{
         width: 3rem; 
         height: 2rem;
      }
   }

   @media(max-width:480px){
      font-size: 1.8rem;
      width: 2.5rem;
      height: 2.9rem;
      margin-left: 5px;
      padding: 6px;

      svg{
         width: 1.5rem;
      }
   }
   
`

export const ButtonList = styled.button`
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-top: 3rem;
   border-radius: 0.5rem;
   border-color:#DC143C;
   color: #DC143C;
   width: 12rem;
   height: 3rem;
   background-color: black;
   font-size: 1.2rem;
   font-weight: bold;
   margin-left: 810px;

   :hover {
      color: Black;
      background-color: #DC143C;
   }

   @media(max-width:768px){
      width: 18rem;
      height: 4rem;
      font-size: 1.8rem;
      margin-left: -20px;
   }

   @media(max-width:480px){
      margin-top: 20px;
      width: 10rem;
      height: 3rem;
      font-size: 1.2rem;
      margin-left: -20px;
   }

`