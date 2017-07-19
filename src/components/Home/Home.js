import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Home.css'
const BASE_URL = 'http://swapi.co/api/'


class Home extends Component{
  constructor(){
    super()
    this.state = {
      films: []
    }
  }
  componentDidMount(){
    axios.get(BASE_URL + 'films')
    .then(response=>{
      console.log(response.data.results)
      this.setState({films: response.data.results})
    })
  }
  render(){
    const episodes = this.state.films.map((film)=>{
      return(
        <div className='link-box'>
          <Link className='film-link' key={film.episode_id} to={'film/' + film.episode_id}>
            <h4 className='title'>Episode {film.episode_id}: {film.title}</h4>
          </Link>
        </div>
      )
    })
    return(
      <div className='home-container'>
        <h1>Welcome to Star Wars DB</h1>
        <h3>Click a title Below to find out more information</h3>
        <div className='link-wrapper'>
          {episodes}
        </div>
      </div>
    )
  }
}

export default Home
