import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://weatherapi-com.p.rapidapi.com',
    timeout: 1000,
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_URL,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
});