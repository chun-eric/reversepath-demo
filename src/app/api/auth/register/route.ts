import { NextRequest, NextResponse } from "next/server";
import { createUser, findUserByEmail } from "../../../lib/database";

export async function POST(request: NextRequest) {
  try {
    const { email, name, password, role = "PATIENT" } = await request.json();

    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Create new user
    const user = createUser({
      email,
      name,
      password, // In real app, hash this with bcrypt
      role,
    });

    // Don't send password back
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      message: "User created successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
