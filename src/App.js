import React from "react";
import CriarPlaylist from "./components/CriarPlaylist/CriarPlaylist";
import VisualizarPlaylist from "./components/VisualizarPlaylist/VisualizarPlaylist";
import DetalhesPlaylist from "./components/DetalhesPlaylist/DetalhesPlaylist";
import styled from "styled-components";
import PageInicial from "./PageInicial"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`



class App extends React.Component {
  state = {
    paginaAtual: "pageInicial",
    idPlaylist: "",
    nomePlaylist: "",
  };

  mudarPagina = (goPagina) => {
    this.setState({ paginaAtual: goPagina });
  };

  pegaIdPlaylist = (playlist) => {
    this.setState({ idPlaylist: playlist });
  };

  pegarNomePlaylist = (name) => {
    this.setState({ nomePlaylist: name });
  };

  selecionarPagina = () => {
    switch (this.state.paginaAtual) {
      case "pageInicial":
        return <PageInicial goPagina={this.mudarPagina} />;
      case "criarPlaylist":
        return <CriarPlaylist goPagina={this.mudarPagina} />;

      case "detalhes":
        return (
          <DetalhesPlaylist
            goPagina={this.mudarPagina}
            idPlaylist={this.state.idPlaylist}
            nomePlaylist={this.state.nomePlaylist}
          />
        );
      case "visualizarPlaylist":
        return (
          <VisualizarPlaylist
            goPagina={this.mudarPagina}
            pegaIdPlaylist={this.pegaIdPlaylist}
            pegarNomePlaylist={this.pegarNomePlaylist}
          />
        );
      default:
        return <CriarPlaylist goPagina={this.mudarPagina} />;
    }
  };

  render() {
    return <MainContainer>{this.selecionarPagina()}</MainContainer>;
  }
}

export default App;
