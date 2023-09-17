import Back from "../components/turn-back/Back";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { removeFromFavorites } from "../redux/favoritesSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart } from "../redux/cartSlice";

const Favorites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`); // Ürün detay sayfasına yönlendirme
  };

  const addToBasket = (productDetail) => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
      })
    );
  };

  return (
    <>
      <Back />
      {favorites?.length > 0 ? (
        <div className="flex flex-wrap gap-5 justify-center xl:justify-start xl:max-w-[1200px] border-none xl:ml-24 mt-3">
          {favorites.map((favorite) => (
            <div
              key={favorite.id}
              className="relative flex flex-col justify-between px-4 py-2 w-[250px] rounded-lg border border-solid border-[#eaeaea] bg-white"
            >
              <div
                onClick={() => {
                  dispatch(removeFromFavorites(favorite?.id));
                }}
                className="absolute top-1 right-1 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer z-10 border border-solid border-gray-300"
              >
                <IoCloseOutline className="hover:text-red-500" />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className=" w-[150px] h-[200px] cursor-pointer"
                  src={favorite.image}
                  alt={favorite.title}
                  onClick={() => handleProductClick(favorite.id)}
                />
              </div>
              <div className=" flex flex-col mt-2 mb-2 gap-2">
                <h3 className="font-bold text-sm text-center  text-gray-700">
                  {/* {favorite.title.split(" ").length > 3
                    ? favorite.title.split(" ").slice(0, 3).join(" ") + "..."
                    : favorite.title} */}
                  {favorite.title}
                </h3>

                <div className=" text-red-500">
                  Rating : {favorite?.rating?.rate}
                </div>
                <div className=" text-red-500">
                  Count : {favorite?.rating?.count}
                </div>
                <div className="font-light text-base flex  items-center">
                  {favorite.price} <MdOutlineAttachMoney />
                </div>
                <button
                  onClick={() => addToBasket(favorite)}
                  className="gap-5 bg-red-500 hover:bg-[#ef5858] p-1 mt-1 border cursor-pointer rounded-md flex items-center justify-center"
                >
                  <AiOutlineShoppingCart className=" w-5 h-5 text-white" />
                  <span className="text-white">Add to Basket</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full mt-32">
          {" "}
          <h2 className="font-bold text-2xl xl:text-4xl">
            There is no favorites! Go to{" "}
            <Link className="text-red-500 underline underline-offset-8" to="/">
              home page
            </Link>
          </h2>
        </div>
      )}
    </>
  );
};

export default Favorites;
