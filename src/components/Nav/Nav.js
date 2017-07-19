import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import './Nav.css'

class Nav extends Component{
  render(){
    return(
      <div className='nav-wrapper'>
        <h2 className='logo'><Link to='/' className='link'>SWAPI React</Link></h2>
        <ul className='link-list'>
          <li className='li'><Link to='/' className='link'>Home</Link></li>
        </ul>
      </div>
    )
  }
}



export default Nav
