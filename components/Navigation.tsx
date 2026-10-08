'use client'

import Image from 'next/image'
import { data } from '@/data'
import { useState } from 'react'
import HoverAnim from './HoverAnim'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)


  return (
    <nav className="fixed z-10 flex w-full items-center justify-between px-6 py-8 lg:px-[17rem] lg:py-[3rem]">
      <Image
        className="z-5 w-[9rem]"
        src="/logo.svg"
        alt="Loopstudios Logo"
        width={200}
        height={50}
      />
      <ul className={`w-full lg:w-fit lg:font-body lg:relative lg:flex-row lg:h-full lg:text-[0.875rem] lg:gap-[2rem] lg:pr-[3rem] lg:items-center lg:capitalize lg:px-0 lg:bg-transparent h-screen bg-black text-white absolute top-0 left-0 flex flex-col items-start justify-center font-header text-[2rem] uppercase gap-[1rem] px-6 transition-transform duration-500 ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
        {data.navigation.map((item, index) => {
          return (
            <li key={index}>
              <HoverAnim>
                <a href={item.href}>
                  {item.label}
                </a>
              </HoverAnim>
            </li>
          )
        })}
      </ul>
      <Image
        className="z-5 w-[1.5rem] lg:hidden"
        src="/icon-hamburger.svg"
        alt="Hamburger Icon"
        width={50}
        height={50}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </nav>
  )
}
