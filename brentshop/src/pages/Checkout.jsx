import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash3 } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { getCartTotal, clearCart } from "../redux/cartSlice";
import Basket from "../components/basket/Basket";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = ({ cart, productDetail }) => {
  const dispatch = useDispatch();

  const { carts, totalAmount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const showToastMessage = () => {
    toast.error("Product have been removed your basket!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="overflow-y-scroll max-h-[calc(100vh-100px)]">
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

      {carts.length > 0 && (
        <div className=" flex justify-between bg-gray-200 p-3 items-center text-red-500 ">
          <div className="flex gap-2 items-center cursor-pointer font-bold lg:ml-10 hover:opacity-80">
            <AiFillPlusCircle className="w-5 h-5" />
            <span>Add Coupon</span>
          </div>
          <div
            onClick={() => {
              dispatch(clearCart(cart?.id));
              dispatch(getCartTotal());
              showToastMessage();
            }}
            className="flex  gap-2 text-red-500 hover:opacity-80 font-bold items-center cursor-pointer lg:mr-10"
          >
            Remove All Product
            <BsTrash3 />
          </div>
        </div>
      )}
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, index) => (
            <Basket key={index} cart={cart} productDetail={productDetail} />
          ))}
          <div className="sticky lg:absolute bottom-0 z-20 flex justify-between items-center gap-3 p-5 lg:justify-end lg:mr-10 lg:text-2xl w-full bg-slate-100">
            <div className="font-semibold flex items-center ml-2">
              {" "}
              {totalAmount.toFixed(2)} <BsCurrencyDollar />{" "}
            </div>
            <button className="bg-red-500 hover:bg-[#ef5858] p-2 border cursor-pointer rounded-md flex items-center justify-center text-white text-base">
              Complete The Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full mt-32">
          {" "}
          <h2 className="font-bold text-lg lg:text-2xl xl:text-4xl">
            There is no product in basket
          </h2>
        </div>
      )}
    </div>
  );
};

export default Checkout;
