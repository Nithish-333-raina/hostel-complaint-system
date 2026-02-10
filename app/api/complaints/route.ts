import connectToDatabase from "@/components/libs/DB/connectToDataBase";
import Complaint from "@/components/libs/Models/complain";
import { NextResponse } from "next/server";

// POST → create complaint
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const complaint = await Complaint.create({
      studentId: "student123", // fixed id
      title: body.title,
      category: body.category,
      priority: body.priority,
      description: body.description,
    });

    return NextResponse.json(complaint, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}

// GET → only this student complaints
export async function GET() {
  try {
    await connectToDatabase();

    const complaints = await Complaint.find({
      studentId: "student123",
    }).sort({ createdAt: -1 });

    return NextResponse.json(complaints);
  } catch (err) {
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  await connectToDatabase();
  const { id, status } = await req.json();

  const updated = await Complaint.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  return NextResponse.json(updated);
}
