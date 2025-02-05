import dbConnect from "@/lib/dbConnect";
import users from "@/models/users_schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const data = await req.json();
    const { name, email, password } = data;
    // check if all fields are filled
    if (!name || !email || !password)
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    // check if email is valid
    const existemail = await users.findOne({ email: email });
    if (existemail)
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    const newUser = new users(data);
    await newUser.save();
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
