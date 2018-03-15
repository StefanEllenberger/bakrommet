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
        <caption><strong>Group {this.props.groupLetter}</strong></caption>
        <tbody>
          <tr>
          <td><strong>Team</strong></td>
          <td><strong>Points</strong></td>
          </tr>
          {teams}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Group;
