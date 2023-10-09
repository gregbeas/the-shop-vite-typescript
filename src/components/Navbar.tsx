import { FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";
import { FaUserAlt, FaShoppingBag } from "react-icons/fa";
import CartBadge from "./CartBadge";

const Navbar = ({setShowCart}: any) => {
  return <nav className="fixed w-full top-0 bg-accentLight z-10">
    <div className="hidden lg:block">
      <div className="flex justify-between items-center p-8">
        <a href="#hero"><h1 className="text-4xl text-accentDark font-medium flex gap-5 cursor-pointer"><FaShoppingBag /> The Shop</h1></a>
        <div className="relative w-full max-w-[500px]">
          <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Products..."
          className="bg-inputBgGray border-none outline-none px-6 py-3 rounded-[30px] w-full text-accentDark font-semibold"
          />
          <label htmlFor="search"><FaMagnifyingGlass size={20} aria-label="search products" className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-accentDarker" /></label>
        </div>
        <div className="flex gap-4">
          <div className="icon-wrapper text-[25px] cursor-pointer hover:scale-105 transition-transform">
            <FaUserAlt />
          </div>
          <div className="icon-wrapper relative text-[25px] cursor-pointer hover:scale-105 transition-transform" onClick={() => setShowCart(true)}>
            <FaCartShopping />
            <CartBadge />
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar