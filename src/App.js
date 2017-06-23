import React, { Component } from 'react';
import Search from './components/search/search';
import {Jumbotron, Button} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h2 className="center">The New York Times</h2>          
        </Jumbotron>
        <Search />
      </div>
    );
  }
}

export default App;
