"use server";
import { User } from "@/types/types";
import axios from "axios";
import { cookies } from "next/headers";
const apiUrl = process.env.API_URL;
import { AxiosError } from "axios";

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
