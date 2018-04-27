import React, { Component } from 'react';
import LeaderBoardEntry from './LeaderBoardEntry';


class LeaderBoard extends Component {
  constructor(){
    super();
    this.state = {
      page: 0,
      entryList: [],
      size: 0,
      pages: 0,
      nextDisabled: false,
      prevDisabled: true,
      playerid: 49, /*will be sent through later*/
      player: [],
      playerscore: -1
    }
  }

  componentDidMount(){
    if (this.props.playerid){
      this.setState({
        playerid: this.props.playerid
      })
    }
    if (this.props.scoreboard){
      let i = 0;
      let len = this.props.scoreboard.scores.length;
      let pages = Math.floor(len/5);
      let templist = [];
      for (i; i < len; i++){
        var object = {
          id: this.props.scoreboard.scores[i].id,
          position: i+1,
          name: this.props.scoreboard.scores[i].name,
          score: this.props.scoreboard.scores[i].score,
          key: i+1
      };
      templist.push(object);
        if (this.props.scoreboard.scores[i].id == this.state.playerid){
          var player = {
            id: this.props.scoreboard.scores[i].id,
            position: i+1,
            name: this.props.scoreboard.scores[i].name,
            score: this.props.scoreboard.scores[i].score,
            key: i+1
        }
          this.setState({
            player: player,
            playerscore: this.props.scoreboard.scores[i].score
          })
        }
    }
      this.setState({
        entryList: templist,
        size: len,
        pages: pages
      })
    }


  }

  nextPage(e){
    if (this.state.page + 1 === this.state.pages){
      this.setState({nextDisabled: true})
    } else {
      this.setState({nextDisabled: false})
    }
    this.setState({page: this.state.page + 1,prevDisabled: false});

  }

  prevPage(e){
    if (this.state.page - 1 === 0){
      this.setState({prevDisabled: true})
    } else {
      this.setState({prevDisabled: false})
    }
    this.setState({page: this.state.page - 1, nextDisabled: false})
  }


  render() {
    let pageList = [];
    let i = (5*this.state.page);
    let len = i+5;
    if (this.state.entryList[0]){

      if (this.state.playerscore && (this.state.playerscore > this.state.entryList[i].score)){
        pageList.push(<LeaderBoardEntry id={this.state.player.id}
          position={this.state.player.position}
          name="XXXXXXXX"
          score={this.state.player.score}
          key={this.state.player.position} />);
}

      for (i; i < len; i++){
        pageList.push(<LeaderBoardEntry
          id={this.state.entryList[i].id}
          position={this.state.entryList[i].position}
          name={this.state.entryList[i].name}
          score={this.state.entryList[i].score} key={this.state.entryList[i].position} />);
          }

      if (this.state.playerscore &&(this.state.playerscore < this.state.entryList[len-1].score)){
        pageList.push(<LeaderBoardEntry id={this.state.player.id}
          position={this.state.player.position}
          name="XXXXXXXX"
          score={this.state.player.score}
          key={this.state.player.position} />);
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
      {pageList}
      </tbody>
      </table>
      <div className="flex-container">
      <button disabled={this.state.prevDisabled} onClick={this.prevPage.bind(this)}>Previous</button>
      <p>Page:{this.state.page + 1} of {Math.floor(this.state.size/5) + 1}</p>
      <button disabled={this.state.nextDisabled} onClick={this.nextPage.bind(this)}>Next</button>
      </div>
      </div>
    );
};
}

export default LeaderBoard;

/*
<button disabled={this.state.prevDisabled} onClick={this.prevPage.bind(this)}>Previous</button>
<p>Page:{this.state.page + 1} of {Math.floor(this.state.size/5) + 1}</p>
<button disabled={this.state.nextDisabled} onClick={this.nextPage.bind(this)}>Next</button>

*/
