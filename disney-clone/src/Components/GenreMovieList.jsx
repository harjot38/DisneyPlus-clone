import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
    return (
        <div>
            {GenresList.genres.map((item, index) => index <= 4 && (
                <div className='p-10 px-10 md:px-20'>
                    <h2 className='text-[20px] font-bold'>{item.name}</h2>
                    <MovieList genreId={item.id} index_={index}/>
                </div>
            ))}
        </div>
    )
}

export default GenreMovieList