import React, { useState } from 'react'
import { useId } from 'react'

const FIlterButton = ({genres, setFilterMovies, popularmovies}) => {

    // const genres = ['ALL', 'ADVENTURE', 'ROMANTIC', 'SCI-FI', 'ACTIONS']
    const allId = useId()
    const [active, setActive] = useState(allId)


   const clickHandle =(id)=>{
    setActive(id);
    console.log(id)
   }
    
  return (
    <div className='genre-button-wrapper'>
       <button onClick={()=>setActive(allId)} className={active == allId ? 'button-17 button-17-active button-17-focus' : 'button-17'}>All</button>
        {genres?.map((item)=>(
            <button onClick={()=>clickHandle(item.id)} key={item.id} className={active == item.id ? 'button-17 button-17-active button-17-focus' : 'button-17'}>{item.name}</button>
        ))}
    </div>
  )
}

export default FIlterButton

