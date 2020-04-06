// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import AlphaNumericList from './components/AlphaNumericList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      totalRecords: 0,
      searchInput: '',
      isLoading: false
    }
  }

  handleSearchInput = (searchInput) => {
    let state = this.state;
    state.isLoading = true;
    state.searchInput = searchInput;
    this.setState({ state });
    debugger;
    if (searchInput !== '') {
      var url = "http://192.168.0.29:8080/api/v1/records/" + searchInput + "?pSize=1000000";
      this.serviceRequest(url);
    }
  }

  serviceRequest(url) {
    fetch(
      url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"

        }
      })
      .then(res => res.json())
      .then(json => json.data)
      .then(result => this.setState({ 'data': result.combinations, 'totalRecords': result.size, 'isLoading': false }))
  }

  render() {
    return (<div className="container" >
      <Search totalRecords={this.state.totalRecords} onSearchInput={this.handleSearchInput} />
      {this.state.isLoading ?
      <div className="d-flex justify-content-center">
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
                     Loading...
                    </Button>
                    </div> :
        <AlphaNumericList data={this.state.data} />
      }
    </div>);
  }
}

export default App;
