import { getProductById } from "@/libs/Categories"
import { productResponse } from "@/ui/CategoryComponents/CategorySlider"
import { notFound } from "next/navigation"
import ProductView from "./ProductView"

export default async function ProductPage({ params }: { params: { id: number } }) {
  const id = params.id

  const product: productResponse = await getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="">
      <ProductView product={product} />
    </div>
  )
}
