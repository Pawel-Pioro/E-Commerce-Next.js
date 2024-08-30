"use client"

import { useCart } from "@/context/CartContext"
import { productResponse } from "@/ui/CategoryComponents/CategorySlider"

export default function PriceText({ product }: { product: productResponse }) {
  const { cart } = useCart()

  const productInCart = cart.find((item) => item.id === product.id)
  const totalPrice = productInCart ? productInCart.totalPrice : product.price


  return (
    <span>${totalPrice.toFixed(2)}</span>
  )
}