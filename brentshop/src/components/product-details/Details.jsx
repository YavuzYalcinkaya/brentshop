const Details = ({ productDetail }) => {
  return (
    <div className="flex gap-10 m-20">
      <img className="w-[700px] h-[500px]" src={productDetail?.image} alt="" />
      <div className="flex flex-col justify-center items-start mt-12">
        <h2 className="text-4xl font-bold">{productDetail?.title}</h2>
        <p className="my-2 text-xl">{productDetail?.description}</p>
        <div className="my-2 text-xl text-red-500">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price} <span className="text-sm">$</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div className="text-5xl cursor-pointer">-</div>
          <input
            className="w-5 text-center text-4xl font-bold"
            value="0"
            type="text"
          />
          <div className="text-4xl cursor-pointer">+</div>
        </div>
        <div className="my-4 border px-5 py-5 text-2xl rounded-md bg-gray-200 cursor-pointer flex items-center justify-center">
          Add to Basket
        </div>
      </div>
    </div>
  );
};

export default Details;
