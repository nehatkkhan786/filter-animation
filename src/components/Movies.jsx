
const Movies = ({movies}) => {


  return (
   <>
    {movies?.map((movie)=>{
        return (
            <div key={movie.title} className='image-card'>
                <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
                <h2 className='movie-title'>{movie.title}</h2>
            </div>
        )
    })}
   </>
  )
}

export default Movies