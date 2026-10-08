import Image from 'next/image'

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative w-full flex justify-start items-center">
      <picture className="absolute w-full h-full object-cover">
        <source srcSet="/desktop/image-hero.jpg" media="(min-width: 768px)" />
        <Image
          src="/mobile/image-hero.jpg"
          alt="Hero Image"
          width={750}
          height={1300}
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40"></div>
      <h1 className="text-[2.75rem] lg:text-[5rem] w-[90%] lg:w-[60%] max-w-[660px] leading-[1.05] border-white border-2 p-4 lg:p-[2rem] z-3 text-white font-header uppercase mx-6 my-[15rem] xl:mx-[17rem]">{data.title}</h1>
    </section>
  )
}
