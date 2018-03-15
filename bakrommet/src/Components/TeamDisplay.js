import React, { Component } from 'react';

class TeamDisplay extends Component {
  render() {
    return (
      <li className="Teams">

        <strong> {this.props.team.name}</strong> - {this.props.team.score}

      </li>
    );
  }
}

export default ProjectItem;
