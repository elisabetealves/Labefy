import React, { useState}from "react";
import axios from "axios"
import { BASE_URL } from '../../constants/urls'
import { HEADERS } from "../../constants/headers"
import {MainContainer, Label, ButtonVisualizar} from "./styled"



const CriarPlaylist = (props) => {
   const [inputPlaylist, setInputPlaylist] = useState("")
   
   const onChancePlaylist = (event) => {
      setInputPlaylist( event.target.value );
   };

   const createPlaylist = () => {
      const body = {
         name: inputPlaylist,
      };
      axios
         .post(`${BASE_URL}`, body, HEADERS)
         .then((res) => {
            alert(`Playlist ${inputPlaylist} cria com sucesso`);
            this.setState({ inputPlaylist: "" });
         })
         .catch((err) => {
            alert(err.response.data.message);
         });
   };

  
   return (
      <MainContainer>
         <h1>Crie sua Playlist</h1>
         <Label>
            <input
               placeholder="Nome da Playlist"
               value={inputPlaylist}
               onChange={onChancePlaylist}
            />
            <button onClick={createPlaylist}>Criar Playlist</button>
         </Label>
         <ButtonVisualizar onClick={() => props.goPagina("visualizarPlaylist")}>
            Visualizar PlayList
         </ButtonVisualizar>
      </MainContainer>
   );
   
}

export default CriarPlaylist;


