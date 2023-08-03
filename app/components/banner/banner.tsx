import Link from "next/link";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="w-full px-6 md:px-12">
      <div className="flex flex-col items-center justify-center gap-6 px-4 py-4 bg-white shadow-md xl:grid xl:px-8 xl:py-12 xl:grid-cols-4 rounded-xl bg-web3conf">
        <div className="flex items-center justify-center xl:justify-start">
          <Image
            className="rounded-full shadow-md"
            src={"/web3conf/logo.png"}
            height={"120"}
            width={"120"}
            alt="Web3Conf Logo"
          />
        </div>
        <div className="flex flex-col items-center justify-center col-span-2 gap-2 text-center xl:gap-6">
          <h3 className="text-4xl font-black xl:text-5xl">WEB3 CONF {"'"}23</h3>
          <div className="flex flex-col gap-2 xl:gap-12 xl:flex-row">
            <h4 className="text-lg">11th Aug - 14th Aug 2023</h4>
            <h5 className="text-lg">Goa, India</h5>
          </div>
          <h6 className="text-lg font-semibold">
            India{"'"}s largest chain agnostic web3 conference
          </h6>
        </div>
        <div className="flex items-center justify-center xl:justify-end">
          <Link
            href={"https://www.meetupswala.xyz/events/999"}
            target="_blank"
            rel="noreferrer"
          >
            <div className="px-8 py-3 font-semibold text-center rounded-lg shadow-md bg-web3conf-button">
              Grab your tickets now !!!
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
