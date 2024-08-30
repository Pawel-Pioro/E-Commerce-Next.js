import { getProducts } from "@/libs/Categories"
import ProductCard from "../ProductComponents/SmallProductCard"
import Link from "next/link"

export type productResponse = {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  category: string,
  rating: {
    rate: number,
    count: number
  }
}

export default async function CategoryItem({ category }: { category: string }) {
  const products: [productResponse] = await getProducts(category, 5)

  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <Link href={`/category/${category}`} className="text-md link ">See all</Link>
      </div>
      <div className="flex flex-nowrap overflow-y-hidden overflox-x-auto">
        {products.map((product, i) => (
          <ProductCard key={i} product={product}/>
        ))}
      </div>
    </div>
  )
}
