import fetch, { RequestInit } from "node-fetch";
// BaseURL
export const BaseURL = "http://api.sp-qa-op.dev.sparkpredict.com:8000";

const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJkMDViMDRhNC02ZGNkLTRmOWEtOTFjOS00ZDJkZjYzODk1MmEiLCJzdWIiOiIwMDBlOGVmNy0wN2ZiLTRjYTMtOWNkOC1hZDJkYmQ3YzQwYjciLCJzdWJfbmFtZSI6IkFsZXJ0IFVJIiwicm9sZXMiOlt7ImlkIjoiNjkwNzY2OWUtMjc1NS0xMWU5LTlkN2EtMGI5ZjA4MTdjMWEwIiwibmFtZSI6InVzZXIifV0sInBlcm1pc3Npb25zIjpbeyJpZCI6IjQ4ZDllZGE2LTI3NTUtMTFlOS05NTYzLWViOWZkZTM5MzcwNiIsIm5hbWUiOiJhbTpsb2dpbiJ9XSwiaXNzIjoiaHR0cDovLzM1LjE5Mi4xNDUuMjIwOjkwMDAiLCJleHAiOjE1ODk5MDk2MDAsImlhdCI6MTU4OTkwNjAwMCwidHlwIjoiQmVhcmVyIiwibmJmIjoxNTg5OTA1OTQwfQ.pp8SnCQBX2Gky94j2A4T1-hnf5QmG-6L4QFLUTFfP-vzynVPzOzIE1CjyJLIPw-r62YFmvA0B4kM5xg4kshaaXV_le29xuw6BcnnR_kgso_GRfJa0UyHNwVjGxBf1LkYfoCcHx_nrbJBcJj3QeyNHvHwgiZIoV-CdT4w7_IhBdutOAawXC7Rpbjo0e1WaYthpuSzLmxcs24K2Rr0X6mfW_pFPwv-DGPc1YRG7QhWGuPzbDHiTJ-McABucqNWgtCt0uUUNaUgdRMLMBTT0uKE768vZ8QF1-AuMDxPj5kDaGAIduxhOYrJqJI_DdmlzxE4gwny5YHCWYwOKxJOBuRurA`;
// Build the request header
const requestHeader = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    Cookie:
      "session=f82049a7-edb0-407b-874c-8f70907ad02b.1lGWl3zEpKmJM90p1pfUOaU5z2M; locale=en",
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
