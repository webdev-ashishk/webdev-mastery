import { latestPostData } from "@/utils/latestPostData";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const filterPost = latestPostData.filter(
    (post) => post.id == content.params.id
  );
  // console.log(data, content.params.id);
  return NextResponse.json(
    filterPost.length == 0
      ? { result: "no data found", success: false }
      : { result: filterPost[0], success: true }
  );
}
