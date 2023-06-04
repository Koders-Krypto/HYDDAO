"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://app.social3.club/api-staging/job/get/?page=1&size=10", {})
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
      {jobs.map((job, index) => {
        return (
          <div key={index}>
            <div>{job.title}</div>
          </div>
        );
      })}
    </>
  );
}
