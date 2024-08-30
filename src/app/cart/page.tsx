import CartSummary from "./CartSummary";
import ProductView from "./ProductView";

export default function Cart() {
  return (
    <div className="pt-5">
      <h1 className="text-center text-3xl font-bold mb-3">My Cart</h1>
      <div className="grid grid-cols-12 gap-4">
        <section className="col-span-12 lg:col-span-8">
          <ProductView />
        </section>
        <section className="col-span-12 lg:col-span-4">
          <CartSummary />
        </section>
      </div>
    </div>
  )
}
