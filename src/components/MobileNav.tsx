import { FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";
import { FaUserAlt, FaShoppingBag } from "react-icons/fa";
import CartBadge from "./CartBadge";

const MobileNav = ({setShowCart}: any) => {
  return <nav className="fixed w-full top-0 bg-accentLight z-10">
    <div className=" mx-[15px] lg:hidden ">
      <div className="flex justify-between items-center text-[28px] py-2">
        <div className="flex items-center gap-4 hover:scale-105 transition-transform">
          <FaMagnifyingGlass size={20} className="text-white cursor-pointer" />
        </div>
        <a href="#hero"><h1 className="text-2xl text-accentDarker font-medium flex gap-3 items-center cursor-pointer" ><FaShoppingBag size={35}/> The Shop</h1></a>
        <div className="flex gap-4">
          <div className="icon-wrapper text-[16px] cursor-pointer hover:scale-105 transition-transform">
            <FaUserAlt />
          </div>
          <div className="icon-wrapper relative text-[16px] cursor-pointer hover:scale-105 transition-transform" onClick={() => setShowCart(true)}>
            <FaCartShopping />
            <CartBadge />
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default MobileNav;