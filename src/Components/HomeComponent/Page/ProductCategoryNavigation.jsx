import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useFilteredProduct from "../../../Hooks/useFilteredProduct";

function ProductCategortNavigation() {
  const { categoryData, selectedCategory, setSelectedCategory } =
    useFilteredProduct();

  return (
    <>
      <div className="swiper">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            200: { slidesPerView: 3 },
            320: { slidesPerView: 4 },
            720: { slidesPerView: 8 },
            1024: { slidesPerView: 10 },
          }}
          
        >
          {categoryData?.map((category, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <button
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProductCategortNavigation;
