import axios from "axios"

const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL

if (!baseURL) {
  throw new Error("Missing api base url")
}

export const apiClient = axios.create({
  baseURL,
})
