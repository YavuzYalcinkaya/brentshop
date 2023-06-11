import { useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../../redux/cartSlice";

const CardComponent = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between my-10">
      <img className="w-[150px] h-[150px]" src={cart?.image} alt="" />
      <div className="w-[476px]">
        <h2 className="text-xl">{cart?.title}</h2>
        <p>{cart?.description}</p>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} $ ({cart?.quantity})
      </div>
      <button
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white px-10 py-5 cursor-pointer rounded-md flex items-center justify-center"
      >
        Remove Product
      </button>
      <button
        onClick={() => dispatch(clearCart(cart?.id))}
        className="bg-red-500 text-white px-10 py-5 cursor-pointer rounded-md flex items-center justify-center"
      >
        Remove All Product
      </button>
    </div>
  );
};

export default CardComponent;
