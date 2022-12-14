import Image from "next/image";
import Event from "./event";
import Social from "./social";
export default function Home() {
  return (
    <>
      <div className="flex items-start justify-center min-h-screen bg-no-repeat bg-cover background">
        <div className="flex flex-col h-[100vh] md:justify-evenly lg:justify-between items-center layer lg:space-y-12 py-20">
          <div className="shadow-xl rounded-full bg-white p-[1px]">
            <div className="relative md:w-96 md:h-96 lg:w-48 lg:h-48">
              <Image src={"/logo.png"} alt="logo" fill />
            </div>
          </div>
          <h1 className="md:text-8xl lg:text-7xl text-center text-white font-bold uppercase md:w-full lg:w-3/4 px-8">
            Largest Web3 community in Hyderabad
          </h1>
          <ul className="text-white space-x-8 md:text-4xl lg:text-2xl uppercase">
            <l1>Builders</l1>
            <l1>|</l1>
            <l1>Founders</l1>
            <l1>|</l1>
            <l1>Artists</l1>
            <l1>|</l1>
            <l1>& More</l1>
          </ul>
          <h2 className="flex flex-col text-center text-white md:text-4xl lg:text-2xl">
            Let{"'"}s make Hyderabad Web3 capital of India
            <span className="pt-6"> #WAGBI 🚀</span>
          </h2>

          <a href="#events">
            <div className="md:border-[4px] lg:border-[1px]  px-4 py-6 animate-pulse cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="lg:w-6 lg:h-6 md:w-20 md:h-20 text-white">
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
    </>
  );
}
