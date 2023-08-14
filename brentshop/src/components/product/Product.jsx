import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate(`products/${product?.id}`)}
        className="flex flex-col items-center justify-center p-3 mb-5 border-2 border-solid h-[275px] w-[500px]  xl:h-96 xl:w-[400px] rounded-md relative cursor-pointer "
      >
        <div className="text-sm xl:text-2xl absolute font-bold top-0 right-0 bg-black text-white p-1 border rounded-l-xl">
          {product?.price} <span className="">$</span>
        </div>

        <img
          className={`object-contain w-7/12 h-5/6 xl:w-7/12 xl:h-4/6 ${
            isHovered ? "opacity-40" : ""
          }`}
          src={product?.image}
          alt=""
        />

        <h4 className="text-center px-3 lg:mt-3 text-sm lg:text-xl font-bold">
          {product?.title}
        </h4>
        <div className="absolute top-0 right-0 left-0 bottom-40 flex items-end justify-center">
          {isHovered && (
            <button
              className="rounded-xl p-3 bg-black text-white mt-3"
              onClick={() => navigate(`products/${product?.id}`)}
            >
              Go to Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
