import './App.css';
import FormSubmission from './form';

import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    blockchainInfo: {},
    miningInfo: {},
    //por que en la respuesta a getpeerinfo, la prop result es un array
    peerInfo: []
  };
  componentDidMount() {
    this.getBlockchainInfo();
    this.getMiningInfo();
    this.getPeerInfo();
  }
  getBlockchainInfo = () => {
    axios
      .get(`/api/getblockchaininfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ blockchainInfo: result });
      })
      .catch(err => console.log(err));
  };
  getMiningInfo = () => {
    axios
      .get(`/api/getmininginfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ miningInfo: result });
      })
      .catch(err => console.log(err));
  };
  getPeerInfo = () => {
    axios
      .get(`/api/getpeerinfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ peerInfo: result });
      })
      .catch(err => console.log(err));
  };

  render() {
    //aqui puedo poner variables para manejar con logica javascript lo q voy a retornar

    return (
      <div className="App">
        <header className="App-header">
          
          <h1>Bitcoin API</h1>
          {/* devuelve la propiedad blocks del objeto result de la resupesta a la query get blockchaininfo */}
          <p>Number of blocks: {this.state.blockchainInfo.blocks}</p>
          {/* devuelve la propiedad difficulty del objeto result de la resupesta a la query getmininginfo */}
          <p>Mining Difficulty: {this.state.miningInfo.difficulty}</p>
          {/* devuele el largo del array de la info de los peers */}
          <p>Number of Peers: {this.state.peerInfo.length}</p>
          {/* aqui voy a poner un input para poner un bloque y que devuelva el hash del bloque */}
          <FormSubmission />
        

        </header>
      </div>
    );
  }
}

export default App;
