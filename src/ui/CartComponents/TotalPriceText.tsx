"use client"

import { useCart } from "@/context/CartContext"

export default function TotalPriceText() {
  const { cart } = useCart()

  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0)

  return (
    <span>${totalPrice.toFixed(2)}</span>
  )
}
