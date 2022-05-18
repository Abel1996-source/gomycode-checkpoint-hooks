import React from "react";
const Header=(props)=>{
    const openModal=()=>{
        document.querySelector(".form").classList.add("display");
    }
   const hSubmit =(e)=>{
        const newMovie=[...props.movie,{
            id: Date().getFullTime(),
            title:(e.target.name==="title")&& e.target.value,
            description:(e.target.name==="description")&& e.target.value,
            posterURL:(e.target.name==="posterURL")&& e.target.value,
            rating:(e.target.name==="rating") && e.target.value
        }]
        props.setMovie(newMovie);
        console.log(e.target.name)
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
                       <form onSubmit={hSubmit}>
                           <div className="input">
                              <input type="text" name="title"  placeholder="Title"  />
                           </div>
                           <div className="input">
                              <input type="text" name="description"  placeholder="Description"   />
                           </div>
                           <div className="input">
                              <input type="text" name="posterURL"  placeholder="PosterURL"  />
                           </div>
                           <div className="input">
                              <input type="text" name="rating"  placeholder="rating"  />
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