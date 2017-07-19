import React, {Component} from 'react'
import axios from 'axios'
import './Film.css'
const BASE_URL = 'http://swapi.co/api/'

class Film extends Component{
  constructor(){
    super()
    this.state={
      film: {}
    }
  }
  componentDidMount(){
    const id = parseInt(this.props.match.params.id)
    axios.get(BASE_URL + 'films')
    .then(response=>{
      const filmData = response.data.results;
      const films = filmData.find((film)=>{
        return film.episode_id === id;
      })
      this.setState({film: films})
    })
  }
  render(){
    const {film} = this.state
    return(
      <div className='film-container'>
        <div className='film-wrapper'>
          <h1>{film.title}</h1>
          <div className='about-film'>
            <h3>Directed By: {film.director}</h3>
            <h3>Producers: {film.producer}</h3>
            <h3>Released: {film.release_date}</h3>
          </div>
          <div className='film-summary'>
            <h3>Plot Line:</h3>
            <p className='summary'>{film.opening_crawl}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Film
