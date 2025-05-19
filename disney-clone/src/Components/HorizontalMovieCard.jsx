import React from 'react'

const image_base_url = "https://image.tmdb.org/t/p/original";

function HorizontalMovieCard({ movie }) {
    return (
        <section className='hover:scale-110 transition-all ease-in duration-200 cursor-pointer'>
            <img src={image_base_url + movie.backdrop_path}
                className='w-[110px] md:w-[250px] hover:border-[2px] border-gray-200 rounded-lg hover:scale-110 transition-all ease-in duration-200 cursor-pointer'
            />
            <h2 className='w-[110px] md:w-[250px] text-center font-bold text-white mt-2'>{movie.title}</h2>
        </section >
    )
}

export default HorizontalMovieCard