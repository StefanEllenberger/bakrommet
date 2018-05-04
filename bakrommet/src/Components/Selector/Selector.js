import React, { Component } from 'react';
import SelectionFixture from './SelectionFixture';
import SelectionButtons from './SelectionButtons';

class Selector extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    let fixlist = [];
    if (this.props.fixtures.matches){
      let i;
      let len = this.props.fixtures.matches.length;
      for (i = 0; i < len; i++){
          fixlist.push(<tr key={i+1}><td>Match {i+1}</td><td><SelectionFixture
            team1={this.props.fixtures.matches[i].team1.teamName}
            team2={this.props.fixtures.matches[i].team2.teamName}
            gameN={i+1}/></td><td><SelectionButtons id={i+1}/></td></tr>);
        }

  }


    return (
      <div>
        <table>
          <tbody>
          <tr>
          <th>Match #</th>
          <th>Fixture</th>
          <th>Selection</th>
          </tr>
          {fixlist}
          </tbody>
        </table>


      </div>

    );
  }
}

export default Selector;
