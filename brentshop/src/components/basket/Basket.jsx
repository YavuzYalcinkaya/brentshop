import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const Basket = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 my-10">
        <img className=" w-[30%] lg:w-[10%]" src={cart?.image} alt="" />
        <div className="text-center lg:text-start w-56">
          <h2 className="text-xl">{cart?.title}</h2>
        </div>

        <div className="font-bold text-center lg:text-start w-56 text-2xl">
          {cart?.price} $ ({cart?.quantity})
        </div>
        <button
          onClick={() => dispatch(removeFromCart(cart?.id))}
          className="bg-red-500 text-white px-7 py-3 cursor-pointer rounded-md flex items-center justify-center"
        >
          Remove Product
        </button>
      </div>
    </>
  );
};

export default Basket;
