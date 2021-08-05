import React from "react";

//? Link for navigation without loading the page
//? NavLink for navigation without loading the page it just add the class named active to the <Link > tag 
//? withRouter for making 
import { Link, NavLink, withRouter } from "react-router-dom";

function Navbar(props){

  setTimeout(() => {
    props.history.push('/')

  },2000)
    return (
        <nav>
          <div className="nav-wrapper" style={{ background: "#6200ee"}}>
            <a href="#" className="brand-logo">Wish List</a>
            <ul id="nav-mobile" className="right">
              <li><Link to="/">home</Link></li>
              <li><Link to="/about">about</Link></li>
            </ul>
          </div>
        </nav>
    );
}

// using withRouter(Navbar) instead of Navbar by which we can access the props object
export default withRouter(Navbar);

