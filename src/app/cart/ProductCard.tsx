import Link from "next/link";
import { CartItem } from "@/context/CartContext";
import CartProductDelete from "@/ui/CartComponents/CartProductDelete";
import QuantitySelect from "@/ui/CartComponents/QuantitySelect";

export default function ProductCard({ product }: { product: CartItem }) {
  return (
    <div className="card card-normal sm:card-side bg-base-100 shadow-2xl lg:px-8 ">
      <figure className="p-3">
        <Link href={`/product/${product.id}`} className="flex">
          <img
            src={product.image}
            alt={product.title}
            className="w-[300px] h-[200px] object-contain self-center"
          />
        </Link>
      </figure>
      <div className="flex flex-col justify-between p-3 w-full">
        <div className="flex flex-col">
          <CartProductDelete productId={product.id} />
          <Link href={`/product/${product.id}`} className="card-title">{product.title}</Link>
          <div className="join flex">
            <h3 className="join-item self-center text-lg mr-2">Quantity:</h3>
            <QuantitySelect product={product} />
          </div>
        </div>
        <h3 className="self-end text-2xl font-extrabold">Price: ${product.totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  )
}
