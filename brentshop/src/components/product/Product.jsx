import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Product = ({ product, productDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const addToBasket = () => {
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
    <div className="flex justify-center items-center">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate(`products/${product?.id}`)}
        className="flex flex-col items-center justify-center p-3 mb-5 mx-5 border-2 border-solid h-80 w-[400px] rounded-md relative cursor-pointer"
      >
        <div className="text-2xl absolute font-bold top-0 right-0 bg-black text-white p-1">
          {product?.price} <span className="">$</span>
        </div>
        <img
          className={`object-contain m-auto w-7/12 h-4/6 ${
            isHovered ? "opacity-50" : ""
          }`}
          src={product?.image}
          alt=""
        />
        {isHovered && (
          <button
            className="rounded-xl p-2 bg-black text-white mt-3"
            onClick={addToBasket}
          >
            Add to Basket
          </button>
        )}
        <h4 className="text-center px-3 mt-3 text-xl font-bold">
          {product?.title}
        </h4>
      </div>
    </div>
  );
};

export default Product;
