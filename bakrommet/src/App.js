import React, { Component } from 'react';
import Group from './Components/Group'
import Fixtures from './Components/Fixtures'
import Selector from './Components/Selector/Selector'
import LeaderBoard from './Components/LeaderBoard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

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



 //when fetching from API, do it from CWM or CDM, check definitions for when they render
  componentDidMount() {
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

  const HomeC = () => (
      <div>
        <h2>Home</h2>
        <p>whatup</p>
      </div>
    );

  const LeaderBoardC = () => (
    <div>
      <h2>Leaderboard</h2>
        <div className="flex-container">
          <LeaderBoard scoreboard={this.state.scoreboard}/>
        </div>
    </div>
  );

  const FixturesC = () => (
    <div>
    <h2>Fixtures</h2>
      <div className="flex-container">
        <Fixtures fixtures={this.state.fixtures}/>
      </div>

    </div>
  );

  const GroupsC = () => (
    <div>
      <h2>Groups</h2>
        <div className="flex-container">
          {groups.map(group => <Group key={group.Group} groupLetter={group.Group} team1={group.Team1} team2={group.Team2} team3={group.Team3} team4={group.Team4}/>)}
        </div>
    </div>
  );

  const SelectionsC = () => (
    <div>
      <h2>Selections</h2>
        <div className="flex-container">
          <Selector fixtures={this.state.fixtures}/>
        </div>
    </div>
  );

  let groups = this.state.groups;
    return (
      <div>
      <div className="flex-container-header">
      <img src={ require('./resources/header.png') } width="500" />
      </div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link to="/fixtures">Fixtures</Link>
              </li>
              <li>
                <Link to="/groups">Groups</Link>
              </li>
              <li>
                <Link to="/selections">Selections</Link>
              </li>
            </ul>

            <hr/>

            <Route exact path="/" component={HomeC}/>
            {/*
            <Route path="/leaderboard" component={LeaderBoardC}/>
            */}<Route path="/fixtures" component={FixturesC}/>
            <Route path="/groups"  component={GroupsC}/>
            <Route path="/selections"  component={SelectionsC}/>
          </div>
        </Router>
      </div>
    );
  }
}



export default App;
