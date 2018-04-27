import React, { Component } from 'react';
import Fixture from './Fixture';

class Fixtures extends Component {
  //consider constructor here
  handleChange(e){
    const selection = e.target.value;
    this.props.changeGroupSelection(selection);

  }
  render() {
    let fixlist = [];
    let groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];



    if (this.props.fixtures){
      let i;
      let len = this.props.fixtures.matches.length;
      let selection = this.props.groupSelection;
      for (i = 0; i < len; i++){
        if (selection === this.props.fixtures.matches[i].group){
          fixlist.push(<Fixture date={this.props.fixtures.matches[i].when} team1={this.props.fixtures.matches[i].team1.teamName}
            team2={this.props.fixtures.matches[i].team2.teamName} group={this.props.fixtures.matches[i].group} gameN={i+1}/>);
        } else if (selection === "all"){
          fixlist.push(<Fixture date={this.props.fixtures.matches[i].when} team1={this.props.fixtures.matches[i].team1.teamName}
            team2={this.props.fixtures.matches[i].team2.teamName} group={this.props.fixtures.matches[i].group} gameN={i+1} key={i+1}/>);

        } else {
          console.log(selection + " is an invalid selection.");
        }

  }

    };

    return (
      <div className="Fixtures">
        <h2>Fixtures</h2>
        <form>
          <select id="groupSelect" onChange={this.handleChange.bind(this)}>
            <option value="all">Select group to filter</option>
            {groups.map(group => <option value={group} key={group} >Group {group}</option>)}
          </select>
        </form>
        <table>
        <tbody>
        <tr>
        <td>Game number</td>
        <td>Home Team</td>
        <td>Away Team</td>
        <td>Date and Time</td>
        <td>Group</td>
        </tr>
        {fixlist}
        </tbody>
        </table>
      </div>
    );
  }
}

export default Fixtures;
