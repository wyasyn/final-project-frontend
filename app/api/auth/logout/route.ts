import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Attempt to delete the token cookie
    cookies().delete("token");
    return NextResponse.json({ message: "Token deleted successfully" });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(`An error occurred: ${errorMessage}`, {
      status: 500,
    });
  }
}
