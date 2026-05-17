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
      <div className="category-nav-wrapper">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 4 },
            480: { slidesPerView: 5 },
            768: { slidesPerView: 7 },
            1024: { slidesPerView: 9 },
            1280: { slidesPerView: 11 },
          }}
        >
          {categoryData?.map((category, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <button
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "active" : ""}
                id=""
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
