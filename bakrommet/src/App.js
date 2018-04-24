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
    var jsonGroup = '[{"Group": "A","Team1": "Russia","Team2": "Saudi Arabia","Team3": "Egypt","Team4": "Uruguay"},{"Group": "B","Team1": "Portugal","Team2": "Spain","Team3": "Morocco","Team4": "Iran"},{"Group": "C","Team1": "France","Team2": "Australia","Team3": "Peru","Team4": "Denmark"},{"Group": "D","Team1": "Argentina","Team2": "Iceland","Team3": "Croatia","Team4": "Nigeria"},  {"Group": "E","Team1": "Brazil","Team2": "Switzerland","Team3": "Costa Rica","Team4": "Serbia"},  {"Group": "F","Team1": "Germany","Team2": "Mexico","Team3": "Sweden","Team4": "South Korea"},  {"Group": "G","Team1": "Belgium","Team2": "Panama","Team3": "Tunisia","Team4": "England"},  {"Group": "H","Team1": "Poland","Team2": "Senegal","Team3": "Colombia","Team4": "Japan"}]';
    var jsonFixtures = {"matches":[{"when": "14 JUN 2018 - 18:00 Local time","team1": {"teamName": "Russia"},"team2": {"teamName": "Saudi_Arabia"},"group": "A"}, {"when": "15 JUN 2018 - 17:00 Local time","team1": {"teamName": "Egypt"},"team2": {"teamName": "Uruguay"},"group": "A"}, {"when": "15 JUN 2018 - 18:00 Local time","team1": {"teamName": "Morocco"},"team2": {"teamName": "Iran"},"group": "B"}, {"when": "15 JUN 2018 - 21:00 Local time","team1": {"teamName": "Portugal"},"team2": {"teamName": "Spain"},"group": "B"}, {"when": "16 JUN 2018 - 13:00 Local time","team1": {"teamName": "France"},"team2": {"teamName": "Australia"},"group": "C"}, {"when": "16 JUN 2018 - 16:00 Local time","team1": {"teamName": "Argentina"},"team2": {"teamName": "Iceland"},"group": "D"}, {"when": "16 JUN 2018 - 19:00 Local time","team1": {"teamName": "Peru"},"team2": {"teamName": "Denmark"},"group": "C"}, {"when": "16 JUN 2018 - 21:00 Local time","team1": {"teamName": "Croatia"},"team2": {"teamName": "Nigeria"},"group": "D"}, {"when": "17 JUN 2018 - 16:00 Local time","team1": {"teamName": "Costa_Rica"},"team2": {"teamName": "Serbia"},"group": "E"}, {"when": "17 JUN 2018 - 18:00 Local time","team1": {"teamName": "Germany"},"team2": {"teamName": "Mexico"},"group": "F"}, {"when": "17 JUN 2018 - 21:00 Local time","team1": {"teamName": "Brazil"},"team2": {"teamName": "Switzerland"},"group": "E"}, {"when": "18 JUN 2018 - 15:00 Local time","team1": {"teamName": "Sweden"},"team2": {"teamName": "Korea_Republic"},"group": "F"}, {"when": "18 JUN 2018 - 18:00 Local time","team1": {"teamName": "Belgium"},"team2": {"teamName": "Panama"},"group": "G"}, {"when": "18 JUN 2018 - 21:00 Local time","team1": {"teamName": "Tunisia"},"team2": {"teamName": "England"},"group": "G"}, {"when": "19 JUN 2018 - 15:00 Local time","team1": {"teamName": "Colombia"},"team2": {"teamName": "Japan"},"group": "H"}, {"when": "19 JUN 2018 - 18:00 Local time","team1": {"teamName": "Poland"},"team2": {"teamName": "Senegal"},"group": "H"}, {"when": "19 JUN 2018 - 21:00 Local time","team1": {"teamName": "Russia"},"team2": {"teamName": "Egypt"},"group": "A"}, {"when": "20 JUN 2018 - 15:00 Local time","team1": {"teamName": "Portugal"},"team2": {"teamName": "Morocco"},"group": "B"}, {"when": "20 JUN 2018 - 18:00 Local time","team1": {"teamName": "Uruguay"},"team2": {"teamName": "Saudi_Arabia"},"group": "A"}, {"when": "20 JUN 2018 - 21:00 Local time","team1": {"teamName": "Iran"},"team2": {"teamName": "Spain"},"group": "B"}, {"when": "21 JUN 2018 - 16:00 Local time","team1": {"teamName": "Denmark"},"team2": {"teamName": "Australia"},"group": "C"}, {"when": "21 JUN 2018 - 20:00 Local time","team1": {"teamName": "France"},"team2": {"teamName": "Peru"},"group": "C"}, {"when": "21 JUN 2018 - 21:00 Local time","team1": {"teamName": "Argentina"},"team2": {"teamName": "Croatia"},"group": "D"}, {"when": "22 JUN 2018 - 15:00 Local time","team1": {"teamName": "Brazil"},"team2": {"teamName": "Costa_Rica"},"group": "E"}, {"when": "22 JUN 2018 - 18:00 Local time","team1": {"teamName": "Nigeria"},"team2": {"teamName": "Iceland"},"group": "D"}, {"when": "22 JUN 2018 - 20:00 Local time","team1": {"teamName": "Serbia"},"team2": {"teamName": "Switzerland"},"group": "E"}, {"when": "23 JUN 2018 - 15:00 Local time","team1": {"teamName": "Belgium"},"team2": {"teamName": "Tunisia"},"group": "G"}, {"when": "23 JUN 2018 - 18:00 Local time","team1": {"teamName": "Korea_Republic"},"team2": {"teamName": "Mexico"},"group": "F"}, {"when": "23 JUN 2018 - 21:00 Local time","team1": {"teamName": "Germany"},"team2": {"teamName": "Sweden"},"group": "F"}, {"when": "24 JUN 2018 - 15:00 Local time","team1": {"teamName": "England"},"team2": {"teamName": "Panama"},"group": "G"}, {"when": "24 JUN 2018 - 20:00 Local time","team1": {"teamName": "Japan"},"team2": {"teamName": "Senegal"},"group": "H"}, {"when": "24 JUN 2018 - 21:00 Local time","team1": {"teamName": "Poland"},"team2": {"teamName": "Colombia"},"group": "H"}, {"when": "25 JUN 2018 - 18:00 Local time","team1": {"teamName": "Uruguay"},"team2": {"teamName": "Russia"},"group": "A"}, {"when": "25 JUN 2018 - 17:00 Local time","team1": {"teamName": "Saudi_Arabia"},"team2": {"teamName": "Egypt"},"group": "A"}, {"when": "25 JUN 2018 - 21:00 Local time","team1": {"teamName": "Iran"},"team2": {"teamName": "Portugal"},"group": "B"}, {"when": "25 JUN 2018 - 20:00 Local time","team1": {"teamName": "Spain"},"team2": {"teamName": "Morocco"},"group": "B"}, {"when": "26 JUN 2018 - 17:00 Local time","team1": {"teamName": "Denmark"},"team2": {"teamName": "France"},"group": "C"}, {"when": "26 JUN 2018 - 17:00 Local time","team1": {"teamName": "Australia"},"team2": {"teamName": "Peru"},"group": "C"}, {"when": "26 JUN 2018 - 21:00 Local time","team1": {"teamName": "Nigeria"},"team2": {"teamName": "Argentina"},"group": "D"}, {"when": "26 JUN 2018 - 21:00 Local time","team1": {"teamName": "Iceland"},"team2": {"teamName": "Croatia"},"group": "D"}, {"when": "27 JUN 2018 - 19:00 Local time","team1": {"teamName": "Mexico"},"team2": {"teamName": "Sweden"},"group": "F"}, {"when": "27 JUN 2018 - 17:00 Local time","team1": {"teamName": "Korea_Republic"},"team2": {"teamName": "Germany"},"group": "F"}, {"when": "27 JUN 2018 - 21:00 Local time","team1": {"teamName": "Serbia"},"team2": {"teamName": "Brazil"},"group": "E"}, {"when": "27 JUN 2018 - 21:00 Local time","team1": {"teamName": "Switzerland"},"team2": {"teamName": "Costa_Rica"},"group": "E"}, {"when": "28 JUN 2018 - 17:00 Local time","team1": {"teamName": "Japan"},"team2": {"teamName": "Poland"},"group": "H"}, {"when": "28 JUN 2018 - 18:00 Local time","team1": {"teamName": "Senegal"},"team2": {"teamName": "Colombia"},"group": "H"}, {"when": "28 JUN 2018 - 21:00 Local time","team1": {"teamName": "Panama"},"team2": {"teamName": "Tunisia"},"group": "G"}, {"when": "28 JUN 2018 - 20:00 Local time","team1": {"teamName": "England"},"team2": {"teamName": "Belgium"},"group": "G"}]};
    var jsonPlayers = require('C:/Users/Stefan/IdeaProjects/bakrommet.net/bakrommet/src/data.json');



    this.setState(
      {
        groups: JSON.parse(jsonGroup),
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
