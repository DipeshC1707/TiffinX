import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let text="Enable Dark Mode"
  return (
    <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    TiffinX
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about/">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Meal
          </a>
          <ul className="dropdown-menu" style={{backgroundColor:props.mode==='dark'?'#212529':'white'}}>
            <li ><a className="dropdown-item" href="/" style={{color:props.mode==='dark'?'white':'black'}}>Tiffin</a></li>
            <li><a className="dropdown-item" href="/" style={{color:props.mode==='dark'?'white':'black'}}>Lunch</a></li>
            <li><a className="dropdown-item" href="/" style={{color:props.mode==='dark'?'white':'black'}}>Dinner</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/" style={{color:props.mode==='dark'?'white':'black'}}>Something else here</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Food Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text}</label>
</div>
    </div>
  </div>
</nav>
    </>

  )
    }
  
  