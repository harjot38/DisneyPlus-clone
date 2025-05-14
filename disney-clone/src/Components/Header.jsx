import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import mcqueen from './../assets/Images/mcqueen-avatar.png'
import { HiHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineFilm } from "react-icons/hi";
import { HiDesktopComputer } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {

  const [toggle, setToggle] = useState(false);

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
      name: 'ORIGNALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiOutlineFilm
    },
    {
      name: 'SERIES',
      icon: HiDesktopComputer
    }
  ]

  return (
    <div className='flex gap-8 items-center justify-between p-3'>
      <div className='flex gap-8'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
          {menu.map((item) =>
          (<HeaderItem
            name={item.name}
            Icon={item.icon} />
          ))}
        </div>
        <div className='flex md:hidden gap-5'>
          {menu.map((item, index) => index < 3 &&
            (<HeaderItem
              name={''}
              Icon={item.icon} />
            ))}
          <div className='md:hidden'
            onClick={() => setToggle(!toggle)}>
            <HeaderItem
              name={''}
              Icon={HiDotsVertical} />
            {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray px-5 py-4'>
              {menu.map((item, index) => index > 2 &&
                (<HeaderItem
                  name={item.name}
                  Icon={item.icon} />
                ))}
            </div> : null}
          </div>
        </div>
      </div>
      <img src={mcqueen} className="w-[50px] h-[50px] rounded-full" alt="avatar" />
    </div>
  )
}

export default Header