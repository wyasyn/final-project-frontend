"use server";
import { LoginDataProps, User, UserDataProps } from "@/types/types";
import axios from "axios";
import { cookies } from "next/headers";
const apiUrl = process.env.API_URL;
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export default async function getUser() {
  // Get the token from cookies
  const token = cookies().get("token")?.value;

  if (!token) {
    return;
  }

  try {
    const response = await axios.get(`${apiUrl}/user/get-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user: User = response.data.user;

    if (!user) {
      return;
    }

    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return;
  }
}

export const resetPassword = async (email: string) => {
  try {
    // Send POST request to reset password
    const response = await axios.post(`${apiUrl}/user/forgot-password`, {
      email,
    });

    // Destructure message and error from response
    const { message, error } = response.data;

    // If there's an error in the response
    if (error) {
      return { error };
    }

    // Return success message if no error
    return { message };
  } catch (error: unknown) {
    console.error("Error sending password reset email:", error);

    // Check if the error is an AxiosError
    if (error instanceof AxiosError) {
      // If the error has a response, return the message from it
      return {
        error:
          error.response?.data?.message ||
          "Failed to send password reset email. Please try again later.",
      };
    }

    // Fallback error message for other types of errors
    return {
      error: "An unknown error occurred. Please try again later.",
    };
  }
};

export const updatePassword = async (password: string, token: string) => {
  if (!password) {
    return { error: "Password cannot be empty" };
  }

  try {
    const response = await axios.post(
      `${apiUrl}/user/reset-password/${token}`,
      {
        password,
      }
    );

    const { error, message } = response.data;
    if (error) {
      return { error };
    }
    return { message };
  } catch (error) {
    return { error };
  }
};

export const createUser = async (userData: UserDataProps) => {
  const { username, email, password, first_name, last_name } = userData;
  if (!username || !email || !password || !first_name || !last_name) {
    return { error: "All fields are required" };
  }

  try {
    const response = await axios.post(`${apiUrl}/user/add-user`, userData);

    if (!response) {
      return { error: "Response not obtained!" };
    }

    const cookiesData = response.headers["set-cookie"];
    if (cookiesData) {
      const accessTokenCookie = cookiesData.find((cookie: string) =>
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
  } catch (error) {
    console.log(error);

    return { error: `${error}` };
  }
};

export const loginUser = async (loginData: LoginDataProps) => {
  const { identifier, password } = loginData;

  if (!identifier || !password) {
    return { error: "Both identifier and password are required" };
  }

  try {
    const response = await axios.post(`${apiUrl}/user/login`, loginData);

    if (!response) {
      return { error: "Response not obtained!" };
    }

    const cookiesData = response.headers["set-cookie"];

    if (cookiesData) {
      const accessTokenCookie = cookiesData.find((cookie: string) =>
        cookie.startsWith("access_token_cookie=")
      );

      if (accessTokenCookie) {
        const token = accessTokenCookie.split(";")[0].split("=")[1];

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        cookies().set("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        });

        return { message: "Login successful" };
      } else {
        console.error("Access token not found in cookies.");
        return { error: "Access token not found in cookies" };
      }
    } else {
      console.error("Set-cookie header not present in response.");
      return { error: "Set-cookie header not present in response" };
    }
  } catch (error) {
    console.error(error);
    return { error: `${error}` };
  }
};

export const logout = async () => {
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
};
