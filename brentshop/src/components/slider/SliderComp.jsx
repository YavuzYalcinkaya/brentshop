import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <h2 className="font-bold text-6xl">Best Shoes</h2>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              delectus, ex, facere maiores deleniti commodi harum inventore,
              nesciunt totam consequatur praesentium ipsam ab eum quis. Enim
              doloribus id, ipsum dicta repellat odit autem ipsa suscipit sunt.
              Minima non ea inventore.
            </p>
            <button className="border rounded-full cursor pointer text-2xl px-12 py-4 items-center justify-center bg-gray-200">
              Review
            </button>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png"
            alt=""
          />
        </div>

        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <h2 className="font-bold text-6xl">Best Shoes</h2>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              delectus, ex, facere maiores deleniti commodi harum inventore,
              nesciunt totam consequatur praesentium ipsam ab eum quis. Enim
              doloribus id, ipsum dicta repellat odit autem ipsa suscipit sunt.
              Minima non ea inventore.
            </p>
            <button className="border rounded-full cursor pointer text-2xl px-12 py-4 items-center justify-center bg-gray-200">
              Review
            </button>
          </div>

          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86bd5c45-c3e3-4828-803f-4e683e0f143a/air-force-1-07-ayakkab%C4%B1s%C4%B1-GjSxBZ.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <h2 className="font-bold text-6xl">Best Shoes</h2>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              delectus, ex, facere maiores deleniti commodi harum inventore,
              nesciunt totam consequatur praesentium ipsam ab eum quis. Enim
              doloribus id, ipsum dicta repellat odit autem ipsa suscipit sunt.
              Minima non ea inventore.
            </p>
            <button className="border rounded-full cursor pointer text-2xl px-12 py-4 items-center justify-center bg-gray-200">
              Review
            </button>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9ae01de6-ee79-4c3e-8814-731e5230ce4c/air-force-1-next-nature-gen%C3%A7-ayakkab%C4%B1s%C4%B1-tQbPP6.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
