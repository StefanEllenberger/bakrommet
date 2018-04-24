import React, { Component } from 'react';
import Team from './Team';

class Group extends Component {
  render() {
    let teamlist = [];
    if (this.props.groupLetter){
      teamlist.push(<Team key={this.props.team1} name={this.props.team1} score="0"/>);
      teamlist.push(<Team key={this.props.team2} name={this.props.team2} score="0"/>);
      teamlist.push(<Team key={this.props.team3} name={this.props.team3} score="0"/>);
      teamlist.push(<Team key={this.props.team4} name={this.props.team4} score="0"/>);

    };

    return (
      <div className="Teams">
        <table border="1">
          <tbody>
            <tr>
              <td align="center" colSpan="2"><strong>Group {this.props.groupLetter}</strong></td>
            </tr>
            <tr>
            <td><strong>Team</strong></td>
            <td><strong>Points</strong></td>
            </tr>
            {teamlist}
          </tbody>
        </table>

      </div>
    );
  }
}

export default Group;
