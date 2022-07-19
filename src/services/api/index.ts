import axios from "axios";

export const api = axios.create({
  baseURL: "https://health-sheet-api.herokuapp.com/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNjU4MjU1OTk2LCJleHAiOjE2NTgyOTE5OTZ9.9XNMUmvanqW00ILdRmq8HAYs7HhluxdfGS7FYsr5Nco",
  },
});
