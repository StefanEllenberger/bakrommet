import React, { Component } from 'react';
import Group from './Components/Group'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      groups: []
    }
  }
  //when fetching from API, do it from CWM or CDM
  //check definitions for when they render
  //turn json call into a setState that creates the teamlist
  componentWillMount() {
    var json = '[{"Group": "A","Team1": "Russia","Team2": "Saudi Arabia","Team3": "Egypt","Team4": "Uruguay"},{"Group": "B","Team1": "Portugal","Team2": "Spain","Team3": "Morocco","Team4": "Iran"},{"Group": "C","Team1": "France","Team2": "Australia","Team3": "Peru","Team4": "Denmark"},{"Group": "D","Team1": "Argentina","Team2": "Iceland","Team3": "Croatia","Team4": "Nigeria"},  {"Group": "E","Team1": "Brazil","Team2": "Switzerland","Team3": "Costa Rica","Team4": "Serbia"},  {"Group": "F","Team1": "Germany","Team2": "Mexico","Team3": "Sweden","Team4": "South Korea"},  {"Group": "G","Team1": "Belgium","Team2": "Panama","Team3": "Tunisia","Team4": "England"},  {"Group": "H","Team1": "Poland","Team2": "Senegal","Team3": "Colombia","Team4": "Japan"}]'
    this.setState(
      {
        groups: JSON.parse(json)
      }
    );
  }



render(){
  let groups = this.state.groups;

    return (
      <div className="App">

      <h2>Groups</h2>
        <div className="flex-container">
          {groups.map(group => <Group key={group.Group} groupLetter={group.Group} team1={group.Team1} team2={group.Team2} team3={group.Team3} team4={group.Team4}/>)}
        </div>
      </div>
    );
  }
}

export default App;
