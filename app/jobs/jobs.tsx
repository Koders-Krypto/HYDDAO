"use client";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import moment from "moment";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [size, setSize] = useState(16);

  const [count, setCount] = useState(0);

  function loadData() {
    setSize(size + 16);
  }

  useEffect(() => {
    axios
      .get(`https://app.social3.club/api/job/get/?page=1&size=${size}`, {})
      .then(function (response) {
        // console.log(response.data.data);
        setCount(response.data.data.totalCount);
        setJobs(response.data.data.jobs);
      })
      .catch(function (error) {
        console.log(error);
        setJobs([]);
      });
  }, [size]);
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center px-6 py-8">
        <h1 className="pb-4 text-3xl text-center">
          Jobs <strong>for you 🫵</strong>
        </h1>

        <div className="grid gap-4 w-full justify-center md:grid-cols-3 xl:grid-cols-4">
          {jobs?.slice(0, 88).map((job, index) => {
            return (
              <div
                className="relative max-w-[85%] md:max-w-full mx-auto w-full bg-white rounded-lg shadow-md"
                key={index}
              >
                <div className="relative w-full flex items-center justify-center p-10 bg-black rounded-t-lg">
                  <Image
                    className="w-24 h-24 rounded-lg aspect-square"
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
                    href={"https://app.social3.club/jobs/" + job.id}
                    className="flex flex-row items-center justify-end mt-2"
                  >
                    <button className="px-6 py-2 text-base text-white uppercase bg-gray-900 hover:bg-slate-100 hover:text-slate-600 rounded-xl">
                      Apply Now
                    </button>
                  </a>
                </div>
                <div className="absolute top-2 right-2">
                  <h5 className="flex items-center justify-center gap-2 px-3 py-1 text-xs text-white rounded-full bg-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                    </svg>

                    <a
                      data-tooltip-id={job.id}
                      data-tooltip-content={`${job.total_applicants} people have applied`}
                      className="flex items-center justify-center w-5 h-5 bg-white rounded-full text-slate-600"
                    >
                      {job.total_applicants}
                      <Tooltip id={job.id} />
                    </a>
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
        {jobs.length <= 0 && (
          <h1 className="pt-12 pb-20 text-2xl text-center">
            Sorry 🥺 there are no jobs to show
          </h1>
        )}
        {jobs.length !== 140 && (
          <button
            className="px-4 py-1 my-4 text-white rounded-full bg-slate-600"
            onClick={() => loadData()}
          >
            Load More
          </button>
        )}

        <p className="mt-4 text-base text-center">
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
