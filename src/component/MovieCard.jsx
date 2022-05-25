import React from "react";

const MovieCard=(props)=>{
    const MovieList=props.MovieList;
    const AddMovie=props.AddMovie;
    
    return(
        <>
        <AddMovie hSubmit={props.hSubmit} movie={props.movies} setMovie={props.setMovies}  title={props.title} description={props.description} posterURL={props.posterURL} rating={props.rating} />
        <div className="contenaire">
            <MovieList movie={props.movie} setMovie={props.setMovie} sendMovie={props.sendMovie} />
        </div>
        </>
    )
}
export default MovieCard;