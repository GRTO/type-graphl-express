import fetch, { RequestInit } from "node-fetch";

// Build the request header
const requestHeader = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.AUTH_HEADER || "[AUTH_HEADER]"}`,
    Cookie: process.env.COOKIE_SESSION || "[COOKIE_SESSION]",
  };
};

// Fetch API Utility Function
const http = async (path: string, args: RequestInit): Promise<any> => {
  const response = await fetch(
    `${process.env.SP_BASE_URL || "[BASE_URL]"}${path}`,
    args
  );
  if (response.status === 401) {
    return;
  }
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

// HTTP GET Abstraction
export const GET = async (
  path: string,
  args: RequestInit = { method: "GET", headers: requestHeader() }
): Promise<any> => http(path, args);
