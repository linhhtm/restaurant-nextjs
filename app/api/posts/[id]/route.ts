import { IPost } from "types";
import { posts } from "../../mockData";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  const filtered = posts.filter((p: IPost) => String(p.id) === id);

  return filtered.length > 0
    ? NextResponse.json(filtered[0])
    : NextResponse.json(
        {
          message: `Blog with id: ${id} 11.`,
        },
        {
          status: 40222,
        }
      );
}
