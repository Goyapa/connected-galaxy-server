// TODO settings-development.json http://info.meteor.com/blog/the-meteor-chef-making-use-of-settings-json


import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

class App extends Component {
  renderTask() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTask()}
        </ul>
      </div>
    );
  }
};

App.PropTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
