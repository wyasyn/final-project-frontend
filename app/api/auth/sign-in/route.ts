import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const apiUrl = process.env.API_URL;

export async function POST(req: NextRequest) {
  // Extract identifier and password from the request body
  const { identifier, password } = await req.json();

  try {
    // Call the Flask API login endpoint to get the JWT
    const response = await axios.post(`${apiUrl}/user/login`, {
      identifier,
      password,
    });

    if (!response) {
      throw new Error("Failed to fetch login response");
    }

    if (response.status === 400) {
      throw new Error("Invalid login data");
    }

    const cookiesData = response.headers["set-cookie"];
    if (cookiesData) {
      const accessTokenCookie = cookiesData.find((cookie) =>
        cookie.startsWith("access_token_cookie=")
      );
      if (accessTokenCookie) {
        // Extract the token value (removing `access_token_cookie=` and any trailing flags)
        const token = accessTokenCookie.split(";")[0].split("=")[1];

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        cookies().set("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        });
      } else {
        console.error("Access token not found in cookies.");
      }
    } else {
      console.error("Set-cookie header not present in response.");
    }

    return response.data.message
      ? NextResponse.json({ message: response.data.message }, { status: 201 })
      : NextResponse.json({ error: response.data.error }, { status: 400 });
  } catch (error) {
    const axiosError = error as AxiosError;

    const statusCode = axiosError.response?.status || 500;
    const errorMessage =
      (axiosError.response?.data as { message: string })?.message ||
      "Login failed";

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
