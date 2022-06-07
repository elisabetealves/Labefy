import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import AddMusica from "../AddMusica"
import styled from "styled-components"
import lixeira from "../../imagem/lixeira.png"
import ImgFundo from "../../imagem/fundo.jpg"
//import ReactPlayer from "react-player"



class DetalhesPlaylist extends React.Component {
   state = {
      arrayMusicas: [],
      idMusica: "",
   };

   componentDidMount() {
      this.getPlaylistTracks();
   }

   getPlaylistTracks = () => {
      const url = `${BASE_URL}/${this.props.idPlaylist}/tracks`;
      axios
         .get(url, HEADERS)
         .then((res) => {
            this.setState({ arrayMusicas: res.data.result.tracks });
         })
         .catch((err) => {
            alert(err.response);
         });
   };

   removeTrackFromPlaylist = (id) => {
      if (window.confirm("Tem certeza que deseja deletar essa música?")) {
         const url = `${BASE_URL}/${this.props.idPlaylist}/tracks/${id}`;
         axios
            .delete(url, HEADERS)
            .then((res) => {
               this.getPlaylistTracks();
               alert("Musica deletada com sucesso!");
            })
            .catch((err) => {
               alert(err.response);
            });
      }
   };

   render() {
      const mostrarMusicas = this.state.arrayMusicas.map((musica) => {
         return (
            <ListaMusicas key={musica.id}>
               <div>
                  <p>{musica.name}</p> <p>{musica.artist}</p>
               </div>
               <div>
                  {/* <ReactPlayer
                     url={musica.url}
                     width="300px"
                     height="50px"
                     playing={false}
                     controls={true}
                  /> */}
                  <audio
                     src={musica.url}
                     autoplay={true}
                     type="audio/mp3"
                     controls={true}
                  ></audio>
                  <button onClick={() => this.removeTrackFromPlaylist(musica.id)}>
                     <img src={lixeira} alt="lixeira" />
                  </button>
               </div>
            </ListaMusicas>
         );
      });

      return (
         <MainContainer>
            <ul>
               <h1>{this.props.nomePlaylist}</h1>
               {mostrarMusicas}
            </ul>
            <AddMusica
               idPlaylist={this.props.idPlaylist}
               getPlaylistTracks={this.getPlaylistTracks}
            />
            <DivButton>
               <button onClick={() => this.props.goPagina("visualizarPlaylist")}>
                  Visualizar PlayList
               </button>
               <button onClick={() => this.props.goPagina("criarPlaylist")}>
                  Criar Playlist
               </button>
            </DivButton>
         </MainContainer>
      );
   }
}

export default DetalhesPlaylist;


// ESTELIZAÇÃO DA PÁGINA
const MainContainer = styled.div`
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
`;

const ListaMusicas = styled.li`
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
`

const DivButton = styled.div`
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
`;