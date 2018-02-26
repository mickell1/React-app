import React, { Component } from 'react';

//CSS
import '../../css/ToDoList.css';

export default class ToDoInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(editVal) {
    this.setState({value: editVal.target.value});
  }

  addTask(task) {
    if(task.length > 0) {
      this.props.addTask(task);
      this.setState({value: ''});
    }
  }

  render() {
    return(
      <div>
        <input type="text" value={this.state.value} placeholder="Add Task" onChange={this.handleChange}/>
        <button className="btn btn-primary" onClick={() => {
          this.addTask(this.state.value)}
        }>Submit</button>
      </div>
    );
  }
}
