import CategoryItem from "./CategorySlider"

export const CATEGORIES = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
]

export default function Categories() {
  return (
    <div>
      {CATEGORIES.map((category, index) => (
        <CategoryItem key={category} category={category} />
      ))}
    </div>
  )
}
