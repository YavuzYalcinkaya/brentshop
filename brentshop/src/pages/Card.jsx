import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../redux/cartSlice";
import CardComponent from "../components/card/Card";

const Card = () => {
  const dispatch = useDispatch();

  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, index) => (
            <CardComponent key={index} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl">
            TOTAL AMOUNT:{" "}
            <span className="font-bold ml-2"> {totalAmount} $</span>
          </div>
        </div>
      ) : (
        <div> Kartınız boş...</div>
      )}
    </div>
  );
};

export default Card;
