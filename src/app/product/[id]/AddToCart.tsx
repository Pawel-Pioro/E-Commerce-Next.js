"use client"

import { CartItem, useCart } from "@/context/CartContext";
import QuantitySelect from "@/ui/CartComponents/QuantitySelect";
import { productResponse } from "@/ui/CategoryComponents/CategorySlider";

export default function AddToCart({ product }: { product: productResponse }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const productInCart = cart.find((item: CartItem) => item.id === product.id)

  if (productInCart) {
    return (
      <div className="join w-full">
        <QuantitySelect product={productInCart} />
        <button onClick={() => removeFromCart(product.id)} className="join-item btn btn-primary btn-outline w-[calc(100%-73px)]">
          Remove from Cart
        </button>
      </div>
    )
  }
  else {
    return (
      <button onClick={() => addToCart(product)} className="btn btn-primary btn-block">
        Add to Cart
      </button>
    )
  }
}
