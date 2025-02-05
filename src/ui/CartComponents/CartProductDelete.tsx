"use client"

import { useCart } from "@/context/CartContext";

export default function CartProductDelete({ productId }: { productId: number }) {
  const {removeFromCart} = useCart();
  
  return (
    <button onClick={() => removeFromCart(productId)} className="btn btn-circle btn-sm self-end" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="red">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button >
  )
}
