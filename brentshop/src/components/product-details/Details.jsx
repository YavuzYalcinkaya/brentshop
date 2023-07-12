import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import Back from "../turn-back/Back";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Details = ({ productDetail }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addToBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
    showToastMessage();
  };

  const showToastMessage = () => {
    toast.success(
      <div className="p-2">
        Product added to your basket!
        <div className="">
          <span
            onClick={() => {
              navigate("/checkout");
            }}
            className=" text-green-600 hover:text-green-500"
          >
            Go to Basket
          </span>
        </div>
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "basket-toast",
      }
    );
  };

  return (
    <>
      <div className="mb-10 lg:mb-0">
        <Back />
      </div>
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
          toastClassName={"bg-green-50 font-bold w-80"}
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-10 lg:m-20">
        <img className="w-[50%] lg:w-3/12" src={productDetail?.image} alt="" />
        <div className="flex flex-col justify-center items-start lg:mt-12 text-center xl:text-start">
          <div className="flex flex-col justify-center  items-center xl:items-start">
            <h2 className="text-4xl font-extrabold">{productDetail?.title}</h2>
            <p className="my-2 text-xl">{productDetail?.description}</p>
            <div className="my-2 text-xl text-red-500">
              Rating : {productDetail?.rating?.rate}
            </div>
            <div className="my-2 text-xl text-red-500">
              Count : {productDetail?.rating?.count}
            </div>
            <div className="text-2xl font-bold flex justify-center items-center">
              {productDetail?.price} <MdOutlineAttachMoney />
            </div>
            <div className="flex  items-center h-12 mt-4  border border-solid border-[#DADADA] rounded-3xl">
              <div className="p-2 hover:bg-zinc-200 rounded-full">
                <AiOutlineMinus
                  onClick={decrement}
                  className="cursor-pointer w-6 h-6 "
                />
              </div>

              <input
                className="w-14 text-center text-xl font-bold outline-none"
                value={quantity}
                onChange={addToBasket}
                type="text"
              />
              <div className="p-2 hover:bg-zinc-200 rounded-full">
                <AiOutlinePlus
                  onClick={increment}
                  className="cursor-pointer w-6 h-6"
                />
              </div>
            </div>
            <button
              onClick={addToBasket}
              className="gap-5 bg-red-500 hover:bg-[#ef5858] p-3 mt-4 border cursor-pointer rounded-md flex items-center justify-center"
            >
              <AiOutlineShoppingCart className=" w-6 h-6 text-white" />
              <span className="text-xl text-white">Add to Basket</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
