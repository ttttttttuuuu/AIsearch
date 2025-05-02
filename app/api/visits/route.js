import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("AIsearch");

    // 获取当前访问次数
    const result = await collection.findOne({ _id: "visits" });
    const visits = result ? result.count : 0;

    return NextResponse.json({ visits });
  } catch (error) {
    console.error("Error getting visits:", error);
    return NextResponse.json(
      { error: "Failed to get visits" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("AIsearch");

    // 更新访问次数
    const result = await collection.findOneAndUpdate(
      { _id: "visits" },
      { $inc: { count: 1 } },
      {
        upsert: true,
        returnDocument: "after",
        projection: { count: 1 },
      }
    );

    // 确保返回正确的访问次数
    const visits = result?.count || 1;

    return NextResponse.json({ visits });
  } catch (error) {
    console.error("Error updating visits:", error);
    return NextResponse.json(
      { error: "Failed to update visits" },
      { status: 500 }
    );
  }
}
