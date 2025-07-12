import axios from "axios";

const BASE_URL = axios.create({ baseURL: "http://localhost:5500" });

export default BASE_URL;
