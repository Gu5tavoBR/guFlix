import axios from "axios";

export const key = "bc020e79d9dfdd4eb444a9114f633a47";

const api = axios.create({
baseURL: "https://api.themoviedb.org/3"
})

export default api;