import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const apiUrl = process.env.API_URL;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    email,
    username,
    password,
    first_name,
    last_name,
    middle_name,
    date_of_birth,
    image_url,
    career,
    phone_number,
  } = body;

  try {
    // Call the Flask API signup endpoint to create a new user
    const response = await axios.post(`${apiUrl}/user/add-user`, {
      email,
      username,
      password,
      first_name,
      last_name,
      middle_name,
      date_of_birth,
      image_url,
      career,
      phone_number,
    });

    if (!response) {
      throw new Error("Failed to fetch registration response");
    }

    if (response.status === 400) {
      throw new Error("Invalid registration data");
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

    if (response.data.error) {
      return NextResponse.json({ error: response.data.error }, { status: 400 });
    }

    if (response.data.message) {
      return NextResponse.json(
        { message: response.data.message },
        { status: 201 }
      );
    }
  } catch (error) {
    const axiosError = error as AxiosError;

    const statusCode = axiosError.response?.status || 500;
    const errorMessage =
      (axiosError.response?.data as { message: string })?.message ||
      "Registration failed";

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
