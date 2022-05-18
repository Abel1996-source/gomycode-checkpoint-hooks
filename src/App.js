import React,{useState} from 'react';
import './App.css';
import Header from './component/Header';
import MovieCard from './component/MovieCard';
import MovieList from './component/MovieList'
import { useForm } from "react-hook-form";
function App() {
const { register, handleSubmit } = useForm();
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
  return (
    <div className="App">
      <Header movie={movies} setMovie={setMovies} register={register} handleSubmit={handleSubmit} />
      <MovieCard MovieList={MovieList} movie={movies} setMovie={setMovies} />
    </div>
  );
} 

export default App;
