import Image from "next/image";
import Event from "./event";
export default function Home() {
  return (
    <>
      <div className="flex items-start justify-center min-h-screen bg-no-repeat bg-cover background">
        <div className="flex flex-col h-[100vh] justify-between items-center layer space-y-12 py-20">
          <div className="shadow-xl rounded-full bg-white p-[1px]">
            <Image src={"/logo.png"} alt="logo" width={150} height={150} />
          </div>
          <h1 className="text-6xl text-center text-white leading-normal uppercase w-3/4">
            Just a bunch of 🤟 #Web3 enthusiasts from Hyderabad
          </h1>
          <h2 className="text-2xl text-center text-white">#WAGBI 🚀</h2>
          <a href="#Events">
            <div className="border-[1px] px-4 py-6 animate-pulse cursor-pointer">
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
      <div id="Events">
        <Event />
      </div>
    </>
  );
}
