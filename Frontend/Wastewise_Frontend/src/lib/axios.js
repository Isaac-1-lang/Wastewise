import axios from "axios"


//creating axios instance

export default axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
})