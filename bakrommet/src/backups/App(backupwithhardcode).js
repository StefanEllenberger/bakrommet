import React, { Component } from 'react';
import Group from './Components/Group'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      teams: [],
      teams2: []
    }
  }
  //when fetching from API, do it from CWM or CDM
  //check definitions for when they render
  //turn json call into a setState that creates the teamlist
  componentWillMount(){
    this.setState({teams: [
      {
        name:"Brazil",
        score:3
      },
      {
        name:"Germany",
        score:1
      },
      {
        name:"Argentina",
        score:0
      },
      {
        name:"Norway",
        score:-1
      }
    ]})
    this.setState({teams2: [
      {
        name:"Sweden",
        score:3
      },
      {
        name:"France",
        score:1
      },
      {
        name:"Colombia",
        score:0
      },
      {
        name:"China",
        score:-1
      }
    ]})

}

render(){
    return (
      <div className="App">
        <Group groupLetter = "A" teams={this.state.teams}/>
        <br/>
        <Group groupLetter = "B" teams={this.state.teams2}/>

      </div>
    );
  }
}

export default App;
