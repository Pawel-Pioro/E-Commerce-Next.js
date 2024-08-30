import Link from "next/link"
import { productResponse } from "../CategoryComponents/CategorySlider"

export default function ProductCard({ product }: { product: productResponse }) {
  return (
    <Link href={`/product/${product.id}`} className="m-3 card card-compact card-side bg-base-100 shadow-2xl ">
      <figure>
        <img
          src={product.image}
          alt={product.title}
          className="w-[400px] h-[200px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-sm">{product.description.substring(0, 100)}...</p>
      </div>
    </Link>
  )
}
