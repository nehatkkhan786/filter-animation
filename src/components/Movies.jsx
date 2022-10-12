import { useContext } from "react"
import { AppContext } from "../App"
import { animate, motion } from "framer-motion"




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
            <motion.div key={movie?.id} className='image-card'
            layout
            initial={{opacity:0}}
            animate={{opacity:1}} 
            exit={{opacity:0}}
            transition={{duration:0.5}}
            >
                <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
                <h2 className='movie-title'>{movie.title}</h2>
            </motion.div>
        )
    })}
   </>
  )
}

export default Movies