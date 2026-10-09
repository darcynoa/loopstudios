import Image from 'next/image'
import type { HeroData } from '@/data'

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="relative flex w-full items-center justify-start">
      <picture className="absolute h-full w-full object-cover">
        <source srcSet="/desktop/image-hero.jpg" media="(min-width: 768px)" />
        <Image
          src="/mobile/image-hero.jpg"
          alt="Hero Image"
          width={750}
          height={1300}
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40"></div>
      <h1 className="font-header z-3 mx-6 my-[15rem] w-[90%] max-w-[660px] border-2 border-white p-4 text-[2.75rem] leading-[1.05] text-white uppercase lg:w-[60%] lg:p-[2rem] lg:text-[5rem] xl:mx-[17rem]">
        {data.title}
      </h1>
    </section>
  )
}
