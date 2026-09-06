import { NextResponse } from "next/server";
import { videoInterviewsData } from "@/data/ceoData";

export async function GET() {
  return NextResponse.json({
    docs: videoInterviewsData,
    totalDocs: videoInterviewsData.length,
  });
}
