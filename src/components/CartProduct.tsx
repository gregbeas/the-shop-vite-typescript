import { FaTrashAlt } from 'react-icons/fa';

interface propsType {
  img: string;
  name: string;
  price: string;
}

const CartProduct: React.FC<propsType> = ({ img, name, price }) => {
  return (
    <div className="flex justify-between items-center mt-1">
      <div className="flex items-center gap-4">
        <img className="h-[100px]" src={img} alt={name} />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600">1 x {price}</p>
        </div>
      </div>
      <FaTrashAlt className="cursor-pointer hover:text-red-500 transition-text" />
    </div>
  );
};

export default CartProduct;
