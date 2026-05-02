import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import useProductStore from "../../../store/useProductStore";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { product } = useProductStore();

  return (
    <>
      <div id="product-swiper">
        <div className="swiper1">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            // loop={true}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {product?.images?.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="productImage">
                  <img src={img} alt={product.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper2">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {product?.images?.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="productImage">
                  <img src={img} alt={product.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
