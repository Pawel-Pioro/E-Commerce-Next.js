import Link from "next/link";

export default function CategoryLinks() {
  return (
    <>
      <li><Link href={`/category/electronics`}>Electronics</Link></li>
      <li><Link href={`/category/jewelery`}>Jewelery</Link></li>
      <li><Link href={`/category/men's clothing`}>Men's Clothing</Link></li>
      <li><Link href={`/category/women's clothing`}>Women's Clothing</Link></li>
    </>
  )
}
