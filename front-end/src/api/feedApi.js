import api from "./index";

export const getFeedList = async () => {
  const response = await api.get(`${process.env.REACT_APP_SERVER_URL}/feeds`);
  return response.data;
};

export const getFeed = async (id) => {
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/feeds/${id}`
  );
  return response.data;
};

export const getFeedCorrespondTotag = async (tagList) => {
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/tag/feeds/${tagList}`
  );
  return response.data;
};
