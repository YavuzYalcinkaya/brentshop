import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";
import { useEffect } from "react";
import Loading from "../components/loading/Loading";
import Details from "../components/product-details/Details";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  return (
    <div>
      {productDetailStatus == "LOADING" ? (
        <Loading />
      ) : (
        <Details productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
