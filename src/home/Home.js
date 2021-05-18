import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h1>The Bestest Tado App</h1>
        <h2>Yes, we know how to spell "todo", but you'll be so amazed by what you accomplish you'll be shouting "TADA" down the isles of your local supermarket.</h2>
        <h3>The proprietors of this app take no responsibility for your outlandish exclaims of joy resulting from completing your todos.</h3>

        <Link to='/resources'>See the List</Link>
      </div>
    );
  }

}