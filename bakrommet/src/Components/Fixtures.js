import React, { Component } from 'react';
import Fixture from './Fixture';

class Fixtures extends Component {
  constructor(props){
    super(props);
    this.state = {
      group: "all"
    }
  }
  handleChange(e){
    const selection = e.target.value;
    this.setState(
      {
        group: selection
      });

  }
  render() {
    let fixlist = [];
    let groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    if (this.props.fixtures.matches){
      let i;
      let len = this.props.fixtures.matches.length;
      let selection = this.state.group;
      for (i = 0; i < len; i++){
        if (selection === this.props.fixtures.matches[i].group){
          fixlist.push(<Fixture date={this.props.fixtures.matches[i].when} team1={this.props.fixtures.matches[i].team1.teamName}
            team2={this.props.fixtures.matches[i].team2.teamName} group={this.props.fixtures.matches[i].group} gameN={i+1}/>);
        } else if (selection === "all"){
          fixlist.push(<Fixture date={this.props.fixtures.matches[i].when} team1={this.props.fixtures.matches[i].team1.teamName}
            team2={this.props.fixtures.matches[i].team2.teamName} group={this.props.fixtures.matches[i].group} gameN={i+1} key={i+1}/>);
        } else {
        }
  }

    };

    return (
      <div className="Fixtures">
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
