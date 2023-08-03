import { NextRequest, NextResponse } from "next/server";

type Body = {
  tag?: [];
  city?: number;
  offset?: number;
};

export async function POST(request: Request) {
  const data: Body = await request.json();
  const response = await fetch("https://www.api.meetupswala.xyz/events/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const _data = await response.json();

  return NextResponse.json(_data);
}
