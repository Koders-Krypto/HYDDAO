"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import PartnerData from "./partners.json";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="flex flex-col items-center justify-center gap-0 pt-8">
      <h3 className="pb-4 text-3xl text-center">
        Our <strong>Partners</strong> 🫶
      </h3>
      <div className="w-full px-6 md:px-12">
        <Splide
          options={{
            type: "loop",
            rewind: false,
            perPage: 5,
            perMove: 5,
            gap: 20,
            padding: "3rem",
            pagination: false,
            arrows: false,

            breakpoints: {
              623: {
                perPage: 2,
                perMove: 2,
              },
              935: {
                perPage: 3,
                perMove: 3,
              },
              1247: {
                perPage: 4,
                perMove: 4,
              },
            },
          }}
          extensions={{ AutoScroll }}
          className="flex items-center justify-center h-24"
        >
          {PartnerData.map((item, i) => {
            return (
              <SplideSlide className="flex items-center justify-center" key={i}>
                <img
                  src={item.image}
                  loading="lazy"
                  alt={item.name}
                  width={180}
                  height={180}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}
