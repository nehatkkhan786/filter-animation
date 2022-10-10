import React, { useContext, useState } from 'react'
import { useId } from 'react'
import { AppContext } from '../App'

const FIlterButton = ({genres,}) => {

    // const genres = ['ALL', 'ADVENTURE', 'ROMANTIC', 'SCI-FI', 'ACTIONS']
    const {popularmovies, setPopularMovies, setFilterMovies} = useContext(AppContext)
    const allId = useId()
    const [active, setActive] = useState(allId)


   const clickHandle =(id)=>{
    setActive(id);
    console.log(id)
    const filMovie = popularmovies.filter(movie=>movie.genre_ids.includes(id));

    if (id === allId) {
      setFilterMovies(popularmovies)
    }else{
      setFilterMovies(filMovie)
    }
   }

   const allHandleButton = (id)=>{
    setActive(allId);
    setFilterMovies(popularmovies)
    console.log(id)
   }
    
  return (
    <div className='genre-button-wrapper'>
       <button onClick={()=>allHandleButton(allId)} className={active == allId ? 'button-17 button-17-active button-17-focus' : 'button-17'}>All</button>
        {genres?.map((item)=>(
            <button onClick={()=>clickHandle(item.id)} key={item.id} className={active == item.id ? 'button-17 button-17-active button-17-focus' : 'button-17'}>{item.name}</button>
        ))}
    </div>
  )
}

export default FIlterButton

