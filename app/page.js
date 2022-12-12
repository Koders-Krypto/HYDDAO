import Image from "next/image";
import Event from "./event";
import Social from "./social";
export default function Home() {
  return (
    <>
      <div className="flex items-start justify-center min-h-screen bg-no-repeat bg-cover background">
        <div className="flex flex-col h-[100vh] justify-between items-center layer space-y-12 py-20">
          <div className="shadow-xl rounded-full bg-white p-[1px]">
            <div className="relative w-96 h-96 lg:w-48 lg:h-48">
              <Image src={"/logo.png"} alt="logo" fill />
            </div>
          </div>
          <h1 className="text-7xl lg:text-7xl text-center text-white uppercase w-full lg:w-3/4 px-8">
            Just a bunch of 🤟 #Web3 enthusiasts from Hyderabad.
          </h1>

          <h2 className="flex flex-col text-6xl lg:text-4xl text-center text-white">
            Let{"'"}s make Hyderabad Web3 capital of India.
            <span className="pt-6"> #WAGBI 🚀</span>
          </h2>
          <a href="#events">
            <div className="border-[4px] lg:border-[1px]  px-4 py-6 animate-pulse cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="lg:w-6 lg:h-6 w-20 h-20 text-white">
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
