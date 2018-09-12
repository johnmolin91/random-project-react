import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };

    fetch('http://localhost:3000/players')
      .then(resposnse => response.json())
      .then(players => (this.setState({players}))
  } 
  render() {
    return (<div>
      Hello World
      <ul>
        {this.state.players.map(players => <li>
          <h2>{players.Player}</h2>
          <p>{players.rawadv}</p>
        </li>}
      </ul>
    </div>);
  }
}

ReactDOM.render(
  <Posts />,
  mountNode
);