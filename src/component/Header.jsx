import React from "react";
const Header=(props)=>{

const openModal=()=>{
        document.querySelector(".form").classList.add("display");
    }
   
    return(
        <>
        
           <div className="heading">
               <div className="logo">
                   <h1>Movie</h1>
               </div>
               <div className="add-movie ">
                   <button onClick={openModal}>Add movie</button>
               </div>
               <div className="form">
                       <form onSubmit={props.hSubmit}>
                           <div className="input">
                              <input type="text"  ref={props.title}  placeholder="Title" autoComplete="off" />
                           </div>
                           <div className="input">
                              <input type="text" ref={props.description}  placeholder="Description" autoComplete="off"  />
                           </div>
                           <div className="input">
                              <input type="text"  ref={props.posterURL} placeholder="PosterURL" autoComplete="off" />
                           </div>
                           <div className="input">
                              <input type="text" ref={props.rating}  placeholder="rating" autoComplete="off"  />
                           </div>
                           <div className="button ">
                             <button type="submit" >Send</button>
                           </div>
                       </form>
               </div>
               <div className="search">
                   <input type="text" />
               </div>
           </div>
        </>
    )
}
export default Header;