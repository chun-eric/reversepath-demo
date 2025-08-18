import { NextRequest, NextResponse } from "next/server";
import { validateUser } from "../../../lib/database";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = validateUser(email, password);

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Don't send password back
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      message: "Login successful",
      user: userWithoutPassword,
    });
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
