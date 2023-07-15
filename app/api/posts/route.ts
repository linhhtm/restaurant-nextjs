import { NextResponse } from "next/server";
import { posts } from "../mockData";

export async function GET() {
  return NextResponse.json(posts);
}
