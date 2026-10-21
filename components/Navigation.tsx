'use client'

import Image from 'next/image'
import { data } from '@/data'
import { useState, useRef } from 'react'
import HoverAnim from './HoverAnim'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed z-10 flex w-full items-center justify-between px-6 py-8 lg:py-[3rem] xl:px-[17rem]">
      <Image
        className="z-5 w-[9rem]"
        src="/logo.svg"
        alt="Loopstudios Logo"
        width={200}
        height={50}
      />
      <ul
        className={`menu lg:font-body font-header absolute top-0 left-0 flex h-screen w-full ${isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'} flex-col items-start justify-center gap-[1rem] bg-black px-6 text-[2rem] text-white uppercase transition-transform duration-500 ease-in-out lg:relative lg:h-full lg:w-fit lg:translate-x-0 lg:flex-row lg:items-center lg:gap-[2rem] lg:bg-transparent lg:px-0 lg:pr-[3rem] lg:text-[0.875rem] lg:capitalize`}
      >
        {data.navigation.map((item, index) => {
          return (
            <li key={index}>
              <HoverAnim>
                <a href={item.href}>{item.label}</a>
              </HoverAnim>
            </li>
          )
        })}
      </ul>
      <Image
        className="z-5 w-[1.5rem] lg:hidden"
        src={`${isMenuOpen ? '/icon-close.svg' : '/icon-hamburger.svg'}`}
        alt="Hamburger Icon"
        width={50}
        height={50}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </nav>
  )
}
