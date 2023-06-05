"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://app.social3.club/api/job/get/?page=1&size=10", {})
      .then(function (response) {
        console.log(response.data.data);
        setJobs(response.data.data.jobs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8">
        <h1 className="pb-4 text-3xl text-center">
          Jobs <strong>for you 🫵</strong>
        </h1>

        <div className="flex flex-col w-full gap-4 px-0 mx-0 my-4 md:grid md:grid-cols-4 grid-row-auto md:mx-8 md:px-8">
          {jobs?.map((job, index) => {
            return (
              <div className="bg-white rounded-lg shadow-md" key={index}>
                <div className="relative flex items-center justify-center p-10">
                  <Image
                    className="object-fill w-56 h-56 rounded-lg"
                    src={job?.company?.avatar_url}
                    alt={job.title}
                    width={"200"}
                    height={"200"}
                  />
                </div>
                <div className="mx-4 my-4 md:my-3 md:mx-2">
                  <h2 className="text-xl font-bold truncate">{job.title}</h2>
                  <h3 className="text-sm font-normal text-gray-600">
                    {moment(job.createdAt).format("MMMM Do YYYY")}
                  </h3>
                  <h3 className="text-sm font-normal text-gray-600">
                    {job.location}
                  </h3>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={job.registrationLink}
                    className="flex flex-row items-center justify-between"
                  >
                    <div>{job.total_applicants}</div>
                    <button className="px-6 py-2 text-base text-white uppercase bg-gray-900 rounded-xl">
                      Register
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {!jobs && (
          <h1 className="pt-12 pb-20 text-2xl text-center">
            Sorry 🥺 there is no upcoming events
          </h1>
        )}
        <p className="text-base text-center">
          Powered by{" "}
          <a
            className="font-bold underline"
            href="https://social3.club/"
            rel="noreferrer"
            target="_blank"
          >
            social3.club
          </a>
        </p>
      </div>
    </>
  );
}
