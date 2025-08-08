"use client";
import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : undefined);

export const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});

console.log("[axiosClient] baseURL =", axiosClient.defaults.baseURL);
