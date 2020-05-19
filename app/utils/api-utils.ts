import fetch, { RequestInit } from "node-fetch";
// BaseURL
export const BaseURL = "[BASE-URL]";

const token = `[AUTH-HEADER]`;
// Build the request header
const requestHeader = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    Cookie:
      "[COOKIE-SESSION]",
  };
};

// Fetch API Utility Function
const http = async (path: string, args: RequestInit): Promise<any> => {
  const response = await fetch(path, args);
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
