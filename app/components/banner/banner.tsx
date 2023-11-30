import Link from "next/link";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="w-full px-6 md:px-12">
      <div className="flex flex-col items-center justify-center gap-6 p-8 text-black bg-ethindia rounded-xl">
        <div className="flex flex-col items-center justify-center col-span-2 gap-4 text-center xl:gap-6">
          <Image
            className=""
            src={"/banner/header-logo.svg"}
            height={"220"}
            width={"220"}
            alt="ETHIndia logo"
          />
          <div className="flex flex-col gap-2 xl:gap-12 xl:flex-row">
            <h4 className="text-lg">8th DEC - 10th DEC 2023</h4>
            <h5 className="text-lg">KTPO, BENGALURU</h5>
          </div>
          <a href="https://ethindia.co/" target="_blank">
            <div className="text-lg text-white font-medium rounded-lg px-8 py-3 text center shadow-md bg-[#333333]">
              World{"'"}s Biggest Ethereum Hackathon
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
