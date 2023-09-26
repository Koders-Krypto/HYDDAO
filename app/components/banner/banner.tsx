import Link from "next/link";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="w-full px-6 md:px-12">
      <div className="flex flex-col items-center justify-center gap-6 p-8 text-white bg-unfold rounded-xl">
        <div className="flex flex-col items-center justify-center col-span-2 gap-4 text-center xl:gap-6">
          <Image
            className=""
            src={"/banner/header-logo.webp"}
            height={"220"}
            width={"220"}
            alt="Unfold Logo"
          />
          <div className="flex flex-col gap-2 xl:gap-12 xl:flex-row">
            <h4 className="text-lg">19th OCT - 21th OCT 2023</h4>
            <h5 className="text-lg">KTPO, BENGALURU</h5>
          </div>
          <h6 className="text-lg font-semibold">
            INDIA{"'"}S PREMIER WEB3 EVENT
          </h6>
        </div>
        <div className="flex flex-row items-center justify-end">
          <Link
            href={
              "https://unfoldweb3.com/?utm_source=ecosystempartner&utm_medium=hyderabaddao&utm_campaign=pre-register"
            }
            target="_blank"
            rel="noreferrer"
          >
            <div className="px-8 py-3 font-semibold text-center rounded-lg shadow-md bg-[#ED5A3C]">
              Grab your tickets now !!!
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
