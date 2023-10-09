import { useShoppingCart } from "../context/ShoppingCartContext";


const CartBadge = () => {
  const {cartQuantity} = useShoppingCart();

  return (
    <div className={`absolute bg-red-600 text-white text-[14px] w-5 h-5 -right-3 -top-1 rounded-full flex justify-center content-center`}>
      {cartQuantity}
    </div>
  )
}

export default CartBadge