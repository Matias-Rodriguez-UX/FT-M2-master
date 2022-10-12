import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {
  render() {
    console.log(this.props.movies)
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map(m=> (
            <div className="box grid-responsive" key={m.id}>
              <Link to={`/movie/${m.id}`}>
                {m.title}
              </Link>
              <button onClick={()=> {this.props.removeMovieFavorite(m.id)}}>Remove</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    movies: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
