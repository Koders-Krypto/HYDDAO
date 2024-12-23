import Image from "next/image";
import Event from "./events/event";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Jobs from "./jobs/jobs";
import Partners from "./partners/partners";
import Link from "next/link";
import Slider from "./components/slides/slider";

export default function Home() {
  return (
    <>
      <div className="relative px-6 py-12 bg-no-repeat md:px-12 bg-none md:bg-cover background">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] gap-8">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-center justify-center h-full text-center md:items-start md:text-left gap-7">
              <div className="shadow-xl rounded-full bg-white p-[1px]">
                <div className="relative w-40 h-40">
                  <Image src={"/logo.png"} alt="logo" fill />
                </div>
              </div>
              <h1 className="w-full text-4xl font-bold text-white uppercase xl:text-5xl">
                Unleashing the Web3 Revolution in Hyderabad
              </h1>
              <ul className="flex flex-wrap items-center justify-center space-x-6 text-base text-white uppercase md:space-x-8 md:text-xl">
                <li>Builders</li>
                <li>|</li>
                <li>Founders</li>
                <li>|</li>
                <li>Artists</li>
              </ul>
              <h2 className="flex flex-col text-lg text-white md:text-xl">
                On a mission to make Hyderabad a Web3 Capital of India.
                <br />{" "}
                <span>
                  In Association with the{" "}
                  <Link
                    className="font-bold "
                    href={
                      "https://invest.telangana.gov.in/emerging-technologies/"
                    }
                    rel="noreferrer"
                    target="_blank"
                  >
                    Telangana Government
                  </Link>
                  .
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            <Slider />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a href="#partners">
            <div className="border-[1px] md:border-[2px] px-4 py-6 animate-pulse cursor-pointer mt-6">
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

      <div id="Social">
        <Social />
      </div>
      <Footer />
    </>
  );
}
