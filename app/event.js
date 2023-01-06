import Image from "next/image";
import moment from "moment";
async function getData() {
  const rawResponse = await fetch(
    "https://api.meetupswala.xyz/events/list",
    {
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
    },
    { cache: "no-store" }
  );

  const content = await rawResponse.json();
  // console.log(content);
  return content;
}

export default async function Event() {
  const data = await getData();

  return (
    <div className="flex flex-col justify-center items-center py-8 px-6">
      <h1 className="text-3xl pb-4 text-center">
        Upcoming Events in <strong>Hyderabad</strong>
      </h1>

      <div className="flex flex-col w-full md:grid md:grid-cols-4 grid-row-auto gap-4 my-4 mx-0 md:mx-8 px-0 md:px-8">
        {data.data?.map((event, index) => {
          return (
            <div className="shadow-md rounded-lg bg-white" key={index}>
              <div className="w-full h-56 relative">
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
              <div className="mx-4 my-4 md:my-3 md:mx-2">
                <h1 className="font-bold text-xl truncate">{event.name}</h1>
                <h1 className="font-normal text-base text-gray-600">
                  {moment(event.eventDate).format("MMMM Do YYYY")}
                </h1>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={event.registrationLink}
                  className="flex flex-row justify-end items-center">
                  <button
                    type=""
                    className="bg-gray-900 py-3 px-6 text-white rounded-xl text-base uppercase">
                    Register
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {data.status === "Failure" && (
        <h1 className="text-2xl pb-20 pt-12 text-center">
          Sorry 🥺 there is no upcoming events
        </h1>
      )}
      <p className="text-base text-center">
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
