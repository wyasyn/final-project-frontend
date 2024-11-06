"use server";
import { User } from "@/types/types";
import axios from "axios";
import { cookies } from "next/headers";
const apiUrl = process.env.API_URL;

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
