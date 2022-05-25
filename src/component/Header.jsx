import React from "react";
const Header=(props)=>{

    return(
        <>
        
           <div className="heading">
               <div className="logo">
                   <h1>Movie</h1>
               </div>
               <div className="search">
                   <input type="text" onChange={props.seek} />
               </div>
           </div>
        </>
    )
}
export default Header;