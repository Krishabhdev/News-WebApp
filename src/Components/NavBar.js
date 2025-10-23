import React, { Component } from 'react'

import { Link, } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsCat</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li><Link className="nav-link" to="/">Home</Link></li> 
        <li><Link className="nav-link" to="/business">Business</Link></li>
        <li><Link className="nav-link" to="/entertainment">Entertainmanet</Link></li>
        <li><Link className="nav-link" to="/health">Health</Link></li>
        <li><Link className="nav-link" to="/science">Science</Link></li>
        <li><Link className="nav-link" to="/sports">Sports</Link></li>
        <li><Link className="nav-link" to="/technology">Technology</Link></li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
