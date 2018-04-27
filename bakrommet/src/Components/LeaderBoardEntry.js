import React, { Component } from 'react';
import './LeaderBoardEntry.css';


class LeaderBoardEntry extends Component {
  render() {
    let player = "LeaderBoardEntry";
    if (this.props.name === "XXXXXXXX"){
      player = "player";
    }

    return (
      <tr className={player}>
        <td>{this.props.position}</td>
        <td>unique id: {this.props.id} - name: "{this.props.name}"</td>
        <td>{this.props.score}</td>
      </tr>
    );
  }
}

export default LeaderBoardEntry;
