import React from "react";
import { useNavigate } from "react-router-dom";
const MovieList=(props)=>{
    const navigate=useNavigate()
    return(
        <>
          
               {
                   props.movie.map((movie,index)=>(
                       <div className="content-card" key={index} onClick={()=>navigate("/description")} >
                           <div className="card-iage">
                              <img src={movie.posterURL} alt="movie" />
                           </div>
                           <div className="body">
                               <div className="title">
                                   <h3>{movie.title} </h3>
                                   <div className="rating">
                                       <h4>avis({movie.rating}) </h4>
                                   </div>
                               </div>
                               <div className="description">
                                   <p>{movie.description} </p>
                               </div>
                               
                           </div>
                       </div>
                   ))
               }
          
        </>
    )
}
export default MovieList;