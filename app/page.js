import Image from "next/image";
import Event from "./event";
import Footer from "./footer";
import Social from "./social";
export default function Home() {
  return (
    <>
      <div className="flex items-start justify-center min-h-screen bg-no-repeat bg-cover background">
        <div className="flex flex-col h-[100vh] justify-evenly md:justify-between items-center layer space-y-8 py-20 px-4">
          <div className="shadow-xl rounded-full bg-white p-[1px]">
            <div className="relative w-40 h-40 md:w-64 md:h-64">
              <Image src={"/logo.png"} alt="logo" fill />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl text-center text-white font-bold uppercase w-full md:w-3/4 px-8">
            Largest Web3 community in Hyderabad
          </h1>
          <ul className="flex flex-wrap justify-center items-center text-white space-x-8 text-base md:text-2xl uppercase">
            <l1>Builders</l1>
            <l1>|</l1>
            <l1>Founders</l1>
            <l1>|</l1>
            <l1>Artists</l1>
            <l1>|</l1>
            <l1>& More</l1>
          </ul>
          <h2 className="flex flex-col text-center text-white text-xl md:text-2xl">
            Let{"'"}s make Hyderabad Web3 capital of India
            <span className="pt-6"> #WAGBI 🚀</span>
          </h2>

          <a href="#events">
            <div className="border-[1px] md:border-[2px] px-4 py-6 animate-pulse cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div id="events">
        <Event />
      </div>
      <div id="Social">
        <Social />
      </div>
      <Footer />
    </>
  );
}
