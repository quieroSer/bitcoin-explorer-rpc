import React from 'react';
import axios from 'axios';

export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      blockHash: ""
    }
  }

  getBlockHash = () => {
    axios
      .get(`/api/getblockhash/${this.state.searchQuery}`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ blockHash: result });
        console.log("I did the request")
      })
      .catch(err => console.log(err));
  };

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleButtonClicked() {
    var searchQuery = this.state.searchQuery;
    var result = this.getBlockHash()
    console.log(result)
  }

  render() {
    return  (
      <div>
        <input type="text" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}
         required minLength={1} maxLength={8}/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Submit
        </button>
        
      </div>
    );
  }
}