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
      <div className="w-full">
        <Splide
          options={{
            type: "loop",
            gap: "2rem",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 3,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1.5,
            },
            focus: "center",
          }}
          extensions={{ AutoScroll }}
          className="flex items-center justify-center h-24 min-w-full px-6 md:px-12"
        >
          {PartnerData.map((item, i) => {
            return (
              <SplideSlide className="overflow-hidden" key={i}>
                <div className="flex items-center justify-center w-full h-56 md:w-56">
                  <Image
                    className="object-fill"
                    src={item.image}
                    loading="lazy"
                    alt={item.name}
                    width={180}
                    height={180}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}
