import { NextResponse } from "next/server";
import { ceoProfileData } from "@/data/ceoData";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: ceoProfileData,
  });
}
