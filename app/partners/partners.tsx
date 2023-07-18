"use client";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import PartnerData from "./partners.json";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="flex flex-col items-center justify-center gap-0 pt-8">
      <h3 className="pb-4 text-3xl text-center">
        Our <strong>Partners</strong> 🫶
      </h3>
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          style={{ paddingBottom: "3rem" }}
          slidesPerView={1}
          modules={[Autoplay]}
        >
          {PartnerData.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center justify-center aspect-video">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height="100"
                    width="150"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
