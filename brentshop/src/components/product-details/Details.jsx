import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import Back from "../turn-back/Back";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favoritesSlice";
import { useNavigate } from "react-router-dom";

const Details = ({ productDetail }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan favori durumunu al
    checkIdInArray(favorites, productDetail.id);
    const favoriteStatus = favorites
      .map((item) => item.id)
      .includes(productDetail.id);
    setIsFavorite(favoriteStatus);
  }, [favorites, productDetail.id]);
  useEffect(() => {
    console.log("favorites detail", favorites);
  });

  const checkIdInArray = (itemArray, targetId) => {
    const result = itemArray.map((item) => item.id).includes(targetId);
    console.log("result", result);
  };

  const handleIconClick = () => {
    setIsFavorite((prevState) => !prevState);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
    localStorage.setItem(`favorite_${productDetail.id}`, !isFavorite);
    if (isFavorite) {
      dispatch(removeFromFavorites(productDetail.id));
      // setFavorites((prevFavorites) =>
      //   prevFavorites.filter((id) => id !== productDetail.id)
      // );
    } else {
      dispatch(addToFavorites(productDetail));

      // setFavorites((prevFavorites) => [...prevFavorites, productDetail.id]);
    }
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
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
    showToastMessageAddedBasket();
  };

  const showToastMessageAddedBasket = () => {
    toast.success(
      <div className="p-2 mt-4">
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
      }
    );
  };

  return (
    <div className="overflow-y-scroll max-h-[calc(100vh-100px)]">
      <div className="mb-10 lg:mb-0">
        <Back />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName={"bg-green-50 font-bold ml-20 xl:ml-0 w-80"}
      />

      <div className="flex flex-col justify-center items-center xl:flex-row gap-5 lg:m-20">
        <img className="w-[30%] xl:w-3/12" src={productDetail?.image} alt="" />

        <div className="flex flex-col justify-center items-start lg:mt-12 xl:text-start">
          <div className="flex flex-col justify-center  items-center xl:items-start">
            <h2 className="text-2xl lg:text-4xl text-[#484848] text-center font-extrabold">
              {productDetail?.title}
            </h2>
            <p className="my-2 px-2 mt-4 text-base md:text-xl">
              {productDetail?.description}
            </p>
            <div className="flex flex-row gap-3 lg:gap-0 text-base md:flex-col md:text-xl md:ml-4">
              <div className="my-2 text-red-500">
                Rating : {productDetail?.rating?.rate}
              </div>

              <div className="my-2 text-red-500">
                Count : {productDetail?.rating?.count}
              </div>
            </div>

            <div className="flex items-center h-12  border border-solid border-[#DADADA] rounded-3xl">
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
            <div className="sticky bottom-0 z-20 bg-slate-100 lg:bg-white p-3 lg:p-0 flex flex-row xl:flex-col justify-between xl:justify-center items-center xl:items-start w-full mt-3 xl:relative">
              <div className="text-lg lg:text-3xl font-bold flex justify-center items-center ml-2">
                {productDetail?.price} <MdOutlineAttachMoney />
              </div>
              <div className="flex items-center lg:flex-row gap-4 lg:mt-4">
                <div className="relative">
                  <div
                    className="border border-solid border-gray-300 rounded-full cursor-pointer w-12 h-12 flex justify-center items-center hover:relative"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onClick={handleIconClick}
                  >
                    {isFavorite ? (
                      <AiFillHeart className=" text-red-500" size={25} />
                    ) : (
                      <AiOutlineHeart
                        className=" hover:text-red-500"
                        size={25}
                      />
                    )}
                    {showTooltip && (
                      <div className="absolute top-0 left-2 -mt-10  bg-slate-50 w-28 text-xs border border-solid border-gray-300 text-black  py-3 text-center rounded">
                        {isFavorite ? "Added favorites" : "Add favorite"}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={addToBasket}
                  className="gap-2 bg-red-500 hover:bg-[#ef5858] p-3 border cursor-pointer rounded-md flex items-center justify-center"
                >
                  <AiOutlineShoppingCart className=" w-6 h-6 text-white" />
                  <span className="lg:text-xl text-white">Add to Basket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
