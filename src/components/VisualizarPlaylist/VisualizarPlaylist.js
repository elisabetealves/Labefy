import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import {CardDiv, CharacterCard, ButtonMais, ButtonLixeira, MainContainer, ButtonList} from "./styled.js"
import lixeira from "../../imagem/lixeira.png"
import { IoIosAddCircleOutline } from "react-icons/io"


const VisualizarPlaylist = (props) => {
   const [arrayPlaylist, setArrayPlaylist] = useState([])

   useEffect(() => {
      getAllPlaylists()   
   }, [])

   const getAllPlaylists = () => {
      axios
         .get(`${BASE_URL}`, HEADERS)
         .then((res) => {
            setArrayPlaylist(res.data.result.list);
         })
         .catch((err) => {
            alert(err.response)
         })
   };

   const deletePlaylist = (id) => {
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

   const detalhesMusica = (id, name) => {
      props.pegaIdPlaylist(id);
      props.pegarNomePlaylist(name);
      props.goPagina("detalhes");
   }

   const mostrarLista = arrayPlaylist.map((musica) => {
      return (
         <CardDiv>
            <CharacterCard
               key={musica.id}
               onClick={() => detalhesMusica(musica.id, musica.name)}
            >
               {musica.name}
            </CharacterCard>

            <ButtonMais onClick={() => detalhesMusica(musica.id, musica.name)}>
               <IoIosAddCircleOutline />
            </ButtonMais>

            <ButtonLixeira onClick={() => deletePlaylist(musica.id)}>
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
         <ButtonList onClick={() => props.goPagina("criarPlaylist")}>
            Criar Playlist
         </ButtonList>

      </MainContainer>
   );

}

export default VisualizarPlaylist;



