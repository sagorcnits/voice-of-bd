import axios from "axios";

export const createNews = async (news: any) => {
  // Implement your logic here to create a new news in your database
  const response = await axios.post("/api/news", news);
  return response.data;
};

export const getNews = async () => {
  // Implement your logic here to fetch all news from your database
  const response = await axios.get("/api/news");
  return response.data;
};
