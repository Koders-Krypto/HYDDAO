import Image from "next/image";
import moment from "moment";
async function getData() {
  const rawResponse = await fetch("https://api.meetupswala.xyz/events/list", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tag: null,
      city: 17, //Hyderabad city code 17
      offset: 0,
      query: "",
    }),
  });

  const content = await rawResponse.json();

  return content;
}

export default async function Event() {
  const data = await getData();

  return (
    <div className="flex flex-col justify-center items-center py-8">
      <h1 className="lg:text-3xl text-5xl pb-6 pt-10 lg:pt-0 lg:pb-0">
        Upcoming Events in <strong>Hyderabad</strong>
      </h1>

      <div className="flex flex-col w-full lg:grid lg:grid-cols-4 grid-row-auto gap-4 my-4 mx-8 px-8">
        {data.data?.map((event, index) => {
          return (
            <div className="shadow-md rounded-lg bg-white" key={index}>
              <div className="w-full h-[30rem] lg:h-56 relative">
                <Image
                  className="w-full rounded-t-lg h-56 object-fill"
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
              <div className="lg:mx-2 lg:my-2 mx-6 my-8">
                <h1 className="font-semibold text-5xl lg:text-lg truncate pb-3 lg:pb-1">
                  {event.name}
                </h1>
                <h1 className="font-normal text-4xl lg:text-base text-gray-600">
                  {moment(event.eventDate).format("MMMM Do YYYY")}
                </h1>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={event.registrationLink}
                  className="flex flex-row justify-end items-center">
                  <button
                    type=""
                    className="bg-gray-900 md:w-96 lg:w-32 py-4 lg:py-1 text-white rounded-xl lg:text-base text-5xl uppercase">
                    Register
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {data.status === "Failure" && (
        <h1 className="text-5xl pb-20 pt-12 text-center">
          Sorry 🥺 there is no upcoming events
        </h1>
      )}
      <p className="lg:text-base text-2xl">
        Powered by{" "}
        <a
          className="font-bold underline"
          href="https://www.meetupswala.xyz/"
          rel="noreferrer"
          target="_blank">
          meetupswala.xyz
        </a>
      </p>
    </div>
  );
}
