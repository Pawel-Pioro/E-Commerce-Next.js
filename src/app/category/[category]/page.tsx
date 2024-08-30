import { getProducts } from "@/libs/Categories"
import { notFound } from "next/navigation"
import CategoryProducts from "@/app/category/[category]/CategoryProducts"
import { productResponse } from "@/ui/CategoryComponents/CategorySlider"
import { CATEGORIES } from "@/ui/CategoryComponents/AllCategories"

function isCategoryValid(category: string) {
  const validCategories = CATEGORIES

  category = category.replace('%20', ' ')

  if (validCategories.includes(category)) {
    return true
  }
  else {
    return false
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category

  if (!isCategoryValid(category)) {
    notFound()
  }

  const products: [productResponse] = await getProducts(category)

  return (
    <div className="py-5">
      <h1 className="text-3xl font-bold text-center pb-10">{category.charAt(0).toUpperCase() + category.slice(1).replace('%20', ' ')}</h1>
      <CategoryProducts products={products} />
    </div>
  )
}
