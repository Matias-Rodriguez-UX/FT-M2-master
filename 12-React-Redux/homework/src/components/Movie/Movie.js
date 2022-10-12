import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
componentDidMount(){
    const movieID = this.props.match.params.id
    this.props.getMovieDetail(movieID)
}

    render() {
        
        return (
            <div className="movie-detail">
                <h2>{this.props.movie.Title}</h2>
                <h3>{this.props.movie.Year}</h3>
                <h4>Genre: {this.props.movie.Genre}</h4> 
                <h5>Duration: {this.props.movie.Runtime}</h5> 
                <h5>Director: {this.props.movie.Director}</h5> 
                <h5>Actors: {this.props.movie.Actors}</h5>
                <img src={this.props.movie.Poster}  width="20%" height="20%" alt={this.props.movie.Title} />
            </div>
        );
    }
}

function mapStateToProps(state){
return{
    movie: state.movieDetail
}
}

function mapDispatchProps(dispatch){
    return{
        getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Movie);