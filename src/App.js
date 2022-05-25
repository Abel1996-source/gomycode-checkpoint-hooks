import React,{useState,useRef} from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import MovieCard from './component/MovieCard';
import MovieList from './component/MovieList';
import Description from './component/Description';
import AddMovie from "./component/AddMovie";
function App() {
 const [movies,setMovies]=useState([
   { id:1,
     title:"uncharted",
     description:"Uncharted - film 2022 - AlloCiné",
     posterURL:"https://fr.web.img4.acsta.net/c_310_420/pictures/22/01/18/10/13/5983633.jpg",
     rating:"5"
  },
   {id:2,
     title:"Ténor",
     description:"ténor - film 2021 - AlloCiné",
     posterURL:"https://fr.web.img6.acsta.net/pictures/22/03/21/14/50/4272885.jpg",
     rating:"5"
  },
   {id:3,
     title:"Avengers",
     description:"Avengers - film 2022 - AlloCiné",
     posterURL:"https://www.rts.ch/2019/05/06/12/13/10396822.image?w=1280&h=720",
     rating:"5"
  },
   {id:4,
     title:"Casablanca",
     description:"Casablanca - culte",
     posterURL:"https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg",
     rating:"5"
  },
   {id:5,
     title:"Black widow",
     description:"Black widow - film super pouvoir",
     posterURL:"https://images-na.ssl-images-amazon.com/images/I/51FbjCILi-L._SX384_BO1,204,203,200_.jpg",
     rating:"5"
  },
   {id:6,
     title:"La ruse",
     description:"La ruse -ciméma",
     posterURL:"https://images.cinefil.com/movies/1116607_260x390.webp",
     rating:"5"
  },
 ]);
const [movie,setMovie]=useState({id:100,title:"Coupez",description:"Coupez fim dram",posterURL:"https://fr.web.img6.acsta.net/pictures/22/04/27/12/42/5834908.jpg",rating:"4"});
var count = 100;
const title=useRef();
const description=useRef();
const posterURL=useRef();
const rating=useRef();

 const hSubmit =(e)=>{

  e.preventDefault();
   const newMovie={
       id:count++,
       title:title.current.value,
       description:description.current.value,
       posterURL:posterURL.current.value,
       rating:rating.current.value
   }
  setMovie(newMovie);
  setMovies([...movies, movie]);
document.querySelector(".form").classList.remove("display");
}

const seek=(e)=>{
  console.log(e.target.value);
}

  return (
    <div className="App">
      <Header  seek={seek} />
      
      <Routes>
          <Route path='/' element={<MovieCard MovieList={MovieList} movie={movies} setMovie={setMovies} AddMovie={AddMovie} movies={movie} setMovies={setMovie}  hSubmit={hSubmit} title={title} description={description} posterURL={posterURL} rating={rating} />} />
          <Route path='/description' element={<Description  />} />
      </Routes>
    </div>
  );
} 

export default App;
