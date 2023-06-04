"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Jobs() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://app.social3.club/api-staging/job/get/?page=1&size=10", {})
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      {data.jobs.map((job, index) => {
        return (
          <div key={index}>
            <div>{job.title}</div>
          </div>
        );
      })}
    </>
  );
}
