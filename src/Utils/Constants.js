const isDev = window.location.href.includes("localhost");

export const localApiBaseUrl = isDev ? "http://localhost:3000/api" : "/api";