import Image from 'next/image'

export default function Hero() {
  return (
    <section>
      <picture>
        <source srcSet="/desktop/image-hero.jpg" media="(min-width: 768px)" />
        <Image
          src="/mobile/image-hero.jpg"
          alt="Hero Image"
          width={750}
          height={1300}
        />
      </picture>
    </section>
  )
}
