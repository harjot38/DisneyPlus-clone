import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { HiChevronDoubleRight } from 'react-icons/hi';


const image_base_url = "https://image.tmdb.org/t/p/original";

function Slider() {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies()
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results);
        })
    }

    const screenWidth = window.innerWidth;

    const sliderLeft = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft -= screenWidth - 110;
        }
    };

    const sliderRight = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft += screenWidth - 110;
        }
    };

    return (
        <div>
            <HiChevronDoubleLeft className="hidden md:block text-[30px] absolute mx-15 mt-[355px] cursor-pointer" onClick={sliderLeft}/>
            <HiChevronDoubleRight className="hidden md:block text-[30px] absolute mx-15 mt-[355px] cursor-pointer right-0" onClick={sliderRight}/>
            <div className='flex overflow-x-auto w-full px-20 py-6 no-scrollbar scroll-smooth' ref={elementRef}>
                {movieList.map((item) => (
                    < img src={image_base_url + item.backdrop_path} className='min-w-full md:h-[500px] object-cover object-left-top mr-7 rounded-lg hover:border-[4px] border-gray-300 transition-all duration-100 ease-in' />
                ))}
            </div>

        </div>
    )
}

export default Slider