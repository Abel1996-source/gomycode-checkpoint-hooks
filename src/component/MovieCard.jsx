import React from "react";

const MovieCard=(props)=>{
    const MovieList=props.MovieList;
    return(
        <>
           <MovieList movie={props.movie} setMovie={props.setMovie} />
        </>
    )
}
export default MovieCard;