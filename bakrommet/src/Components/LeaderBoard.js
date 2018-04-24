import React, { Component } from 'react';
import LeaderBoardEntry from './LeaderBoardEntry';

class LeaderBoard extends Component {


  render() {
    let entryList = [];

    if (this.props.scoreboard){
      let i;
      let len = this.props.scoreboard.scores.length;
      for (i = 0; i < len; i++){
          entryList.push(<LeaderBoardEntry position={i+1}
            name={this.props.scoreboard.scores[i].name}
            score={this.props.scoreboard.scores[i].score} />);

      }
    }


    return (
      <div>
      <table>
      <tbody>
      <tr>
      <td>Rank</td>
      <td>Name</td>
      <td>Score</td>
      </tr>

      {entryList}
      </tbody>
      </table>
      </div>
    );
};
}

export default LeaderBoard;

/*
*/
