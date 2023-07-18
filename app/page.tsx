import Image from "next/image";
import Event from "./events/event";
import Footer from "./common/Footer";
import Social from "./common/Social";
import Jobs from "./jobs/jobs";
import Partners from "./partners/partners";

export default function Home() {
  return (
    <>
      <div className="flex items-start justify-center min-h-screen bg-no-repeat bg-cover background">
        <div className="flex flex-col items-center gap-8 px-4 py-20 justify-evenly md:justify-center layer">
          <div className="shadow-xl rounded-full bg-white p-[1px]">
            <div className="relative w-40 h-40">
              <Image src={"/logo.png"} alt="logo" fill />
            </div>
          </div>
          <h1 className="w-full px-8 text-4xl font-bold text-center text-white uppercase md:text-5xl xl:text-6xl md:w-3/4">
            Largest Web3 community in Hyderabad
          </h1>
          <ul className="flex flex-wrap items-center justify-center space-x-8 text-base text-white uppercase md:text-2xl">
            <li>Builders</li>
            <li>|</li>
            <li>Founders</li>
            <li>|</li>
            <li>Artists</li>
          </ul>
          <h2 className="flex flex-col text-xl text-center text-white md:text-2xl">
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
                className="w-6 h-6 text-white"
              >
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
      <div id="partners">
        <Partners />
      </div>
      <div id="events">
        <Event />
      </div>
      <div id="Jobs">
        <Jobs />
      </div>
      <div id="Social">
        <Social />
      </div>

      <Footer />
    </>
  );
}
