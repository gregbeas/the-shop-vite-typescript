import { FaShoppingBasket } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

interface propsType {
  img: any;
  name: string;
  price: string
}

const ProductCard: React.FC<propsType> = ({img, name, price}) => {

  const { addToCart } = useCartContext();

  const addProductToCart = () => {
    addToCart({img, name, price});
  }

  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
      <img className="rounded-t-lg" src={img} alt={name} />
      <button onClick={addProductToCart} className=" border border-accentDark absolute right-4 top-2 bg-white text-accentDark text-[28px] w-[55px] h-[55px] rounded-full flex justify-center items-center cursor-pointer gap-[2px] hover:text-white hover:bg-accentDark transition">
          + <FaShoppingBasket />
        </button>
      <div className="space-y-2 relative p-4">
        <h3 className="text-2xl font-medium text-accentDarker">{name}</h3>
        <p className="text-2x font-medium text-accent">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard