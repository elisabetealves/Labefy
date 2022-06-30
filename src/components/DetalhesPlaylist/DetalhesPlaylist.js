import React, { useState, useEffect} from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import AddMusica from "../AddMusica/AddMusica"
import { ListaMusicas, MainContainer, DivButton } from "./styled.js"
import lixeira from "../../imagem/lixeira.png"
//import ReactPlayer from "react-player"


const DetalhesPlaylist = (props) => {
   const [arrayMusicas, setArrayMusicas] = useState([])
   const [idMusica, setIdMusica] = useState("")

   useEffect(() => {
      getPlaylistTracks()
   }, [])

   const getPlaylistTracks = () => {
      const url = `${BASE_URL}/${props.idPlaylist}/tracks`;
      axios
         .get(url, HEADERS)
         .then((res) => {
            setArrayMusicas( res.data.result.tracks );
         })
         .catch((err) => {
            alert(err.response);
         });
   };

   const removeTrackFromPlaylist = (id) => {
      if (window.confirm("Tem certeza que deseja deletar essa música?")) {
         const url = `${BASE_URL}/${props.idPlaylist}/tracks/${id}`;
         axios
            .delete(url, HEADERS)
            .then((res) => {
               getPlaylistTracks();
               alert("Musica deletada com sucesso!");
            })
            .catch((err) => {
               alert(err.response);
            });
      }
   };

 
   const mostrarMusicas = arrayMusicas.map((musica) => {
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
               <button onClick={() => removeTrackFromPlaylist(musica.id)}>
                  <img src={lixeira} alt="lixeira" />
               </button>
            </div>
         </ListaMusicas>
      );
   });

   return (
      <MainContainer>
         <ul>
            <h1>{props.nomePlaylist}</h1>
            {mostrarMusicas}
         </ul>
         <AddMusica
            idPlaylist={props.idPlaylist}
            getPlaylistTracks={getPlaylistTracks}
         />
         <DivButton>
            <button onClick={() => props.goPagina("visualizarPlaylist")}>
               Visualizar PlayList
            </button>
            <button onClick={() => props.goPagina("criarPlaylist")}>
               Criar Playlist
            </button>
         </DivButton>
      </MainContainer>
   );

}

export default DetalhesPlaylist;


