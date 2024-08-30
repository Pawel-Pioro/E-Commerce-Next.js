import Categories from "@/ui/CategoryComponents/AllCategories";

export default function Home() {
  return (
    <div className="pt-5">
      <h1 className="text-center text-3xl md:text-4xl font-bold">My E-Commerce Site</h1>
      <Categories />
    </div>
  );
}
