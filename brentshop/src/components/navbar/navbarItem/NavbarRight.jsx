import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="flex items-center gap-8">
      <div className="hidden lg:flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Search..."
        />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart
        onClick={() => navigate("/favorites")}
        size={28}
        className="cursor-pointer hover:text-red-500"
      />
      <div
        onClick={() => navigate("/checkout")}
        className="relative cursor-pointer"
      >
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex text-center item-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
