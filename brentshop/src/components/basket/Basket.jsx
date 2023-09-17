import { useDispatch } from "react-redux";
import { removeFromCart, getCartTotal } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCurrencyDollar } from "react-icons/bs";

const Basket = ({ cart }) => {
  const dispatch = useDispatch();

  const showToastMessage = () => {
    toast.error("Product have been removed your basket!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastClassName={"bg-red-50 font-bold w-80"}
        />
      </div>
      <div className="mt-3 flex flex-col lg:flex-row items-center gap-6 p-4 shadow-lg w-full">
        <div className="flex items-center gap-8">
          <img
            className="w-[20%] lg:w-[15%] ml-5 object-contain"
            src={cart?.image}
            alt=""
          />
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-xs md:text-lg">{cart?.title}</h2>
            <button
              onClick={() => {
                dispatch(removeFromCart(cart?.id));
                dispatch(getCartTotal());
                showToastMessage();
              }}
              className="bg-red-500 hover:bg-red-400 text-white text-sm p-2 cursor-pointer rounded-md flex items-center justify-center"
            >
              Remove Product
            </button>
          </div>
        </div>

        <div className="font-bold text-lg w-full flex items-center justify-end">
          {cart?.price} <BsCurrencyDollar /> ({cart?.quantity})
        </div>
      </div>
    </div>
  );
};

export default Basket;
