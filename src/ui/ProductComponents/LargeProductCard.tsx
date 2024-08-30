import Link from "next/link";
import { productResponse } from "../CategoryComponents/CategorySlider";

export default function LargeProductCard({ product }: { product: productResponse }) {
  return (
    <div className="card card-normal md:card-side bg-base-100 shadow-2xl lg:px-16 ">
      <figure className="p-3">
        <Link href={`/product/${product.id}`} className="flex">
          <img
            src={product.image}
            alt={product.title}
            className="w-[300px] h-[200px] object-contain self-center"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.id}`} className="card-title">{product.title}</Link>
        <h3 className="text-2xl font-extrabold">${product.price.toFixed(2)}</h3>
        <p>{product.description.substring(0, 150)}...</p>
      </div>
    </div>
  )
}
