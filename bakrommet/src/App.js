import React, { Component } from 'react';
import Group from './Components/Group'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: []
    }
  }
  //when fetching from API, do it from CWM or CDM
  //check definitions for when they render
  //turn json call into a setState that creates the teamlist
  componentWillMount(){
    var A = '[{"name":"Brazil","score":3},{"name":"Germany","score":1},{"name":"Argentina","score":0},{"name":"Norway","score":-1}]';
    var B = '[{"name":"Div","score":3},{"name":"Germany","score":1},{"name":"Argentina","score":0},{"name":"Norway","score":-1}]';
    var C = '[{"name":"Face","score":3},{"name":"Germany","score":1},{"name":"Argentina","score":0},{"name":"Norway","score":-1}]';
    var D = '[{"name":"Lol","score":3},{"name":"Germany","score":1},{"name":"Argentina","score":0},{"name":"Norway","score":-1}]';

    this.setState(
      {
        groupA: JSON.parse(A),
        groupB: JSON.parse(B),
        groupC: JSON.parse(C),
        groupD: JSON.parse(D)

      }
    );
  }



render(){
    const r = JSON.stringify(this.state.teams);
    console.log(r);

    return (
      <div className="App">
        <Group groupLetter = "A" teams={this.state.groupA}/>
        <br/>
        <Group groupLetter = "B" teams={this.state.groupB}/>
        <br/>
        <Group groupLetter = "C" teams={this.state.groupC}/>
        <br/>
        <Group groupLetter = "D" teams={this.state.groupD}/>
        <br/>

      </div>
    );
  }
}

export default App;
