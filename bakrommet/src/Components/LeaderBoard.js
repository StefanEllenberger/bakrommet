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
      prevDisabled: true
    }
  }

  componentDidMount(){
    if (this.props.scoreboard){
      let i = 0;
      let len = this.props.scoreboard.scores.length;
      let pages = Math.floor(len/5);
      let templist = [];
      for (i; i < len; i++){
          templist.push(<LeaderBoardEntry position={i+1}
            name={this.props.scoreboard.scores[i].name}
            score={this.props.scoreboard.scores[i].score} key={i+1} />);
      }
      this.setState({
        entryList: templist,
        size: len,
        pages: pages
      })
    }

  }

  nextPage(e){
    if (this.state.page + 1 == this.state.pages){
      this.setState({nextDisabled: true})
    } else {
      this.setState({nextDisabled: false})
    }
    this.setState({page: this.state.page + 1,prevDisabled: false});

  }

  prevPage(e){
    if (this.state.page - 1 == 0){
      this.setState({prevDisabled: true})
    } else {
      this.setState({prevDisabled: false})
    }
    this.setState({page: this.state.page - 1, nextDisabled: false})

  }





  render() {
    let pageList = [];
    if (this.state.entryList){
      let i = (5*this.state.page);
      let len = i+5;
      for (i; i < len; i++){
        pageList.push(this.state.entryList[i]);
      }
    } else {
      console.log("render not ok")
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
