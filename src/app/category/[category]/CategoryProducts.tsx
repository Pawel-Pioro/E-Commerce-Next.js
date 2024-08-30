import LargeProductCard from "../../../ui/ProductComponents/LargeProductCard"
import { productResponse } from "../../../ui/CategoryComponents/CategorySlider"

export default function CategoryProducts({ products }: { products: [productResponse] }) {
  return (
    <div>
      {products.map((product: productResponse, i) => (
        <div key={i}>
          <LargeProductCard product={product} />
          <div className="divider"></div>
        </div>
      ))}
    </div>
  )
}
