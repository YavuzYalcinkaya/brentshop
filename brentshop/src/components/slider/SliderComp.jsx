import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { products } from "../../data";

const SliderComp = () => {
  return (
    <section className="max-w-[300px] md:max-w-[670px] xl:max-w-7xl mx-auto">
      <div className="!flex  items-center bg-gray-100 p-4 xl:px-6">
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView="1"
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex flex-col md:flex-row items-center bg-gray-100 md:p-8 xl:px-6">
                <div className="flex flex-col text-center lg:text-start p-2 md:w-1/2">
                  <h2 className="font-extrabold text-center text-3xl xl:text-6xl">
                    Best Shoes
                  </h2>
                  <p className="text-lg my-4 text-center">{product.desc}</p>
                  <div>
                    <button className="border rounded-full cursor pointer text-2xl px-12 py-4 items-center justify-center bg-gray-200">
                      Review
                    </button>
                  </div>
                </div>
                <img
                  src={product.url}
                  alt=""
                  className="mt-4 md:mt-0 md:w-1/2 md:ml-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderComp;
