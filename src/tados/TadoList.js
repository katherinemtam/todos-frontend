import React, { Component } from 'react';
import { addTask, getTadoList, deleteTask } from '../utils/open-at-your-own-risk';
import './TadoList.css';

class TadoList extends Component {
  state = {
    task: '',
    tadoList: []
  }

  async componentDidMount() {
    try {
      const tados = await getTadoList();
      this.setState({ tadoList: tados });
    }
    catch (err) {
      console.log(err);
    }
  }

  handleAdd = async (e) => {
    e.preventDefault();

    const { task, tadoList } = this.state;

    try {
      const newTask = await addTask({ task: task });
      const updatedTados = [...tadoList, newTask];
      this.setState({
        tadoList: updatedTados,
        task: ''
      });
    }
    catch (err) {
      console.log(err.message);
    }

  }

  handleTaskChange = ({ target }) => {
    this.setState({ task: target.value });
  }

  handleDelete = async id => {
    const { tadoList } = this.state;

    try {
      await deleteTask(id);

      const updatedTados = tadoList.filter(task => task.id !== id);
      this.setState({ tadoList: updatedTados });
    }
    catch (err){
      console.log(err);
    }  
  };

  render() {
    const { task, tadoList } = this.state;
    return (
      <div className="TadoList">
        {/* "Add New Task" */}
        <form onSubmit={this.handleAdd}>

          <input value={task} placeholder="Do better. At least add something..." onChange={this.handleTaskChange} />

        </form>


        {/* List of Task, Cus We gettin it Dunnn */}

        <ul>
          {tadoList.map(task => (
            <li key={task.id}>
              <h2>{task.task}</h2>
              <button onClick={()=>this.handleDelete(task.id)}>Give Up</button>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default TadoList;