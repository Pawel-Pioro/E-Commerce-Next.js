"use client"

import { productResponse } from '@/ui/CategoryComponents/CategorySlider';
import { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
  id: number
  quantity: number
  title: string
  price: number
  totalPrice: number
  image: string
}

interface CartContextInterface {
  cart: CartItem[]
  updateProductQuantity: (productId: number, quantity: number) => void
  addToCart: (product: productResponse) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextInterface>({} as CartContextInterface);

export const useCart = () => useContext(CartContext);

const defaultCart: [] = []

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState(defaultCart as CartItem[]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart !== defaultCart)
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: productResponse) => {
    const productCartItem: CartItem = {
      id: product.id,
      quantity: 1,
      price: product.price,
      title: product.title,
      totalPrice: product.price,
      image: product.image
    }

    setCart((prevCart) => {
      const updatedCart = [...prevCart, productCartItem];
      return updatedCart;
    });
  };
  
  const updateProductQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity, totalPrice: product.price * quantity };
        }
        return product;
      });
      return updatedCart;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, updateProductQuantity, removeFromCart, clearCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}