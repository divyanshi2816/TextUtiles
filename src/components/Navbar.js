import React from 'react'
import Color from './Color'
// import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  {/* <Link className="navbar-brand" to="/">TextUtiles</Link> */}
  <a className="navbar-brand" href="/">TextUtiles</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <a className="nav-link" href={"/"}>Home <span className="sr-only"></span></a>
        {/* <Link className="nav-link" to={"/"}>Home <span className="sr-only"></span></Link> */}
      </li>
      <li className="nav-item">
        <a className="nav-link" href={"/about"}>About</a>
        {/* <Link className="nav-link" to={"/about"}>About</Link> */}

      </li>
      
    </ul>
    {/* <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch mx-4 text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} enabled mode</label>
</div>
<Color color={"red"} mode={props.mode} />
  </div>
</nav>
  )
}
