import React, { Component } from 'react';
import { addTask } from '../utils/open-at-your-own-risk';
import './TadosList.css';

class TadoList extends Component {
  state = { 
    task: '',
    tadoList: []
  }

  handleAdd = async (e) => {
    e.preventDefault();

    const { task } = this.state;
    const newTask = await addTask({ task: task });

    console.log('ADDED', newTask);


  }

  handleTaskChange = ({ target }) => {
    this.setState({ task: target.value });
  }



  render() { 
    const { task } = this.state;
    return ( 
      <div className="TadosList">
        <form onSubmit={this.handleAdd}>
          <input value={task} placeholder="Do better. At least add somthing..." onChange={this.handleTaskChange}/>

        </form>


      </div>
    );
  }
}
 
export default TadoList;