"use client"

import { CartItem, useCart } from "@/context/CartContext"

export default function QuantitySelect({ product}: { product: CartItem }) {
  const { updateProductQuantity } = useCart()
  
  const quantity = product.quantity

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = parseInt(event.target.value)

    updateProductQuantity(product.id, quantity)
  }

  return (
    <select defaultValue={quantity} onChange={handleQuantityChange} className="select select-bordered join-item max-w-xs">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
        <option key={quantity} value={quantity}>{quantity}</option>
      ))}
    </select>
  )
}
