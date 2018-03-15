import React, { Component } from 'react';
import Team from './Team';

class Group extends Component {
  render() {
    let teams;
    if(this.props.teams){
      teams = this.props.teams.map(team => {
        return(
          <Team key={team.name} team={team} />
        );
      });
    }
    return (
      <div className="Teams">
        <table border="1">
        <caption>Group {this.props.groupLetter}</caption>
        <tbody>
          <tr>
          <td>Team</td>
          <td>Points</td>
          </tr>
          {teams}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Group;
