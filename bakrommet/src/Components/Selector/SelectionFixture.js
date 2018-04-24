import React, { Component } from 'react';

class SelectionFixtures extends Component {
  render() {
    let team1 = "";
    let team2 = "";

    if (this.props.team1){
      team1 = this.props.team1;
      team2 = this.props.team2;

    }

    return (
      <div>
        {team1} vs {team2}
      </div>
    );
  }
}

export default SelectionFixtures;
