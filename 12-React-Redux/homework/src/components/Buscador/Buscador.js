import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite, getMovies} from '../../actions'

function mapStateToProps(state) {
  return{
    movies: state.moviesLoaded,
  }
}
function mapDispatchProps(dispatch){
  return{
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  }
}

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul className='box grid-responsive'>
          {
            this.props.movies && this.props.movies.map(movie => <div key={movie.imdbID} style={{border:"thin solid grey", padding:"1rem"}}>

              <Link to={`/movie/${movie.imdbID}`}>
                {movie.Title}{` (${movie.Year})`}
              </Link>

              <button onClick={()=>{this.props.addMovieFavorite({poster: movie.Poster, title: movie.Title, id: movie.imdbID})}}>Fav</button>
            </div>
            )
          }
        </ul>
      </div>
    );
  }
}

export default connect(
mapStateToProps,
mapDispatchProps
)(Buscador);
