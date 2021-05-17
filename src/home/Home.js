import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h1>HomePage</h1>
        <h2>Your excuses end here.</h2>
        
        <Link to='/resources'>See the List</Link>
      </div>
    );
  }

}