import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YnA_qCHoNbvouFaHW2Dj3kQaYHnGUZQyXyxR-Q-3qHc",
  },
});
