import { FaTrashAlt } from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContext';
import bakeItems from "../data/bake-items.json"
import produceItems from "../data/produce-items.json"

type CartItemProps ={
  id: number
  quantity: number
}

const CartProduct = ({id, quantity}: CartItemProps) => {
  const {removeFromCart, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart();
  const storeItems = [...bakeItems, ...produceItems];
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null


  return (
    <div className="flex justify-between items-center mt-1">
      <div className="flex items-center gap-4">
        <img className='h-[125px] w-[75px] object-cover' src={item.img} alt={item.name} />
        <div>
          <h3 className='font-medium'>{item.name}</h3>
          <p className='text-gray-600'>${item.price}</p>
          <div className='flex gap-2 justify-between px-1'>
            <button onClick={() => decreaseCartQuantity(item.id)} className='bg-accent w-6 h-6 flex justify-center items-center rounded-full text-white hover:bg-accentDark'>-</button>
            {quantity}
            <button onClick={() => increaseCartQuantity(item.id)} className='bg-accent w-6 h-6 flex justify-center items-center rounded-full text-white hover:bg-accentDark'>+</button>
          </div>
        </div>
      </div>
      <div className='flex  items-center gap-2'>
        <p>${quantity * item.price}</p>
        <FaTrashAlt onClick={() =>removeFromCart(item.id)} className="cursor-pointer hover:text-red-500 transition-text"/>
      </div>
    </div>

  );
};

export default CartProduct;
