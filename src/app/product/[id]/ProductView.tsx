import { productResponse } from "@/ui/CategoryComponents/CategorySlider";
import AddToCart from "./AddToCart";
import PriceText from "./PriceText";

export default function ProductView({ product }: { product: productResponse }) {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-10 gap-10">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-xs "
      />
      <div>
        <h1 className="text-3xl font-bold ">{product.title}</h1>
        <div className="badge my-2">{product.category}</div>
        <p className="flex">
          <span className="text-md font-bold pr-1">{product.rating.rate.toFixed(1)}</span>
          {[...Array(Math.round(product.rating.rate))].map((v, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-yellow-400">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>

          ))}
          {[...Array(5 - Math.round(product.rating.rate))].map((v, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          ))}
          <span className="ml-1">({product.rating.count} ratings)</span>
        </p>

        <div className="divider" />

        <div className="flex mb-5">
          <h2 className="text-4xl font-bold"><PriceText product={product}/></h2>
        </div>

        <AddToCart product={product} />

        <div className="divider" />

        <p className="py-6">{product.description}</p>
      </div>
    </div>
  )
}
