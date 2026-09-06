import { NextResponse } from "next/server";
import { galleryPhotosData } from "@/data/ceoData";

export async function GET() {
  return NextResponse.json({
    docs: galleryPhotosData,
    totalDocs: galleryPhotosData.length,
  });
}
