'use client'

import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="fixed flex w-full items-center justify-between px-6 py-8">
      <Image
        className="z-5 w-[9rem]"
        src="/logo.svg"
        alt="Loopstudios Logo"
        width={200}
        height={50}
      />
      <Image
        className="z-5 w-[1.5rem]"
        src="/icon-hamburger.svg"
        alt="Hamburger Icon"
        width={50}
        height={50}
      />
    </nav>
  )
}
