import { latestPostData } from "@/utils/latestPostData";
import { NextResponse } from "next/server";

export async function GET(request) {
  const data = latestPostData;
  return NextResponse.json(data, { status: "200" });
}
