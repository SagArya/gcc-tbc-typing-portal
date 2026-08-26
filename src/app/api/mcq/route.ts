import { NextResponse } from "next/server";
import questionsData from "@/data/mcqQuestions.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let filtered = [...questionsData];

  if (category && category !== "all") {
    filtered = filtered.filter((q) => q.category.toLowerCase() === category.toLowerCase());
  }

  // २५ प्रश्नांचा रँडम सेट निवडणे
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffled.slice(0, 25);

  return NextResponse.json({
    success: true,
    total: selectedQuestions.length,
    data: selectedQuestions,
  });
}