import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar blue">

        <a href="/">              <button
                className="btn btn-primary"
              >
                Search Books
              </button></a>
              <a href="/saved">              <button
                className="btn btn-primary"
              >
                View Saved
              </button></a>

              <div className="right">        <Link className="navbar-brand hide-on-small-only" to="/">
          Google Books
        </Link></div>
      </nav>
      
    );
  }
}

export default Nav;
