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
      city: 2,
      offset: 0,
      query: "",
    }),
  });
  //17 Hyderabad
  const content = await rawResponse.json();
  console.log(content);
  return content;
}

export default async function Event() {
  const data = await getData();

  return (
    <div className="flex flex-col justify-center items-center py-8">
      <h1 className="lg:text-3xl text-5xl pb-6 pt-10 lg:pt-0 lg:pb-0">
        Upcoming Events in <strong className="underline">Hyderabad</strong>
      </h1>

      <div className="flex flex-col w-full lg:grid lg:grid-cols-4 grid-row-auto gap-4 my-4 mx-8 px-8">
        {data.data?.map((event, index) => {
          return (
            <div className="shadow-md rounded-sm bg-white" key={index}>
              <div className="w-full h-96 lg:h-56 relative">
                <Image
                  className="bg-cover rounded-t-sm"
                  src={
                    "https://api.meetupswala.xyz/events/image?image=" +
                    event.coverImage
                  }
                  alt={event.name}
                  fill={true}
                />
              </div>
              <div className="m-3">
                <h1 className="font-semibold text-2xl lg:text-lg truncate">
                  {event.name}
                </h1>
                <h1 className="font-normal text-xl lg:text-base text-gray-600">
                  {moment(event.eventDate).format("MMMM Do YYYY")}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      {data.status === "Failure" && (
        <h1 className="text-2xl pb-20 pt-12">
          Sorry 🥺 there is no upcoming events
        </h1>
      )}
      <p className="text-xl">
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
