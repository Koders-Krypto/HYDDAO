"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import SliderData from "./slider.json";
import Image from "next/image";

export default function Slider() {
  return (
    <Splide
      options={{
        rewind: true,
        perPage: 1,
        type: "fade",
        gap: "2rem",
        arrows: true,
        pagination: false,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1.5,
        },
      }}
      aria-label="Hyderabad DAO Event"
      extensions={{ AutoScroll }}
      className="flex items-center justify-center"
    >
      {SliderData.map((slide, i) => {
        return (
          <SplideSlide
            className="flex items-center justify-center aspect-video"
            key={i}
          >
            <Image
              className="object-cover shadow-sm rounded-xl"
              src={slide.image}
              alt="Hyderabad DAO"
              height={"550"}
              width={"550"}
            />
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
