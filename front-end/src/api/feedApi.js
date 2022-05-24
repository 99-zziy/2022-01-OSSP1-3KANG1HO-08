import api from "./index";

export const getFeedList = async () => {
  const response = await api.get(`${process.env.REACT_APP_SERVER_URL}/feeds`);
  return response.data;
};
