import React from "react"
import { FaSpotify } from "react-icons/fa"
import styled from 'styled-components'
import ImgFundo from "../src/imagem/fundo1.png"
import ImgMobile from "../src/imagem/mobile.png"


class PageInicial extends React.Component {
   render() {
      return (
         <ContainerInicial>
            <FaSpotify />
            <h1>Labe<span>fy</span></h1>
            <p>Onde você cria sua própria playlist e escuta onde e quando quiser.</p>
            <button onClick={() => this.props.goPagina("criarPlaylist")}>Entrar</button>
         </ContainerInicial>
      )
   }
}

export default PageInicial

const ContainerInicial = styled.div`
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
      font-size: 6rem;
      margin-top: 0px;
      animation: teste 2s ease-in-out normal;
      color: black;
      margin-left: 800px;
    }

    span{
        color: #DC143C;
    }

    p{
      font-size: 1.2rem;
      margin-top: 0px;
      animation: teste 2s ease-in-out normal;
      color: black;
      margin-left: 800px;
      font-weight: bold;
    }

    svg{
      width: 4rem;
      height: 4rem;
      margin-top: 80px;
      color: #DC143C;
      animation: teste 2s ease-in-out normal;
      margin-left: 800px;
   }

   button{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 4rem;
      margin-left: 120px;
      border-radius: 1rem;
      border-color:#DC143C;
      color: #DC143C;
      width: 10rem;
      height: 2.5rem;
      background-color: black;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      margin-left: 800px;

      :hover {
         color: Black;
         background-color: #DC143C;
      }
   }

   @media(max-width:768px){

      background-image: url(${ImgMobile}); 
      height: 100vh;
      background-repeat: round;
      background-size: center;

      h1{
         font-size: 6rem;
         transition: 0.5s;
         //animation: teste 2s ease-in-out normal;
         margin-left: 10px;
         margin-bottom: 10px;
      }

      p{
      font-size: 2rem;
      //animation: teste 2s ease-in-out normal;
      color: black;
      margin-left: 800px;
      font-weight: bold;
      margin-left: 5px;
      padding-bottom: 40px;
      padding:20px;
      text-align: center;
      }

      svg{
         width: 5rem;
         height: 5rem;
         //animation: teste 2s ease-in-out normal;
         margin-left: 10px;
      }

      button{
         margin-top: 0px;
         margin-bottom: 300px;
         margin-left: 5px;
         width: 12rem;
         height: 3.5rem;
         font-size: 1.8rem;

         :hover {
            color: Black;
            background-color: #DC143C;
         }
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
         font-size: 4rem;
         transition: 0.5s;
         //animation: teste 2s ease-in-out normal;
         margin-left: 10px;
      }

      p{
      font-size: 1.2rem;
      //animation: teste 2s ease-in-out normal;
      color: black;
      margin-left: 800px;
      font-weight: bold;
      margin-left: 5px;
      padding-bottom: 40px;
      text-align: center;
      }

      svg{
         width: 3.5rem;
         height: 3.5rem;
         //animation: teste 2s ease-in-out normal;
         margin-left: 10px;
      }

      button{
      margin-top: 0px;
      margin-bottom: 200px;
      margin-left: 10px;
      height: 3rem;
      width: 10rem;
      font-size: 1.3rem;

      :hover {
         color: Black;
         background-color: #DC143C;
      }
   }
   }
`