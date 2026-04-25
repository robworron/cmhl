import { NextResponse } from "next/server";
import { fetchStandings } from "@/utils/fetchStandings";

export async function GET(_, { params }) {
  const data = await fetchStandings(params.season);

  return NextResponse.json(data);
}
