import React from 'react'

const FIlterButton = () => {

    const genres = ['ALL', 'ADVENTURE', 'ROMANTIC', 'SCI-FI', 'ACTIONS']

  return (
    <div className='genre-button-wrapper'>
        {genres.map((item)=>(
            <button key={item} className='btn actives'>{item}</button>
        ))}
    </div>
  )
}

export default FIlterButton