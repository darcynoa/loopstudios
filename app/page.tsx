import Hero from '@/components/home/Hero'
import { data } from '@/data'

export default function Home() {
  return (
    <div>
      <Hero data={data.hero} />
    </div>
  )
}
