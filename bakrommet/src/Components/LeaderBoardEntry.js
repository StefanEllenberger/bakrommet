import React, { Component } from 'react';

class LeaderBoardEntry extends Component {
  render() {
    return (
    <tr className="LeaderBoardEntry">
      <td>{this.props.position}</td>
      <td>{this.props.name}</td>
      <td>{this.props.score}</td>
    </tr>
    );
  }
}

export default LeaderBoardEntry;
