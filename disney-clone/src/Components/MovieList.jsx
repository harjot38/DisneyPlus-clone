import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HorizontalMovieCard from './HorizontalMovieCard';


function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef(null);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then(resp => {
      setMovieList(resp.data.results)
    })
  }

  useEffect(() => {
    getMovieByGenreId();
  }, [])

  const slideRight = (element) => {
    element.scrollLeft += 500;
  }
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  }



  return (
    <div className='relative'>
      <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'} `} />
      <div ref={elementRef} className='flex overflow-x-auto gap-10 no-scrollbar pt-5 px-4 pb-5 scroll-smooth'>
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ?<HorizontalMovieCard movie={item} /> : <MovieCard movie={item} />}
          </>
        ))}
      </div>
      <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`} />
    </div>
  )
}

export default MovieList