export const RUNNERS_API_URL = 
  process.env.NODE_ENV === "test" 
  ? "http://mocked-api" 
  : import.meta.env.VITE_RUNNERS_API_URL;

export const SEARCH_API_URL =
  process.env.NODE_ENV === "test"
  ? "http://mocked-api"
  : import.meta.env.VITE_SEARCH_API_URL