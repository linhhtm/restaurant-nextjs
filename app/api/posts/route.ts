import { NextResponse } from "next/server";
import { posts } from "../mockData";

// const itemPerPage = 3;
// export async function GET(req: Request) {
// const { searchParams } = new URL(req.url);
// const page = Number(searchParams.get("page"));
// const firtIndex = page * itemPerPage;
// return NextResponse.json({
//   data: posts.slice(firtIndex, firtIndex + itemPerPage),
//   page: page,
//   lastPage: Math.ceil(posts.length / itemPerPage) - 1,
// });
// }

export async function GET() {
  return NextResponse.json({
    data: posts,
  });
}
