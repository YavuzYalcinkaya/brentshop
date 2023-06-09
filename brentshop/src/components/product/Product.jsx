const Product = ({ product }) => {
  return (
    <div className="w-[430px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer">
      <div className="text-3xl absolute font-bold top-0 right-0 bg-black text-white p-2 m-1">
        {product?.price} <span className="text-sm">$</span>
      </div>
      <img
        className="object-cover m-auto w-[200px] h-[200px]"
        src={product?.image}
        alt=""
      />
      <h4 className="text-center px-3 mt-3 text-xl font-bold">
        {product?.title}
      </h4>
    </div>
  );
};

export default Product;
