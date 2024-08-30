import Link from "next/link";
import CategoryLinks from "./CategoryComponents/CategoryLinks";
import MyCartButton from "./CartComponents/MyCartButton";

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 backdrop-blur-lg bg-base-200/50 z-[1]">
      <div className="navbar-start">
        {/* Mobile Navbar */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-slate-300 [&_li>*:not(ul):not(.menu-title):not(details):active]:text-black">
            <li>
              <h2 className="menu-title">Categories</h2>
              <ul className="p-2">
                <CategoryLinks />
              </ul>
            </li>
          </ul>
        </div>
        {/* End of Mobile Navbar */}
        <Link href="/" className="btn btn-ghost text-xl">E-commerce Site</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-slate-300 [&_li>*:not(ul):not(.menu-title):not(details):active]:text-black">
          <CategoryLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <MyCartButton />
      </div>
    </div>
  )
}
