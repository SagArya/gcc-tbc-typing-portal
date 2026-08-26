import { NextResponse } from "next/server";
import passages from "@/data/passages.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang");
  const speed = searchParams.get("speed");

  let filtered = passages;

  // Query parameter नुसार फिल्टर करणे (उदा. /api/passages?lang=marathi&speed=30)
  if (lang) {
    filtered = filtered.filter((p) => p.language.toLowerCase() === lang.toLowerCase());
  }

  if (speed) {
    filtered = filtered.filter((p) => p.speed === Number(speed));
  }

  return NextResponse.json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
}