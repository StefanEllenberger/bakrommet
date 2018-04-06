import React, { Component } from 'react';
import Team from './Team';

class Group extends Component {
  render() {
    let teams;
    let team;
    if(this.props.teams){
      //teams.push(<Team name="test" score="4"/>)
    };

    return (
      <div className="Teams">
        <table border="1">
        <caption><strong>Group {this.props.groupLetter}</strong></caption>
        <tbody>
          <tr>
          <td><strong>Team</strong></td>
          <td><strong>Points</strong></td>
          </tr>
          //{teams}

          <Team name="test" score="4"/>

          </tbody>
        </table>
      </div>
    );
  }
}

export default Group;
