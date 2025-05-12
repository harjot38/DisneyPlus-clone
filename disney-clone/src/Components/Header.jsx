import React from 'react'
import logo from './../assets/Images/logo.png'
import mcqueen from './../assets/Images/mcqueen-avatar.png'
import { HiHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineFilm } from "react-icons/hi";
import { HiDesktopComputer } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiOutlineSearch
    },
    {
      name: 'WATCHLIST',
      icon: HiOutlinePlus
    },
    {
      name: 'MOVIES',
      icon: HiOutlineFilm
    },
    {
      name: 'SERIES',
      icon: HiDesktopComputer
    },
    {
      name: 'ORIGNALS',
      icon: HiStar
    },
  ]

  return (
    <div className='flex gap-8 items-center justify-between p-3'>
      <div className='flex gap-8'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        {menu.map((item) =>
        (<HeaderItem
          name={item.name}
          Icon={item.icon} />
        ))}
      </div>
      <img src={mcqueen} className= "w-[50px] h-[50px] rounded-full" alt="avatar" />
    </div>
  )
}

export default Header