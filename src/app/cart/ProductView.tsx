"use client"

import { useCart } from "@/context/CartContext"
import ProductCard from "./ProductCard"

export default function ProductView() {
  const { cart } = useCart()

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
          <div className="divider" />
        </div>
      ))}
      {cart.length === 0 &&
        <>
          <div className="skeleton h-36 mb-5 w-full" />
          <div className="skeleton h-36 mb-5 w-full" />
          <div className="skeleton h-36 mb-5 w-full" />
        </>
      }
    </div>
  )
}
