import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import styled from "styled-components";
import lixeira from "../../imagem/lixeira.png"
import ImgFundo from "../../imagem/fundo1.png"
import { IoIosAddCircleOutline } from "react-icons/io"


class VisualizarPlaylist extends React.Component {
   state = {
      arrayPlaylist: [],
   };

   componentDidMount() {
      this.getAllPlaylists();
   }

   getAllPlaylists = () => {
      axios
         .get(`${BASE_URL}`, HEADERS)
         .then((res) => {
            this.setState({ arrayPlaylist: res.data.result.list });
         })
         .catch((err) => {
            alert(err.response)
         })
   };

   deletePlaylist = (id) => {
      if (window.confirm("Tem certeza que deseja deletar essa Playlist?")) {
         axios.delete(`${BASE_URL}/${id}`, HEADERS)
            .then((res) => {
               alert("Playlist deletada!")
               this.getAllPlaylists()
            })
            .catch((err) => {
               alert(err.response)
            })
      }
   }

   detalhesMusica = (id, name) => {
      this.props.pegaIdPlaylist(id);
      this.props.pegarNomePlaylist(name);
      this.props.goPagina("detalhes");
   }

   render() {
      const mostrarLista = this.state.arrayPlaylist.map((musica) => {
         return (
            <CardDiv>
               <CharacterCard
                  key={musica.id}
                  onClick={() => this.detalhesMusica(musica.id, musica.name)}
               >
                  {musica.name}
               </CharacterCard>

               <ButtonMais onClick={() => this.detalhesMusica(musica.id, musica.name)}>
                  <IoIosAddCircleOutline />
               </ButtonMais>

               <ButtonLixeira onClick={() => this.deletePlaylist(musica.id)}>
                  <img src={lixeira} alt="lixeira" />
               </ButtonLixeira>

            </CardDiv>
         );
      });

      return (
         <MainContainer>
            <h1>Sua Playlist</h1>
            <ul>
               {mostrarLista}
            </ul>
            <ButtonList onClick={() => this.props.goPagina("criarPlaylist")}>
               Criar Playlist
            </ButtonList>

         </MainContainer>
      );
   }
}

export default VisualizarPlaylist;



//ESTILIZAÇÃO DA PÁGINA
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

   h1{
      padding-top: 6rem;
      color: #DC143C;
      font-size: 4rem;
      margin-top: 0px;
      margin-bottom: 15px;
      animation: teste 2s ease-in-out normal;
      margin-left: 800px;
   }
`;

const CardDiv = styled.span`
  display: flex;
  align-items: center;
`;

const CharacterCard = styled.li`
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
`;

const ButtonLixeira = styled.button`
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
`

const ButtonMais = styled.button`
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
   
`

const ButtonList = styled.button`
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-top: 3rem;
   margin-left: 120px;
   border-radius: 0.5rem;
   border-color:#DC143C;
   color: #DC143C;
   width: 12rem;
   height: 3rem;
   background-color: black;
   font-size: 1.2rem;
   font-weight: bold;
   cursor: pointer;
   margin-left: 810px;

   :hover {
      color: Black;
      background-color: #DC143C;
   }

`