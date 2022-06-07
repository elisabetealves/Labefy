import React from "react";
import axios from "axios"
import { BASE_URL } from '../../constants/urls'
import { HEADERS } from "../../constants/headers"
import styled from "styled-components"
import ImgFundo from "../../imagem/fundo1.png"


class CriarPlaylist extends React.Component {
   state = {
      inputPlaylist: "",
   };

   onChancePlaylist = (event) => {
      this.setState({ inputPlaylist: event.target.value });
   };

   createPlaylist = () => {
      const body = {
         name: this.state.inputPlaylist,
      };
      axios
         .post(`${BASE_URL}`, body, HEADERS)
         .then((res) => {
            alert(`Playlist ${this.state.inputPlaylist} cria com sucesso`);
            this.setState({ inputPlaylist: "" });
         })
         .catch((err) => {
            alert(err.response.data.message);
         });
   };

   render() {
      return (
         <MainContainer>
            <h1>Crie sua Playlist</h1>
            <Label>
               <input
                  placeholder="Nome da Playlist"
                  value={this.state.inputPlaylist}
                  onChange={this.onChancePlaylist}
               />
               <button onClick={this.createPlaylist}>Criar Playlist</button>
            </Label>
            <ButtonVisualizar onClick={() => this.props.goPagina("visualizarPlaylist")}>
               Visualizar PlayList
            </ButtonVisualizar>
         </MainContainer>
      );
   }
}

export default CriarPlaylist;


// ESTELIZAÇÃO DA PÁGINA
const MainContainer = styled.div`
   width: 100vw;
   height: 100vh;
   padding-bottom: 100px;
   box-sizing: border-box;
   //background-color: #11111170;
   background-image: url(${ImgFundo});
   background-size: contain;
   background-position: center;
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
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: black;
    h2 {
       position: relative;
      padding-top: 4rem;
      font-size: 2rem;
      color: #1e90ff;
    }
  }
`;

const Label = styled.div`
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

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 13rem;
    
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
`;

const ButtonVisualizar = styled.button`
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
`;