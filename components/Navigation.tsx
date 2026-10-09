'use client'

import Image from 'next/image'
import { data } from '@/data'
import { useState } from 'react'
import HoverAnim from './HoverAnim'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

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
        className={`lg:font-body font-header absolute top-0 left-0 flex h-screen w-full flex-col items-start justify-center gap-[1rem] bg-black px-6 text-[2rem] text-white uppercase transition-transform duration-500 lg:relative lg:h-full lg:w-fit lg:flex-row lg:items-center lg:gap-[2rem] lg:bg-transparent lg:px-0 lg:pr-[3rem] lg:text-[0.875rem] lg:capitalize ${isMenuOpen ? 'translate-x-0 transform' : 'translate-x-full transform'}`}
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
        src="/icon-hamburger.svg"
        alt="Hamburger Icon"
        width={50}
        height={50}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </nav>
  )
}
