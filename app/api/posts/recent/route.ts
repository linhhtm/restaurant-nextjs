import { posts } from "../../mockData";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = searchParams.get("size");
  let data = posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  if (size) data = data.slice(0, Number(size));
  return NextResponse.json(data);
}
