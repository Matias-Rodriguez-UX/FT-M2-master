
export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=aa218f4e&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

export function removeMovieFavorite(id){
    return({ type: "REMOVE_MOVIE_FAVORITE" , id})
}

export function getMovieDetail(idDetail){
  return function (dispatch){
    return fetch(`http://www.omdbapi.com/?apikey=aa218f4e&i=${idDetail}`)
    .then(response => response.json())
    .then(detail=>{
      dispatch({type:"GET_MOVIE_DETAIL", payload:detail})
    })
  }
}