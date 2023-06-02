const isDev = window.location.href.includes("localhost");

export const localApiBaseUrl = isDev ? "http://localhost:3000/api" : "/api";

export const apiBaseUrl = "http://127.0.0.1:8000";