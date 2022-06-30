import React, { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import { MainContainer, Form} from "./styled.js"


const AddMusica = (props) => {
   let [inputNome, setInputNome] = useState("")
   let [inputCantor, setInputCantor] = useState("")
   let [inputURL, setInputURL] = useState("")

   const addTrackToPlaylist = () => {
      const url = `${BASE_URL}/${props.idPlaylist}/tracks`;
      const body = {
         name: inputNome,
         artist: inputCantor,
         url: inputURL,
      };
      axios
         .post(url, body, HEADERS)
         .then((res) => {
            props.getPlaylistTracks();
            setInputNome( inputNome= "")
            setInputCantor( inputCantor= "")
            setInputURL( inputURL= "")
         })
         .catch((err) => {
            alert(err.response);
         });
   };

   const onChangeNome = (event) => {
      setInputNome( event.target.value );
   };
   const onChangeCantor = (event) => {
      setInputCantor( event.target.value );
   };
   const onChangeURL = (event) => {
      setInputURL( event.target.value );
   };

  
   return (
      <MainContainer>
         <h2>Adicionar uma música</h2>
         <Form>
            <input
               placeholder="Nome da Música"
               value={inputNome}
               onChange={onChangeNome}
            />

            <input
               placeholder="Cantor/Grupo/Banda"
               value={inputCantor}
               onChange={onChangeCantor}
            />

            <input
               placeholder="Link da Música"
               value={inputURL}
               onChange={onChangeURL}
            />
         </Form>

         <span>
            <button onClick={addTrackToPlaylist}>Adicionar</button>
         </span>
      </MainContainer>
   );

}

export default AddMusica;
