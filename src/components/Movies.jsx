import { useContext } from "react"
import { AppContext } from "../App"




const Movies = () => {

const {filterMovies} = useContext(AppContext)
  return filterMovies?.length < 1 ? (
   <div>
    <h4>Sorry! No movies found...</h4>
   </div>
  )  : (
   <>
    {filterMovies?.map((movie)=>{
        return (
            <div key={movie?.title} className='image-card'>
                <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
                <h2 className='movie-title'>{movie.title}</h2>
            </div>
        )
    })}
   </>
  )
}

export default Movies