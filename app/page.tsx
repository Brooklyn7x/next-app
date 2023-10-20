import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <div className=" text-black text-4xl">h1</div>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
