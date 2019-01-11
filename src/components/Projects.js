import React, { Component } from 'react';

import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
      <br/>
      <br/>
      <br/>
        <h3>PROJECTS</h3>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Techs</th>
      <th scope="col">Status</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody>

    <tr class="table-info">
      <th scope="row">Academic Website</th>
      <td>React, MongoDB, NodeJS</td>
      <td>In Progress</td>
      <td><a href="https://jesseegbert.herokuapp.com">Jesse Egbert PhD, Northern Arizona University, Linguistics Department</a></td>
    </tr>
    <tr class="table-primary">
      <th scope="row">Pet Store</th>
      <td>Angular, TypeScript, NodeJS, Postgres</td>
      <td>Completed</td>
      <td></td>
    </tr>
    <tr class="table-secondary">
      <th scope="row">Coombs Kids</th>
      <td>Angular, NodeJS, TypeScript</td>
      <td>In Progress</td>
      <td>#</td>
    </tr>
    <tr class="table-success">
      <th scope="row">Proficiency</th>
      <td>React, Express, MongoDB, NodeJS, JavaScript</td>
      <td>In Progress</td>
      <td>#</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">Memory Game</th>
      <td>React, Firebase</td>
      <td>In Progress</td>
      <td>#</td>
    </tr>
    <tr class="table-warning">
      <th scope="row">Potluck</th>
      <td>React, Firebase, JavaScript</td>
      <td>Completed</td>
      <td>#</td>
    </tr>
    <tr class="table-info">
      <th scope="row">1280theZone</th>
      <td>WordPress</td>
      <td>In Progress</td>
      <td>#</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Katas</th>
      <td>JavaScript, GitHub</td>
      <td>In Progress</td>
      <td>#</td>
    </tr>
    {/* <tr class="table-light">
      <th scope="row">Light</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-dark">
      <th scope="row">Dark</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr> */}
  </tbody>
</table> 
      </div>
    );
  }
}

export default Projects;