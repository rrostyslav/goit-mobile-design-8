import axios from "axios"

const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL ?? "https://api.example.test"

export const apiClient = axios.create({
  baseURL,
})
