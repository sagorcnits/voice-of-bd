import dbConnect from "@/lib/dbConnect";
import news from "@/models/news-model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const data = await req.json();
    const res = new news(data);
    await res.save();
    return NextResponse.json({ message: "News created successfully", res });
  } catch (error) {
    console.error("Error saving news:", error);
    return NextResponse.json({ message: "Error saving news" }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const newsList = await news.find().sort({ createdAt: -1 });
    return NextResponse.json(newsList);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { message: "Error fetching news" },
      { status: 500 }
    );
  }
}
