import React from 'react'

const image_base_url = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
    return (
        <>
            <img src={image_base_url + movie.poster_path} 
            className='w-[110px] md:w-[200px] hover:border-[2px] border-gray-200 rounded-lg hover:scale-110 transition-all ease-in duration-200 cursor-pointer'
            />

        </>
    )
}

export default MovieCard