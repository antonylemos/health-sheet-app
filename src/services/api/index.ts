import axios from "axios";

export const api = axios.create({
  baseURL: 'https://health-sheet-api.herokuapp.com/',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNjU4MTgzNjIwLCJleHAiOjE2NTgyMTk2MjB9.7ATT439GyjZBCmWCQPUX5E3to0a1bPG_DEzFLsHyJFw',
  }
});
