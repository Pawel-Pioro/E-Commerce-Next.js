import TotalPriceText from "../../ui/CartComponents/TotalPriceText";

export default function CartSummary() {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Cart Summary</h2>
          <h3 className="text-2xl font-extrabold">Total Price: <TotalPriceText /></h3>
          <button className="btn btn-primary btn-full">Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}
