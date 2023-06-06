"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import axios from "axios";

export default function Event() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("https://api.meetupswala.xyz/events/list", {
        tag: null,
        city: 17, //Hyderabad city code 17
        offset: 0,
        query: "",
      })
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8">
      <h1 className="pb-4 text-3xl text-center">
        Upcoming Events in <strong>Hyderabad</strong>
      </h1>

      <div className="flex flex-col w-full gap-4 px-0 mx-0 my-4 md:grid md:grid-cols-3 grid-row-auto">
        {data?.map((event, index) => {
          return (
            <div className="bg-white rounded-lg shadow-md" key={index}>
              <div className="relative aspect-video">
                <Image
                  className="object-cover w-full h-56 rounded-t-lg"
                  src={
                    "https://api.meetupswala.xyz/events/image?image=" +
                    event.coverImage
                  }
                  alt={event.name}
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
                  fill
                />
              </div>
              <div className="mx-4 my-4 md:my-3 md:mx-2">
                <h1 className="text-xl font-bold truncate">{event.name}</h1>
                <h1 className="text-base font-normal text-gray-600">
                  {moment(event.eventDate).format("MMMM Do YYYY")}
                </h1>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={event.registrationLink}
                  className="flex flex-row items-center justify-end"
                >
                  <button className="px-6 py-2 text-base text-white uppercase bg-gray-900 rounded-xl">
                    Register
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {data?.length === 0 && (
        <h1 className="pt-12 pb-20 text-2xl text-center">
          Sorry 🥺 there is no upcoming events
        </h1>
      )}
      <p className="text-base text-center">
        Powered by{" "}
        <a
          className="font-bold underline"
          href="https://www.meetupswala.xyz/"
          rel="noreferrer"
          target="_blank"
        >
          meetupswala.xyz
        </a>
      </p>
    </div>
  );
}
