import CartProduct from './CartProduct';
import { useCartContext } from '../context/CartContext';
import { FaX } from 'react-icons/fa6';

const Cart = ({ setShowCart }: any) => {
  const { product } = useCartContext();

  return (
    <div
      className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
      onClick={() => setShowCart(false)}>
      <div
        className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6 overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}>
        <FaX
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}></FaX>
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>
        <div className="mt-6">
          {product?.map((el: any) => (
            <CartProduct
              key={el.name}
              img={el.img}
              name={el.name}
              price={el.price}
            />
          ))}
        </div>
        <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mb-4 mt-4">
          View Cart
        </button>
        <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
