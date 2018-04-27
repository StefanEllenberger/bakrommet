import React, { Component } from 'react';
import Group from './Components/Group'
import Fixtures from './Components/Fixtures'
import Selector from './Components/Selector/Selector'
import LeaderBoard from './Components/LeaderBoard'

class App extends Component {
  constructor(){
    super();
    this.state = {
      groups: [],
      fixtures: {},
      scoreboard: {},
      groupSelection: "all"
    }
  }
  //when fetching from API, do it from CWM or CDM
  //check definitions for when they render
  //turn json call into a setState that creates the teamlist
  componentWillMount() {
    var jsonGroup = require('./data/groups.json');
    var jsonFixtures = require('./data/fixtures.json');
    var jsonPlayers = require('./data/players.json');



    this.setState(
      {
        groups: jsonGroup,
        fixtures: jsonFixtures,
        scoreboard: jsonPlayers

      }
    );
  }
  changeGroupSelection(groupSelection){
    this.setState({groupSelection});}



render(){
  let groups = this.state.groups;
    return (
      <div className="App">
        <h2>Leaderboard</h2>
          <div className="flex-container">
            <LeaderBoard scoreboard={this.state.scoreboard}/>
          </div>
        <h2>Selections</h2>
          <div className="flex-container">
            <Selector fixtures={this.state.fixtures}/>
          </div>

        <h2>Groups</h2>
          <div className="flex-container">
            {groups.map(group => <Group key={group.Group} groupLetter={group.Group} team1={group.Team1} team2={group.Team2} team3={group.Team3} team4={group.Team4}/>)}
          </div>

        <div className="flex-container">
          <Fixtures groupSelection={this.state.groupSelection} changeGroupSelection={this.changeGroupSelection.bind(this)} fixtures={this.state.fixtures}/>
        </div>

      </div>
    );
  }
}

export default App;

/*
*/
