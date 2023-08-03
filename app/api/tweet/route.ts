import { NextRequest, NextResponse } from "next/server";
import { getTweet } from "react-tweet/api";

export async function GET(request: Request) {
  const _data = await getTweet("1684483776234364929");
  console.log("Called");
  return NextResponse.json(_data);
}
