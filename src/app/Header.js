import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">
        <h1>The Bestest Tado App</h1>
        <h2>Your excuses end here.</h2>

        <NavLink to="/todos">Tado List</NavLink>
      </header>
    );
  }

}

export default Header;